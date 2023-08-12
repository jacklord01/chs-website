import HouseTypeSlider from "@/components/common/house-type-slider";
import AppConst from "@config/app.const";
import fileUploadService from "@services/file-upload.service";
import { HouseTypeDto } from "@services/fuel-cost/dto/inti-data.output.dto";
import { HeaHomeDetailDto } from "@services/hea/dto/hea-home-detail.dto";
import { StoreysEnum } from "@services/hee/enum/storeys-no.enum";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Image from "next/image";
import * as Yup from "yup";
import PopulateHeaHomeDetailStoreValue from "./set-form-value";

interface HeaHouseDetailFormProps {
	houseTypeChsList: Array<HouseTypeDto>;
	onSubmitDetailForm(data: HeaHomeDetailDto): void;
	isLoading?: boolean;
	onBackClick(): void;
}

const HeaHouseDetailForm: React.FC<HeaHouseDetailFormProps> = ({
	houseTypeChsList,
	onSubmitDetailForm,
	isLoading,
	onBackClick,
}: HeaHouseDetailFormProps) => {
	const validationSchema = Yup.object().shape({
		houseTypeId: Yup.number().min(1, "Please, select a house type."),
		houseTypeName: Yup.string(),
		houseThumbnail: Yup.string(),
		noOfStoreys: Yup.number(),
		hasExtention: Yup.number(),
		hasAtticConversion: Yup.number(),
		imageFileUrl: Yup.string(),
		noPhotoChecked: Yup.bool(),
		selectedImageGuId: Yup.string().when("noPhotoChecked", {
			is: false,
			then: schema => schema.required("Please, select an image."),
		}),
	});

	return (
		<Formik
			initialValues={{
				houseTypeId: 0,
				noOfStoreys: StoreysEnum["2 storeys"],
				hasExtention: 0,
				hasAtticConversion: 0,
				imageFileUrl: undefined,
				selectedImageGuId: undefined,
				noPhotoChecked: false,
			}}
			validationSchema={validationSchema}
			onSubmit={values => {
				onSubmitDetailForm(values as HeaHomeDetailDto);
			}}
		>
			{({ values, handleChange, setFieldValue }) => (
				<Form>
					<PopulateHeaHomeDetailStoreValue />
					<HouseTypeSlider
						isLoading={isLoading}
						houseTypes={houseTypeChsList}
						selectedHouse={values.houseTypeId}
						onHouseTypeSelect={(selectedId: number) => {
							setFieldValue("houseTypeId", selectedId);
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
									No. of Storeys
								</label>
								<div className="sm:flex flex-row mt-2 sm:space-x-7">
									<div className="d-inline-flex my-2">
										<label className="app-form--radio">
											<Field
												type="radio"
												name="noOfStoreys"
												value={StoreysEnum["1 storey"]}
												onChange={(
													event: React.ChangeEvent<HTMLInputElement>
												) => {
													setFieldValue(
														"noOfStoreys",
														event.currentTarget
															.value
													);
													setFieldValue(
														"hasAtticConversion",
														0
													);
												}}
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
												onChange={(
													event: React.ChangeEvent<HTMLInputElement>
												) => {
													setFieldValue(
														"noOfStoreys",
														event.currentTarget
															.value
													);
													setFieldValue(
														"hasAtticConversion",
														0
													);
												}}
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
												onChange={(
													event: React.ChangeEvent<HTMLInputElement>
												) => {
													setFieldValue(
														"noOfStoreys",
														event.currentTarget
															.value
													);
													setFieldValue(
														"hasAtticConversion",
														1
													);
												}}
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
									Is there an Extension?
								</label>
								<Field
									as="select"
									className="form-select"
									name="hasExtention"
								>
									<option value={"0"}>No</option>
									<option value={"1"}>Yes</option>
								</Field>
								<div className="error text-danger">
									<ErrorMessage name="hasExtention" />
								</div>
							</div>
							<div className="form-group mb-6">
								<label className="form-label form-label-lg">
									Is there an Attic Conversion?
								</label>
								<Field
									as="select"
									className="form-select"
									name="hasAtticConversion"
								>
									<option value={0}>No</option>
									<option value={1}>Yes</option>
								</Field>
								<div className="error text-danger">
									<ErrorMessage name="hasAtticConversion" />
								</div>
							</div>
						</div>
						<div className="lg:basis-2/4">
							<div className="form-group mb-6 lg:mt-[100px] mt-6">
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
					<div className="lg:flex flex-row mt-7 lg:space-x-7">
						<div className="lg:basis-3/4">
							<div className="button-group flex justify-between">
								<button
									className="btn btn-primary outline secondary-hover"
									type="button"
									onClick={onBackClick}
								>
									Back
								</button>
								<button
									className="btn btn-primary"
									type="submit"
								>
									Next
								</button>
							</div>
						</div>
						<div className="lg:basis-2/4"></div>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default HeaHouseDetailForm;
