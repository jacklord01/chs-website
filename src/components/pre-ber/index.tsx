import React from "react";
import AppBanner from "../common/banner";
import "slick-carousel/slick/slick.css";
import Stories from "../common/strories";
import EnergyBook from "../common/energy-book";
import EnergyService from "./children/energy-service";
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

interface PreBerComponentProps { }

const PreBerComponent: React.FC<PreBerComponentProps> = () => {
	return (
		<div className="app-building-survey">
			<ConsultationModal />
			<AppBanner
				bannerImage={AppConst.assetsBaseUrl + "pre-ber/banner-bg-v2.webp"}
				pageHeading="Pre-BER"
				title="Pre-BER Assessment"
				subTitle="A measure of your home's Energy Efficiency."
				buttonText="Book Now"
				buttonLink="./survey-quotation-calculate"
			/>

			<EnergyService />
			<Stories
				title="Pre-BER Assessment Explained"
				subTitle="Watch our short video to learn more about what a BER is, how a BER is calculated, and who needs a BER."
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

export default PreBerComponent;
