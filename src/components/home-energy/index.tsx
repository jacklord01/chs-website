import React, { useRef } from "react";
import AppBanner from "../common/banner";
import Server from "./children/server";
import EnergyService from "./children/energy-service";
import Stories from "../common/strories";
import Quotation from "./children/quotation";
import EnergyBook from "../common/energy-book";
import StorieSeen from "../home/children/strories-seen";
import RequestCall from "./children/request-call";
import EnergyChoice from "../common/energy-choice";
import AppConst from "@config/app.const";
import dynamic from "next/dynamic";
import ConsultationModal from "../common/consultation-modal";

const FollowUs = dynamic(() => import("../common/follow-us"));
const ConsultationRequest = dynamic(
	() => import("../common/consultation-request")
);
const Accreditations = dynamic(() => import("../common/accreditations"));
const Testimonial = dynamic(() => import("../common/testimonial"));

const embedID = "PosLqw0Lj_Y";

interface HomeEnergyProps {}

const HomeEnergy: React.FC<HomeEnergyProps> = () => {
	const childRef = useRef<{ handleClick: () => void } | null>(null);

	return (
		<div className="app-home">
			<ConsultationModal ref={childRef} />
			<AppBanner
				bannerImage={
					AppConst.assetsBaseUrl + "home-energy/banner-background.webp"
				}
				pageHeading="Home Energy Assessment"
				title="Considering Making Your Home More Energy Efficient?"
				subTitle="Our Home Energy Assessment is a sensible first step."
				buttonText="Get Quotation"
				buttonLink="./survey-quotation-calculate"
			/>
			<div className="home-energy-ec">
				<EnergyChoice
					title="Our Home Energy Assessment will provide you with all the"
					subTitle="information you need to make the right choices."
					options={benefitsOfHEA}
				/>
			</div>
			<Server />
			<EnergyService />

			<Stories
				title="Your Home Energy Assessment Explained"
				subTitle="Watch our short video to learn more about the process
			we undertake to survey your home, complete your assessment,
			and provide you with the best advice to achieve your energy
			efficiency goals."
				buttonText="Book Now"
				btnUrl="./survey-quotation-calculate"
				embedID={embedID}
			/>
			<Quotation />
			<EnergyBook />

			<StorieSeen />
			<RequestCall
				openCRform={() => {
					if (childRef.current) {
						childRef.current.handleClick();
					}
				}}
			/>
			<Testimonial />
			{/* <RecentProjects /> */}
			<Accreditations />
			<ConsultationRequest />
			<FollowUs />
		</div>
	);
};

export default HomeEnergy;

const benefitsOfHEA = [
	{
		imagePath: AppConst.assetsBaseUrl + "home-energy/service-icon-1-v2.webp",
		heading: "Reduce Energy Bills",
		detail:
			"The best way to reduce energy costs is to enhance the insulation levels in your home, and therefore reduce the heat losses.",
	},
	{
		imagePath: AppConst.assetsBaseUrl + "home-energy/service-icon-2-v2.webp",
		heading: "Reduced Carbon Emissions",
		detail:
			"Enhanced insulation, upgrading your heating system, and adding renewables are some of the ways that can help reduce your impact on the environment and reduce your carbon emissions.",
	},
	{
		imagePath: AppConst.assetsBaseUrl + "home-energy/service-icon-3-v2.webp",
		heading: "Increased Home Value",
		detail:
			"Well-insulated homes are comfortable, cheaper to run, and bring health benefits. An energy-efficient home provides short- and long-term benefits through reduced energy costs and by increasing your property’s resale value.",
	},
	{
		imagePath: AppConst.assetsBaseUrl + "home-energy/service-icon-4-v2.webp",
		heading: "Enhanced Comfort",
		detail:
			"Enhanced insulation levels and good ventilation will create a warm, cosy, and healthy living environment for you and your family.",
	},
];
