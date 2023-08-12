import AppConst from "@config/app.const";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";
import AddressSearch from "../address-search";
import { AddressBuild } from "../address-search/address-types";
import CountryOptions from "../country-options";
import ContactDetailFormSchema from "./contact-detail.schema";
import { toast } from "react-toastify";
import consultationRequestService from "@services/consultation-request/consultation-request.service";
import { ContactDetailInputDto } from "@services/common.dto";
import RestoreDetail from "./restore-detail";

interface ContactDetailFormProps {
	infoFor: string;
	onSubmitContact(data: ContactDetailInputDto): void;
	contactPrevious(): void;
	children?: ReactNode;
}

const ContactDetailForm: React.FC<ContactDetailFormProps> = ({
	infoFor,
	onSubmitContact,
	contactPrevious,
	children,
}: ContactDetailFormProps) => {
	const initialValues: ContactDetailInputDto = {
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		eirCode: "",
		address: "",
		city: "",
		county: "",
		fkCountryId: 0,
		agreedPrivacyPolicy: false,
	};

	const [serviceAvailableState, setServiceAvailableState] =
		useState<boolean>(true);

	const checkServiceAvailability = async (eirCode: string) => {
		try {
			const output = await consultationRequestService.checkEirCode(eirCode);
			setServiceAvailableState(output);
		} catch (error) {
			setServiceAvailableState(false);
		}
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={ContactDetailFormSchema}
			onSubmit={(values, { setSubmitting }) => {
				setSubmitting(false);
				if (!values.agreedPrivacyPolicy) {
					toast.warning("Please check the terms and conditions.");
					return;
				}
				onSubmitContact(values);
			}}
		>
			{({ values, setFieldValue, isSubmitting }) => (
				<Form className="lg:flex lg:flex-row mt-7 lg:space-x-7">
					<RestoreDetail restoreFor={infoFor} />
					<div className="lg:basis-3/4">
						<FormField label="First Name" name="firstName" />
						<FormField label="Last Name" name="lastName" />
						<FormField label="Email" name="email" />
						<FormField label="Phone" name="phone" />
						<div className="form-group mb-5">
							<label className="form-label !font-[600]">Search Address</label>
							<AddressSearch
								onItemSelect={(result: AddressBuild) => {
									setFieldValue("eirCode", result.eirCode);
									setFieldValue("address", result.address);
									setFieldValue("city", result.town);
									setFieldValue("county", result.county);

									checkServiceAvailability(result.eirCode);
								}}
							/>
						</div>
						<FormField
							label="Eircode"
							name="eirCode"
							onBlur={() => {
								checkServiceAvailability(values.eirCode);
							}}
						/>
						<FormField label="Address" name="address" as="textarea" rows={6} />
						<FormField label="City/Town" name="city" />
						<FormField label="County" name="county" />
						<FormField
							label="Country"
							name="fkCountryId"
							as="select"
							className="form-select"
						>
							<CountryOptions fieldName="fkCountryId" />
						</FormField>
						<PrivacyPolicy />
						<div className="lg:block hidden">
							<FormActions
								onBack={contactPrevious}
								hideSubmit={!serviceAvailableState}
								disabled={isSubmitting}
							/>
						</div>
					</div>
					<div className="lg:basis-2/4">
						<div className="total-summary relative">
							<Image
								src={AppConst.assetsBaseUrl + "summary-bg.webp"}
								fill
								loading="lazy"
								alt="Image"
								sizes="(max-width: 470px) 100vw"
								className="object-cover"
							/>

							{children}
						</div>
						<div className="block lg:hidden button-group mt-5">
							<FormActions
								onBack={contactPrevious}
								hideSubmit={!serviceAvailableState}
								disabled={isSubmitting}
							/>
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default ContactDetailForm;

const FormField = (props: {
	label: string;
	name: string;
	type?: string;
	as?: string;
	children?: ReactNode;
	rows?: number;
	className?: string;
	onBlur?(): void;
}) => {
	return (
		<div className="form-group mb-5">
			<label className="form-label !font-[600]">
				{props.label}
				<span className="text-danger">*</span>
			</label>
			<Field
				className={props.className || "form-control"}
				type={props.type || "text"}
				placeholder="Type Here"
				name={props.name}
				as={props.as}
				rows={props.rows}
				onBlur={props.onBlur}
			>
				{props.children}
			</Field>
			<div className="error text-danger">
				<ErrorMessage name={props.name} />
			</div>
		</div>
	);
};

const PrivacyPolicy = () => {
	return (
		<>
			<p className="mb-6">
				By clicking &quot;Submit Enquiry&quot;, your enquiry will be sent to
				Churchfield Home Services. You will receive follow-up calls to progress
				your enquiry. For information on how we will handle your data, please
				see our{" "}
				<Link
					href="/privacy-policy"
					className="text-[#08A8FF] hover:text-[#204971] transition"
				>
					Privacy Notice
				</Link>{" "}
				and{" "}
				<Link
					href="/terms-conditions"
					className="text-[#08A8FF] hover:text-[#204971] transition"
				>
					Terms of Service.
				</Link>
			</p>

			<div className="flex mt-5 pb-6">
				<label className="app-form--checkbox">
					<Field
						className="checkbox"
						type="checkbox"
						name="agreedPrivacyPolicy"
					/>
					<span className="text-center !top-[3px]">
						<svg width="10" viewBox="0 0 8 7" fill="currentColor">
							<use href="/images/sprite.svg#svg-check"></use>
						</svg>
					</span>
					<p className="app-form--checkbox-text !text-[#0D0D0D] opacity-50">
						Please tick here to indicate you have read our Privacy Notice and
						agree to our Terms of Service
					</p>
				</label>
			</div>
		</>
	);
};

const FormActions = (props: {
	disabled: boolean;
	onBack(): void;
	hideSubmit: boolean;
}) => {
	return (
		<div className="flex justify-between pt-[32px]">
			<button
				type="button"
				className="btn btn-primary outline secondary-hover"
				onClick={props.onBack}
			>
				Back
			</button>

			{props.hideSubmit ? (
				<p>
					Sorry, unfortunately, we do not provide any services <br /> in your
					area at the moment
				</p>
			) : (
				<button
					className="btn btn-primary"
					type="submit"
					disabled={props.disabled}
				>
					Submit Enquiry
				</button>
			)}
		</div>
	);
};
