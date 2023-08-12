import React from "react";
import dynamic from "next/dynamic";

const Accreditations = dynamic(() => import("../common/accreditations"));
const FollowUs = dynamic(() => import("../common/follow-us"));
const ConsultationRequest = dynamic(
	() => import("../common/consultation-request")
);
const Testimonial = dynamic(() => import("../common/testimonial"));
const EnergyBook = dynamic(() => import("../common/energy-book"));

import AppBanner from "../common/banner";
import "slick-carousel/slick/slick.css";
import Stories from "../common/strories";
import EnergyChoice from "../common/energy-choice";
import PageQuote from "../common/page-quote";
import AppConst from "@config/app.const";
import ConsultationModal from "../common/consultation-modal";

const embedID = "PosLqw0Lj_Y";

interface BuildingSurveyComponentProps {}

const BuildingSurveyComponent: React.FC<BuildingSurveyComponentProps> = () => {
	return (
		<div className="app-building-survey">
			<ConsultationModal />
			<div className="bs-banner">
				<AppBanner
					bannerImage={
						AppConst.assetsBaseUrl + "building-survey/banner-bg.webp"
					}
					pageHeading="Your Building Survey"
					title="Your Building Survey"
					subTitle="Nothing's more accurate than laser."
					buttonText="Book Now"
					buttonLink="./survey-quotation-calculate"
				/>
			</div>
			<PageQuote
				title="We'll carry out a detailed building survey of your home"
				subTitle="using the latest laser technology."
				imagePath={AppConst.assetsBaseUrl + "building-survey/service-new.webp"}
				imageQuote="We use Faro to capture all geometric data with pinpoint accuracy to ensure the accuracy of our recommendations."
				quoteText="This allows all of the geometric information needed to generate the initial technical assessment of your home's energy efficiency. It also captures the necessary information needed to generate all other design reports and detailed quotations for each upgrade; efficiently, accurately, and with millimeter precision."
				details="A detailed building survey questionnaire is also completed as part of our building survey. This survey gathers extensive data relating to your home's energy performance such as building fabric, ventilation details, space heating, hot water heating, lighting, and existing renewables. When this survey is put together with the laser scan survey, it provides all the information needed for the entire assessment, design, and quotation process during a single survey visit, reducing time and increasing efficiency in the process."
			/>

			<EnergyChoice title="Other Advantages Include" options={benefitsOfHEA} />
			<Stories
				title="Your Building Survey Explained"
				subTitle="Watch our short video to learn the advantages of using laser scanning technology to capture the geometric data of your home."
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

export default BuildingSurveyComponent;

const benefitsOfHEA = [
	{
		imagePath:
			AppConst.assetsBaseUrl + "building-survey/service-icon-1-new.webp",
		heading: "Greater Accuracy",
		detail: "Gather over 1 million points per minute with 1mm accuracy",
	},
	{
		imagePath:
			AppConst.assetsBaseUrl + "building-survey/service-icon-2-new.webp",
		heading: "3D Model Creation	",
		detail: "Visualise your projects in high-resolution 3D",
	},
	{
		imagePath:
			AppConst.assetsBaseUrl + "building-survey/service-icon-3-new.webp",
		heading: "Greater Speed",
		detail: "Approx. 3 hours for an average dwelling, regardless of complexity",
	},
	{
		imagePath:
			AppConst.assetsBaseUrl + "building-survey/service-icon-4-new.webp",
		heading: "BIM Compatibility",
		detail:
			"Cloud Data is easily imported into Design Packages such as AutoCAD Revit",
	},
];
