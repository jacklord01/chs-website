import React from "react";
import AppBanner from "../common/banner";
import "slick-carousel/slick/slick.css";
import EnergyBook from "../common/energy-book";
import PageQuote from "../common/page-quote";
import EnergyService from "./children/energy-service";
import ComparingQuotations from "./children/comparing-quotations";
import AppConst from "@config/app.const";
import dynamic from "next/dynamic";
import ConsultationModal from "../common/consultation-modal";

const FollowUs = dynamic(() => import("../common/follow-us"));
const ConsultationRequest = dynamic(
	() => import("../common/consultation-request")
);
const Accreditations = dynamic(() => import("../common/accreditations"));
const Testimonial = dynamic(() => import("../common/testimonial"));

interface DetailedQuotationsComponentProps {}

const DetailedQuotationsComponent: React.FC<
	DetailedQuotationsComponentProps
> = () => {
	return (
		<div className="app-building-survey">
			<ConsultationModal />
			<AppBanner
				bannerImage={
					AppConst.assetsBaseUrl + "detailed-quotations/banner-bg-new.webp"
				}
				pageHeading="Detailed Quotations"
				title="The right upgrades, in the right order, to the right specification."
				subTitle="We Survey, Install and Guarantee."
				buttonText="Get Quotation"
				buttonLink="./survey-quotation-calculate"
			/>
			<PageQuote
				title="We'll provide you with best in class, detailed, transparent "
				subTitle="quotations for all works."
				imagePath={
					AppConst.assetsBaseUrl + "detailed-quotations/service-new.webp"
				}
				quoteText="We believe in building long-term trusting relationships with our customers and the first requirement to build trust is transparency. It's critically important that all parties are 100% clear on not only the work that is included as part of any quotation but also details of the materials to be used."
				details="In order to provide you with the standard of quotations not seen before in our industry, we built our own software Q-Smart to give you predictable, accurate, and transparent quotations each and every time, so you can see where your money is being spent. We even got shortlisted for the Irish Construction Awards for it in the process."
			/>

			<EnergyService />
			<ComparingQuotations />

			<EnergyBook />
			<Testimonial />
			<Accreditations />
			<ConsultationRequest />
			<FollowUs />
		</div>
	);
};

export default DetailedQuotationsComponent;
