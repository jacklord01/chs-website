import React from "react";
import AppBanner from "../common/banner";
import "slick-carousel/slick/slick.css";
import Stories from "../common/strories";
import EnergyBook from "../common/energy-book";
import PageQuote from "../common/page-quote";
import Plan from "./plan";
import AppConst from "@config/app.const";
import dynamic from "next/dynamic";
import ConsultationModal from "../common/consultation-modal";

const FollowUs = dynamic(() => import("../common/follow-us"));
const ConsultationRequest = dynamic(
	() => import("../common/consultation-request")
);
const Accreditations = dynamic(() => import("../common/accreditations"));
const Testimonial = dynamic(() => import("../common/testimonial"));

const embedID = "vSZ8UxFhalw";

interface UpgradePlanComponentProps {}

const UpgradePlanComponent: React.FC<UpgradePlanComponentProps> = () => {
	return (
		<div className="app-building-survey">
			<ConsultationModal />
			<AppBanner
				bannerImage={AppConst.assetsBaseUrl + "upgrade-plan/banner-bg-new.webp"}
				pageHeading="Your Upgrade Plan"
				title="The right upgrades, in the right order, to the right specification"
				subTitle="We Survey, Install and Guarantee."
				buttonText="Book Now"
				buttonLink="./survey-quotation-calculate"
			/>
			<PageQuote
				title="We'll provide you with a plan that sets out your overall energy"
				subTitle="efficiency goal and what steps you need to take to achieve it."
				imagePath={AppConst.assetsBaseUrl + "upgrade-plan/service.webp"}
				quoteText="It's really important to plan your retrofit journey in a way that ensures that improvements are carried out in an organised, sensible order, with installations and refits complementing each other rather than working against each other."
				quoteText2="There are lots of elements to consider when planning your retrofit that have a direct impact on each other."
			/>

			<Plan />

			<Stories
				title="Your Upgrade Plan Explained"
				subTitle="Watch our short video to learn more about what is included as part of your upgrade plan."
				buttonText="Book Now"
				btnUrl="./survey-quotation-calculate"
				embedID={embedID}
			/>

			<EnergyBook />
			<Testimonial />
			<Accreditations />
			<ConsultationRequest />
			<FollowUs />
		</div>
	);
};

export default UpgradePlanComponent;
