import grantCalculatorService from "@services/grant-calculator/grant-calculator.service";
import React, { useEffect, useRef, useState } from "react";
import { DropDownDto } from "@services/common.dto";
import {
	FilterParamDto,
	GrantItemsDto,
} from "@services/grant-calculator/grant-option.output.dto";
import ConsultationModal from "../common/consultation-modal";
import AppBanner from "../common/banner";
import GrantsCalculator from "./children/grants-calculator";
import Testimonial from "../common/testimonial";
import ConsultationRequest from "../common/consultation-request";
import FollowUs from "../common/follow-us";
import "slick-carousel/slick/slick.css";
import ApplySection from "./children/apply-section";
import IeuGrants from "./children/ieu-grants";
import AppConst from "@config/app.const";
import {
	GrantOptionContent,
	GrantOptionContentType,
} from "./children/grant-option-content";

interface SeaiGrantProps {}

const SeaiGrantComponent: React.FC<SeaiGrantProps> = () => {
	const childRef = useRef<{ handleClick: () => void } | null>(null);

	const [grantOptions, setGrantOptions] = useState<Array<DropDownDto>>([]);
	const [houseTypes, setHouseTypes] = useState<Array<DropDownDto>>([]);
	const [loadingState, setLoadingState] = useState<boolean>(false);
	const [grantOptionContent, setGrantOptionContent] =
		useState<GrantOptionContentType | null>(null);

	const [filterParamState, setFilterParamState] =
		useState<FilterParamDto | null>(null);
	const [grantItemsState, setGrantItemsState] =
		useState<GrantItemsDto | null>();

	useEffect(() => {
		getDropdownData();
	}, []);

	useEffect(() => {
		if (filterParamState) onFilterChanged(filterParamState);
	}, [filterParamState]);

	const getDropdownData = async () => {
		try {
			const [grantOption, houseTypes] = await Promise.all([
				grantCalculatorService.getGrantOptions(),
				grantCalculatorService.getHouseTypes(),
			]);
			if (grantOption.length && houseTypes.length) {
				setGrantOptions(grantOption);
				setHouseTypes(houseTypes);
				setFilterParamState({
					grantOptionId: grantOption[0].id,
					houseTypeId: houseTypes[0].id,
					yearBuiltRange: 1,
				});
				updateGrantOptionContent(grantOption[0].id);
			}
		} catch (error) {
			console.log("getDropdownData Api Error", error);
		}
	};

	const onFilterChanged = async (params: FilterParamDto) => {
		try {
			setLoadingState(true);
			setGrantItemsState(null);
			const grantItems = await grantCalculatorService.getGrantItems(params);
			updateGrantOptionContent(params.grantOptionId);
			setLoadingState(false);
			setGrantItemsState(grantItems);
		} catch (error) {
			console.log("getGrantItems Error", error);
		}
	};

	const updateGrantOptionContent = (optionId: number) => {
		const optionName = grantOptions.find(x => x.id == optionId)?.name;
		const optionContent =
			GrantOptionContent.find(x => x.name == optionName) ||
			GrantOptionContent[0];

		setGrantOptionContent(optionContent);
	};

	return (
		<div className="app-home">
			<ConsultationModal ref={childRef} />
			<div className="seai-banner">
				<AppBanner
					bannerImage={
						AppConst.assetsBaseUrl + "seai-grant/banner-background.webp"
					}
					pageHeading="Individual Energy Upgrade Grants"
					title="SEAI Home Energy Grants"
					subTitle="With a wide range of grants available, there’s never been a better time to upgrade your home."
					buttonText="Get an Estimate"
					buttonLink="./home-energy-estimate"
					openButtonLinkInNewTab={true}
				/>
			</div>
			{filterParamState && (
				<GrantsCalculator
					grantOptions={grantOptions}
					houseTypes={houseTypes}
					onFilterChanged={onFilterChanged}
					grantItemsState={grantItemsState}
					setGrantItemsState={setGrantItemsState}
					filterParam={filterParamState}
					setFilterParamState={setFilterParamState}
					isLoading={loadingState}
					openCRform={() => {
						if (childRef.current) {
							childRef.current.handleClick();
						}
					}}
				/>
			)}
			{grantOptionContent && (
				<>
					<IeuGrants
						title={grantOptionContent.name}
						htmlContent={grantOptionContent.description}
					/>
					<ApplySection htmlContent={grantOptionContent.condition} />
				</>
			)}

			<div className="bg-[#F3F3F3] pb-[50px] md:pb-[90px]">
				<Testimonial />
			</div>
			<ConsultationRequest />
			<FollowUs />
		</div>
	);
};

export default SeaiGrantComponent;
