import React from "react";
import AppBanner from "../common/banner";
import PageQuote from "../common/page-quote";
import TechnicalInfo from "./children/technical-info";
import ElementTable from "./children/element-table";
import Stories from "../common/strories";
import EnergyBook from "../common/energy-book";
import ElementService from "./children/element-service";
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

interface HomeTechnicalProps {}

const HomeTechnical: React.FC<HomeTechnicalProps> = () => {
	return (
		<div className="app-home">
			<ConsultationModal />
			<AppBanner
				bannerImage={
					AppConst.assetsBaseUrl + "home-technical/technical-banner.webp"
				}
				pageHeading="Technical Assessments"
				title="Making your home Heat Pump Ready"
				subTitle="A measure of your home's Energy Efficiency."
				buttonText="Learn More"
				buttonLink="./survey-quotation-calculate"
			/>
			<div className="technical-page-quote">
				<PageQuote
					title="We'll complete a detailed Technical Assessment to make your"
					subTitle="home Heat Pump Ready with SEAI design recommendations."
					imagePath={
						AppConst.assetsBaseUrl + "home-technical/technical-mockup-new.webp"
					}
					quoteText="Upgrading the building fabric will reduce the heat losses through these elements and is best to be completed by taking a whole-house approach. This ensures that improvements are carried out in an organised, sensible order, with installations and refits complementing each other rather than working against each other."
				/>
			</div>
			<TechnicalInfo />
			<ElementTable />
			<ElementService />
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

export default HomeTechnical;
