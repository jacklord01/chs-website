import ContactDetailForm from "@/components/common/contact-detail-form";
import { ContactDetailInputDto } from "@services/common.dto";
import heaService, {
	_HeaContactDetailStoreKey,
} from "@services/hea/hea.service";
import { EncodeingUtil } from "@utils/encoading-util";
import { StoreUtil } from "@utils/store-util";
import { useEffect } from "react";
import { toast } from "react-toastify";

interface ContactDetailsProps {
	changeTab(nextStep: number): void;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({
	changeTab,
}: ContactDetailsProps) => {

	const processContactDetail = (values: ContactDetailInputDto) => {
		try {
			StoreUtil.saveByKey(
				_HeaContactDetailStoreKey,
				EncodeingUtil.encodeBase64String(JSON.stringify(values))
			);
			changeTab(4);
		} catch (error) {
			toast.error(
				"Something went wrong. Please, try again after sometime."
			);
		}
	}

	return (
		<div className="app-started overflow-hidden">
			<div className="container mx-auto px-[16px]">
				<h3 className="text-[#204971] pb-[16px]">
					You&lsquo;re Nearly There!
				</h3>
				<p>
					Please enter your details below and then submit your
					enquiry. We will email you a copy of the complete report.
				</p>
				<ContactDetailForm
					infoFor='hea'
					contactPrevious={() => changeTab(2)}
					onSubmitContact={processContactDetail}
				>
					<RightSideSummary />
				</ContactDetailForm>
			</div>
		</div>
	);
};

export default ContactDetails;

const RightSideSummary = () => {
	return (
		<>
			<h3 className="leading-8 !border-0 font-normal">
				Get Your Accurate
				<b className="block">Home Energy Assessment</b> Report which
				includes
			</h3>
			<ul className="ts-list !mt-4">
				<li>
					<div className="icon">
						<svg width="12" viewBox="0 0 8 7" fill="currentColor">
							<use href="/images/sprite.svg#svg-check"></use>
						</svg>
					</div>
					A BER assessment.
				</li>
				<li>
					<div>
						<div className="icon">
							<svg
								width="12"
								viewBox="0 0 8 7"
								fill="currentColor"
							>
								<use href="/images/sprite.svg#svg-check"></use>
							</svg>
						</div>
					</div>
					A full technical report on the energy efficiency of your
					home.
				</li>
				<li>
					<div>
						<div className="icon">
							<svg
								width="12"
								viewBox="0 0 8 7"
								fill="currentColor"
							>
								<use href="/images/sprite.svg#svg-check"></use>
							</svg>
						</div>
					</div>
					Cost-effective, step-by-step fabric and ventilation upgrade
					plan.
				</li>
				<li>
					<div className="icon">
						<svg width="12" viewBox="0 0 8 7" fill="currentColor">
							<use href="/images/sprite.svg#svg-check"></use>
						</svg>
					</div>
					<b>Industry leading consultation.</b>
				</li>
			</ul>
		</>
	);
};
