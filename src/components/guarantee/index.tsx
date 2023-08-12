import React from "react";
import AppBanner from "../common/banner";
import "slick-carousel/slick/slick.css";
import dynamic from "next/dynamic";
import GuaranteeService from "./children/guarantee-service";
import GuaranteeAccordion from "./children/guarantee-accordion";
import AppConst from "@config/app.const";
import ConsultationModal from "../common/consultation-modal";

const FollowUs = dynamic(() => import("../common/follow-us"));
const ConsultationRequest = dynamic(
	() => import("../common/consultation-request")
);
const Accreditations = dynamic(() => import("../common/accreditations"));
const Testimonial = dynamic(() => import("../common/testimonial"));

interface GuaranteeComponentProps {}

const GuaranteeComponent: React.FC<GuaranteeComponentProps> = () => {
	return (
		<div className="app-building-survey">
			<ConsultationModal />
			<AppBanner
				bannerImage={AppConst.assetsBaseUrl + "guarantee/banner-bg-new.webp"}
				pageHeading="Guarantees"
				title="Your peace of mind is important to us."
				subTitle="We Survey, Install and Guarantee. "
			/>

			<GuaranteeService />
			{/* <GuaranteeAccordion /> */}
			<Testimonial />
			<Accreditations />
			<ConsultationRequest />
			<FollowUs />
		</div>
	);
};

export default GuaranteeComponent;
