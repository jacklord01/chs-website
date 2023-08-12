import Image from "next/image";
import React, { useEffect, useState } from "react";
import ActionButtons from "../action-buttons";
import LoanAmount from "./loan-amount";
import LoanDuration from "./loan-duration";
import { FinancialOptionOutputDto } from "@services/hee/dto/financial-option.output.dto";
import heeService, { _HeeFinanceStoreKey } from "@services/hee/hee.service";
import AppConst from "@config/app.const";
import { StoreUtil } from "@utils/store-util";
import { EncodeingUtil } from "@utils/encoading-util";
import { AvailavedLoanInfo } from "@services/hee/dto/availed-loan.info";
import LoanSummary from "./loan-summary";

import Slider from "react-slick";
import SliderSkeleton from "@/components/common/loader";
import { toast } from "react-toastify";
import sliderConfig from "config/slider-config";

interface FinanceOptionProps {
	changeTab(nextStep: number): void;
}

const FinanceOption: React.FC<FinanceOptionProps> = ({
	changeTab,
}: FinanceOptionProps) => {
	const [financialOptions, setFinancialOptions] = useState<
		Array<FinancialOptionOutputDto>
	>([]);
	const [availedLoanInfo, setAvailedLoanInfo] = useState<AvailavedLoanInfo>({
		interestedLoanAmount: 0,
		interestedLoanTerm: 0,
	});

	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		//If user come back from prevous stage, we are populating all selected options form local storage
		const fetchStoreInfo = async () => {
			if (StoreUtil.isExist(_HeeFinanceStoreKey)) {
				const financeInfo = JSON.parse(
					EncodeingUtil.decodeBase64(
						StoreUtil.getByKey(_HeeFinanceStoreKey) || ""
					)
				) as AvailavedLoanInfo;
				if (financeInfo.interested) {
					setLoading(true);
					const options = await heeService.getFinancialOption();
					setLoading(false);
					options.length && setFinancialOptions(options);
				}
				setAvailedLoanInfo(financeInfo);
			}
		};
		fetchStoreInfo();
	}, []);

	const onChangeInterest = async (value: string) => {
		setAvailedLoanInfo({
			...availedLoanInfo,
			interested: !!(value === "interested"),
		});
		if (value === "interested" && !financialOptions.length) {
			setLoading(true);
			const options = await heeService.getFinancialOption();
			setLoading(false);
			options.length && setFinancialOptions(options);
		}
	};

	const onFinanceOptionChange = (selectedFinance: FinancialOptionOutputDto) => {
		setAvailedLoanInfo({
			...availedLoanInfo,
			selectedOption: selectedFinance,
		});
	};

	const onActionClicked = (nextIndex: number, actionType: string) => {
		StoreUtil.saveByKey(
			_HeeFinanceStoreKey,
			EncodeingUtil.encodeBase64String(JSON.stringify(availedLoanInfo))
		);

		if (availedLoanInfo.interested && !availedLoanInfo.selectedOption?.id) {
			toast.warning("Please, select finance a option");
			return;
		}

		if (
			availedLoanInfo.interested &&
			availedLoanInfo.interestedLoanAmount < 1
		) {
			toast.warning("Please, specify the loan amount you require.");
			return;
		}

		if (availedLoanInfo.interested && availedLoanInfo.interestedLoanTerm < 1) {
			toast.warning("Please, specify the loan duration.");
			return;
		}
		changeTab(nextIndex);
	};

	const availableFinanceSliderSetting = {
		...sliderConfig,
		nextArrow: <Arrow direction="right" />,
		prevArrow: <Arrow direction="left" />,
	};

	return (
		<div className="app-started overflow-hidden">
			<div className="container mx-auto px-[16px]">
				<div className="form-group mb-6 border-b border-[rgba(13, 13, 13, 0.15)]">
					<label className="form-label form-label-lg">
						Want to Avail of Low Interest Finance?
					</label>
					<div className="sm:flex flex-row mt-2 sm:space-x-7">
						<div className="d-inline-flex my-2">
							<label className="app-form--radio">
								<input
									type="radio"
									name="interest-finances"
									defaultChecked={availedLoanInfo.interested}
									onChange={() => onChangeInterest("interested")}
									hidden
								/>
								<span className="radio-v2"></span>
								<p className="app-form--checkbox-text">YES, I AM INTERESTED</p>
							</label>
						</div>
						<div className="d-inline-flex my-2">
							<label className="app-form--radio radio-v2">
								<input
									type="radio"
									name="interest-finances"
									defaultChecked={!availedLoanInfo.interested}
									onChange={() => onChangeInterest("notinterested")}
									hidden
								/>
								<span className="radio-v2"></span>
								<p className="app-form--checkbox-text">NO, THANKS</p>
							</label>
						</div>
					</div>
				</div>

				{availedLoanInfo.interested && (
					<>
						<div className="form-group mb-6">
							<label className="form-label form-label-lg">
								Available Finance
							</label>
							{loading ? (
								<SliderSkeleton />
							) : (
								<div className="checkbox-group mt-4 overflow-hidden">
									{financialOptions.length && (
										<Slider {...availableFinanceSliderSetting}>
											{financialOptions.length > 0 &&
												financialOptions.map(x => (
													<div className="checkbox-item !w-auto" key={x.id}>
														<input
															type="radio"
															id={"option_" + x.id}
															name="AvailableFinance"
															defaultChecked={
																x.id === availedLoanInfo.selectedOption?.id
															}
															onChange={() => onFinanceOptionChange(x)}
															hidden
														/>
														<label
															htmlFor={"option_" + x.id}
															className="custom-checkbox"
														>
															<span className="checkbox-content w-full">
																<span className="w-[125px] h-[120px] m-auto mb-3 block overflow-hidden">
																	<Image
																		src={AppConst.imageBaseUrl + x.imagePath}
																		className="!w-full !h-full"
																		alt="House Type"
																		loading="lazy"
																		width="100"
																		height="100"
																	/>
																</span>
															</span>
														</label>
														<span className="check-icon">
															<svg
																width="12"
																viewBox="0 0 8 7"
																fill="currentColor"
															>
																<use href="/images/sprite.svg#svg-check"></use>
															</svg>
														</span>
													</div>
												))}
										</Slider>
									)}
								</div>
							)}
						</div>

						{availedLoanInfo.selectedOption && (
							<div className="lg:flex lg:flex-row mt-7 lg:space-x-7">
								<div className="lg:basis-3/4">
									<div className="form-group mb-6">
										<label className="form-label form-label-lg">
											How much finance do you need?{" "}
											{availedLoanInfo.selectedOption.name}
										</label>
										<LoanAmount
											maxLoan={availedLoanInfo.selectedOption.maxLoanAmount}
											currentValue={availedLoanInfo.interestedLoanAmount}
											onAmountChange={(amount: number) =>
												setAvailedLoanInfo({
													...availedLoanInfo,
													interestedLoanAmount: amount,
												})
											}
										/>
										<LoanDuration
											maxTerm={availedLoanInfo.selectedOption.maxLoanTerm}
											currentValue={availedLoanInfo.interestedLoanTerm}
											onTermChange={(amount: number) =>
												setAvailedLoanInfo({
													...availedLoanInfo,
													interestedLoanTerm: amount,
												})
											}
										/>
									</div>
								</div>

								<div className="lg:basis-2/4">
									<LoanSummary availedLoanInfo={availedLoanInfo} />
								</div>
							</div>
						)}
					</>
				)}

				<h3 className="text-[#204971] pb-[10px] md:mt-[60px] mt-[50px]">
					Disclaimer
				</h3>
				<p>
					Please note, the Churchfield Home Services finance calculator results
					are for illustrative purposes only.
				</p>

				<div className="button-group">
					<ActionButtons
						currentStepIndex={3}
						label_1={"Back"}
						label_2={"Next"}
						showNext={true}
						showBack={true}
						onButtonClick={onActionClicked}
					/>
				</div>
			</div>
		</div>
	);
};

const Arrow = ({
	onClick,
	direction,
}: {
	onClick?(): void;
	direction: string;
}) => {
	return (
		<div
			className="absolute w-[55px] h-full top-0 z-10 flex items-center slider-arrow justify-center cursor-pointer"
			onClick={onClick}
			style={
				direction == "right"
					? {
							justifyContent: "end",
							right: "15px",
							background:
								"linear-gradient(90deg, rgba(243, 243, 243, 0) 0%, #f3f3f3 69.63%)",
					  }
					: { right: "auto" }
			}
		>
			<div className="h-[30px] w-[30px] rounded-full text-white bg-[#08A8FF] flex items-center justify-center">
				<svg
					width="8"
					height="14"
					viewBox="0 0 8 14"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
				>
					<use href={"/images/sprite.svg#svg-slider-" + direction}></use>
				</svg>
			</div>
		</div>
	);
};

export default FinanceOption;
