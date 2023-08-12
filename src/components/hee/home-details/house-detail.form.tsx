import HouseTypeSlider from "@/components/common/house-type-slider";
import AppConst from "@config/app.const";
import { DropDownDto } from "@services/common.dto";
import fileUploadService from "@services/file-upload.service";
import {
	BERObject,
	HeatSource,
	HouseTypeDto,
	PrimaryHeatSource,
} from "@services/fuel-cost/dto/inti-data.output.dto";
import fuleCostService from "@services/fuel-cost/fule-cost.service";
import { HomeDetailDto } from "@services/hee/dto/home-detail.input.dto";
import { YearBuiltOutputDto } from "@services/hee/dto/year-built.output";
import { StoreysEnum } from "@services/hee/enum/storeys-no.enum";
import { _HeeHomeDetailStoreKey } from "@services/hee/hee.service";
import { EncodeingUtil } from "@utils/encoading-util";
import { StoreUtil } from "@utils/store-util";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Image from "next/image";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import PopulateStoreValue from "./set-form-value";

interface HouseDetailFormProps {
	houseTypeChsList: Array<HouseTypeDto>;
	yearBuildOptions: Array<YearBuiltOutputDto>;
	primaryHeatSourcList: Array<PrimaryHeatSource>;
	berChsList: Array<BERObject>;
	onSubmitDetailForm(data: HomeDetailDto): void;
	isLoading?: boolean;
}

const HouseDetailForm: React.FC<HouseDetailFormProps> = ({
	houseTypeChsList,
	yearBuildOptions,
	primaryHeatSourcList,
	berChsList,
	onSubmitDetailForm,
	isLoading,
}: HouseDetailFormProps) => {
	const validationSchema = Yup.object().shape({
		houseTypeId: Yup.number().min(1, "Please, select a house type."),
		houseTypeName: Yup.string(),
		houseThumbnail: Yup.string(),
		yearBuiltId: Yup.number().min(1, "Please, select an year built."),
		noOfStoreys: Yup.number(),
		floorArea: Yup.number()
			.min(1, "Please, enter a valid data.")
			.required("Please, enter a value."),
		primaryHeatSourceId: Yup.number().min(
			1,
			"Please, select a primary heat source."
		),
		heatSourceId: Yup.number().min(1, "Please, select a heat source."),
		berId: Yup.number().min(1, "Please, select a BER option"),
		imageFileUrl: Yup.string(),
		noPhotoChecked: Yup.bool(),
		selectedImageGuId: Yup.string().when("noPhotoChecked", {
			is: false,
			then: schema => schema.required("Please, select an image."),
		}),
	});

	const [heatSources, setHeatSources] = useState<Array<HeatSource>>([]);

	const handlePrimaryHeatSourceChange = (id: number) => {
		if (id) {
			const primaryHeatingObj = primaryHeatSourcList.find(
				x => x.id === id
			);
			const heatSources = primaryHeatingObj?.heatSources || [];
			setHeatSources(heatSources);
		}
	};

	useEffect(() => {
		if (StoreUtil.isExist(_HeeHomeDetailStoreKey)) {
			const homeDetails = JSON.parse(
				EncodeingUtil.decodeBase64(
					StoreUtil.getByKey(_HeeHomeDetailStoreKey) || ""
				)
			) as HomeDetailDto;
			if (homeDetails?.primaryHeatSourceId) {
				const primaryHeatingObj = primaryHeatSourcList.find(
					x => x.id === +homeDetails.primaryHeatSourceId
				);
				const heatSources = primaryHeatingObj?.heatSources || [];
				setHeatSources(heatSources);
			}
		}
	}, [primaryHeatSourcList]);

	const getExisitingBer = async (
		houseTypeId: number,
		yearBuiltId: number,
		primaryHeatSourceId: number,
		heatSourceId: number
	) => {
		if (houseTypeId && yearBuiltId && primaryHeatSourceId && heatSourceId) {
			let berId = 0;
			const yearBuilt = yearBuildOptions.find(
				x => x.id === yearBuiltId
			)?.from;

			const centralHeatSourceId = primaryHeatSourcList.find(
				x => x.id === primaryHeatSourceId
			)?.centralHeatingTypeId;

			if (yearBuilt && centralHeatSourceId) {
				const output =
					await fuleCostService.getCalculatedBerWithPerKWHPrice(
						yearBuilt,
						primaryHeatSourceId,
						centralHeatSourceId,
						heatSourceId,
						houseTypeId
					);

				if (output.berId) berId = output.berId;
			}

			return berId;
		}
	};

	return (
		<Formik
			initialValues={{
				houseTypeId: 0,
				yearBuiltId: 0,
				noOfStoreys: StoreysEnum["2 storeys"],
				floorArea: 0,
				primaryHeatSourceId: 0,
				heatSourceId: 0,
				berId: 0,
				imageFileUrl: undefined,
				selectedImageGuId: undefined,
				noPhotoChecked: false,
			}}
			validationSchema={validationSchema}
			onSubmit={values => {
				onSubmitDetailForm(values as HomeDetailDto);
			}}
		>
			{({ values, handleChange, setFieldValue }) => (
				<Form>
					<PopulateStoreValue />
					<HouseTypeSlider
						isLoading={isLoading}
						houseTypes={houseTypeChsList}
						selectedHouse={values.houseTypeId}
						onHouseTypeSelect={async (
							selectedId: number,
							houseTypeName: string,
							houseThumbnail: string,
							estimatedFloor: number
						) => {
							setFieldValue("houseTypeId", selectedId);
							setFieldValue("houseTypeName", houseTypeName);
							setFieldValue("houseThumbnail", houseThumbnail);
							setFieldValue("floorArea", estimatedFloor);

							const berId = await getExisitingBer(
								+selectedId,
								+values.yearBuiltId,
								+values.primaryHeatSourceId,
								+values.heatSourceId
							);

							berId && setFieldValue("berId", berId);

							//Set Thumbnail for house type
							const htmbnailUrl = houseTypeChsList.find(
								x => x.id == selectedId
							)?.thumbnailPath;
							htmbnailUrl &&
								setFieldValue(
									"imageFileUrl",
									AppConst.imageBaseUrl + htmbnailUrl
								);
						}}
					/>
					<div className="error text-danger">
						<ErrorMessage name="houseTypeId" />
					</div>
					<div className="lg:flex flex-row mt-7 lg:space-x-7">
						<div className="lg:basis-3/4">
							<div className="form-group mb-6">
								<label className="form-label form-label-lg">
									Select the year your home was built?
								</label>
								<Field
									as="select"
									name="yearBuiltId"
									className="form-select"
									onChange={async (
										event: React.ChangeEvent<HTMLInputElement>
									) => {
										const yearBuiltId =
											+event.currentTarget.value;
										setFieldValue(
											"yearBuiltId",
											yearBuiltId
										);

										const berId = await getExisitingBer(
											+values.houseTypeId,
											yearBuiltId,
											+values.primaryHeatSourceId,
											+values.heatSourceId
										);

										berId && setFieldValue("berId", berId);
									}}
								>
									<option value={0} disabled>
										Select an option
									</option>
									{yearBuildOptions.map(option => (
										<option
											key={option.id}
											value={option.id}
										>
											{option.name}
										</option>
									))}
								</Field>
								<div className="error text-danger">
									<ErrorMessage name="yearBuiltId" />
								</div>
							</div>
							<div className="form-group mb-6">
								<label className="form-label form-label-lg">
									No. of Storeys
								</label>
								<div className="sm:flex flex-row mt-2 sm:space-x-7">
									<div className="d-inline-flex my-2">
										<label className="app-form--radio">
											<Field
												type="radio"
												name="noOfStoreys"
												value={StoreysEnum["1 storey"]}
												onChange={handleChange}
												checked={
													values.noOfStoreys ==
													StoreysEnum["1 storey"]
												}
											/>
											<span className="radio-v2"></span>
											<p className="app-form--checkbox-text">
												1 storey
											</p>
										</label>
									</div>
									<div className="d-inline-flex my-2">
										<label className="app-form--radio radio-v2">
											<Field
												type="radio"
												name="noOfStoreys"
												value={StoreysEnum["2 storeys"]}
												onChange={handleChange}
												checked={
													values.noOfStoreys ==
													StoreysEnum["2 storeys"]
												}
											/>
											<span className="radio-v2"></span>
											<p className="app-form--checkbox-text">
												2 storey
											</p>
										</label>
									</div>
									<div className="d-inline-flex my-2">
										<label className="app-form--radio radio-v2">
											<Field
												type="radio"
												name="noOfStoreys"
												value={
													StoreysEnum[
														"2 storey with attic conversion"
													]
												}
												onChange={handleChange}
												checked={
													values.noOfStoreys ==
													StoreysEnum[
														"2 storey with attic conversion"
													]
												}
											/>
											<span className="radio-v2"></span>
											<p className="app-form--checkbox-text">
												2 storey with attic conversion
											</p>
										</label>
									</div>
								</div>
							</div>
							<div className="form-group mb-6">
								<label className="form-label form-label-lg">
									Floor Area
								</label>
								<div className="relative">
									<Field
										type="number"
										placeholder="Type here"
										className="form-control pr-[45px]"
										name="floorArea"
									/>
									<span className="text-[#204970] absolute top-[12px] right-[16px]">
										m<sup>2</sup>
									</span>
								</div>
								<div className="error text-danger">
									<ErrorMessage name="floorArea" />
								</div>
							</div>
							<div className="form-group mb-6">
								<label className="form-label form-label-lg">
									Primary Heating System
								</label>
								<Field
									as="select"
									className="form-select"
									name="primaryHeatSourceId"
									onChange={(
										event: React.ChangeEvent<HTMLInputElement>
									) => {
										setFieldValue(
											"primaryHeatSourceId",
											event.currentTarget.value
										);
										handlePrimaryHeatSourceChange(
											+event.currentTarget.value
										);
									}}
								>
									<option value={0}>Select Option</option>
									{primaryHeatSourcList.map(hs => (
										<option key={hs.id} value={hs.id}>
											{hs.name}
										</option>
									))}
								</Field>
								<div className="error text-danger">
									<ErrorMessage name="primaryHeatSourceId" />
								</div>
							</div>
							<div className="form-group mb-6">
								<label className="form-label form-label-lg">
									Heat Source
								</label>
								<Field
									as="select"
									className="form-select"
									name="heatSourceId"
									onChange={async (
										event: React.ChangeEvent<HTMLInputElement>
									) => {
										const heatSourceId =
											+event.currentTarget.value;

										setFieldValue("berId", 0);
										setFieldValue(
											"heatSourceId",
											heatSourceId
										);

										//We need to get Current BER value using fuel cost calculator.
										const berId = await getExisitingBer(
											+values.houseTypeId,
											+values.yearBuiltId,
											+values.primaryHeatSourceId,
											heatSourceId
										);

										berId && setFieldValue("berId", berId);
									}}
								>
									<option value={0}>Select Option</option>
									{heatSources.map(hs => (
										<option key={hs.id} value={hs.id}>
											{hs.name}
										</option>
									))}
								</Field>
								<div className="error text-danger">
									<ErrorMessage name="heatSourceId" />
								</div>
							</div>
							<div className="form-group mb-6">
								<label className="form-label form-label-lg">
									What is your Existing BER?
								</label>
								<Field
									as="select"
									className="form-select"
									name="berId"
								>
									<option value={0}>Select Option</option>
									{berChsList.map(ber => (
										<option key={ber.id} value={ber.id}>
											{ber.berName}
										</option>
									))}
								</Field>
								<div className="error text-danger">
									<ErrorMessage name="berId" />
								</div>
							</div>
						</div>
						<div className="lg:basis-2/4">
							<div className="form-group mb-6 lg:mt-[210px] mt-6">
								<label className="form-label form-label-lg">
									Property Photo{" "}
									<span className="text-danger">*</span>
								</label>
								<div className="file-upload relative">
									<input
										type="file"
										id="image-upload"
										onChange={async (
											event: React.ChangeEvent<HTMLInputElement>
										) => {
											if (
												event.currentTarget.files
													?.length
											) {
												const selectedImage =
													event.currentTarget
														.files[0];
												const uploadResult =
													await fileUploadService.upload(
														selectedImage
													);
												if (uploadResult.length) {
													setFieldValue(
														"selectedImageGuId",
														uploadResult[0]
													);
													setFieldValue(
														"imageFileUrl",
														URL.createObjectURL(
															selectedImage
														)
													);
													setFieldValue(
														"noPhotoChecked",
														false
													);
												}
											}
										}}
										accept="image/*"
										hidden
									/>

									<label
										className={`relative overflow-hidden ${
											values.imageFileUrl
												? "bg-[#f3f3f3]"
												: ""
										}`}
										htmlFor="image-upload"
									>
										<Image
											src={
												values.imageFileUrl ||
												AppConst.assetsBaseUrl +
													"upload-bg.webp"
											}
											fill
											loading="lazy"
											alt="Image"
											sizes="(max-width: 300px) 100vw"
											className={
												values.imageFileUrl
													? "object-contain w-full h-full"
													: ""
											}
										/>
										<div
											className={
												values.imageFileUrl
													? "!opacity-0"
													: ""
											}
										>
											<svg
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="CurrentColor"
											>
												<use href="/images/sprite.svg#svg-image+"></use>
											</svg>
											<span>Upload Image</span>
										</div>
									</label>
									{values.selectedImageGuId && (
										<span
											className="absolute top-[10px] right-[10px] p-1 bg-[#ff3f41] h-[25px] w-[25px] flex items-center justify-center rounded-full cursor-pointer"
											onClick={() => {
												setFieldValue(
													"selectedImageGuId",
													null
												);
												if (values.houseTypeId) {
													const htmbnailUrl =
														houseTypeChsList.find(
															x =>
																x.id ==
																values.houseTypeId
														)?.thumbnailPath;
													htmbnailUrl &&
														setFieldValue(
															"imageFileUrl",
															AppConst.imageBaseUrl +
																htmbnailUrl
														);
												} else
													setFieldValue(
														"imageFileUrl",
														null
													);
											}}
										>
											<svg
												width="12"
												viewBox="0 0 26 27"
												fill="white"
											>
												<use href="/images/sprite.svg#svg-close"></use>
											</svg>
										</span>
									)}
								</div>
								<div className="error text-danger">
									<ErrorMessage name="selectedImageGuId" />
								</div>

								<div className="flex items-cetner mt-5">
									<label className="app-form--checkbox">
										<Field
											type="checkbox"
											className="checkbox"
											name="noPhotoChecked"
										/>
										<span className="text-center">
											<svg
												width="10"
												viewBox="0 0 8 7"
												fill="currentColor"
											>
												<use href="/images/sprite.svg#svg-check"></use>
											</svg>
										</span>
										<p className="app-form--checkbox-text">
											I don&lsquo;t have a photo to hand
										</p>
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="mb-6">
						<button className="btn btn-primary" type="submit">
							Next
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default HouseDetailForm;
