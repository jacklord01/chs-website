import React from "react";
import AppBanner from "../common/banner";
import "slick-carousel/slick/slick.css";
import EnergyBook from "../common/energy-book";
import AppConst from "@config/app.const";
import Stories from "../common/strories";
import PageQuote from "../common/page-quote";
import GrantOptions from "./children/grant-options";
import ThoughtOfEverything from "../common/thought-of-everything/thought-of-everything";
import dynamic from "next/dynamic";
import ConsultationModal from "../common/consultation-modal";
const embedID = "vSZ8UxFhalw";

const FollowUs = dynamic(() => import("../common/follow-us"));
const ConsultationRequest = dynamic(
	() => import("../common/consultation-request")
);
const Accreditations = dynamic(() => import("../common/accreditations"));
const Testimonial = dynamic(() => import("../common/testimonial"));

interface OneStopShopComponentProps {}

const OneStopShopComponent: React.FC<OneStopShopComponentProps> = () => {
	return (
		<div className="app-building-survey">
			<ConsultationModal />
			<AppBanner
				bannerImage={
					AppConst.assetsBaseUrl + "one-stop-shop/banner-bg-v2.webp"
				}
				pageHeading="One Stop Shop Service"
				title="One-Stop Shop Service"
				subTitle="Everything managed for you."
				buttonText="Book Now"
				buttonLink="./survey-quotation-calculate"
			/>

			<PageQuote
				title="Choose to complete your works as part of a single project or "
				subTitle="alternatively to complete the works in stages over time."
				imagePath={
					AppConst.assetsBaseUrl +
					"one-stop-shop/churchfield-home-services-one-stop-shop-v2.webp"
				}
				quoteText="Our One Stop Shop Service provides our customers with the peace of mind that we will manage all elements of their project, right from the initial site survey all the way through to the final handover and everything in between."
				details="Customers also have the option of choosing from a range of SEAI Home Energy Grants that are available to them based on their particular situation in order for them to choose the best option that suits their particular needs."
			/>
			<GrantOptions />
			<Stories
				title="Your Home Energy Assessment Explained"
				subTitle="Watch our short video to learn more about the process
				we undertake to survey your home, complete your assessment,
				and provide you with the best advice to achieve your energy
				efficiency goals."
				embedID={embedID}
			/>
			<ThoughtOfEverything
				title="We've Thought of Everything"
				options={thoughtEverything}
			/>
			<EnergyBook />
			<Testimonial />
			<Accreditations />
			<ConsultationRequest />
			<FollowUs />
		</div>
	);
};

export default OneStopShopComponent;

const thoughtEverything = [
	{
		id: 1,
		arrow: true,
		imagePath: AppConst.assetsBaseUrl + "one-stop-shop/icons-1.webp",
		heading: "Professional Customer Care",
		details:
			"We have an experienced, on-call Customer Care Team who are there to help and advise you on every step of your retrofit journey. They will clearly explain each step of the process of delivering your individual project, in particular during the time between when an order is confirmed and the time when a dedicated Project Manager is assigned to your project who will then guide you through each stage of the installation.",
	},
	{
		id: 2,
		arrow: true,
		imagePath: AppConst.assetsBaseUrl + "one-stop-shop/oss-icons-2.webp",
		heading: "Grant & Incentive Support",
		details:
			"Our Customer Care Team will also ensure that all of your grants and incentives have been applied for and secured in advance of your project commencing in line with SEAI requirements and discounting these from the total cost of the works so that you only have to pay the net amount after all grants and incentives have been factored in.",
	},
	{
		id: 3,
		arrow: true,
		imagePath: AppConst.assetsBaseUrl + "one-stop-shop/icons-3.webp",
		heading: "Experienced Project Planning",
		details:
			"The key to any successful project is planning and we are very proud to say that we have a hugely experienced project planning team. They will look at all aspects of your project, identify the critical path for delivery and work with our customer care team to assist you in coordinating all third party dependant services that need to be completed either in advance or as part of the overall project scope to mitigate against any delays during the installation process.",
	},
	{
		id: 4,
		arrow: true,
		imagePath: AppConst.assetsBaseUrl + "one-stop-shop/oss-icons-4.webp",
		heading: "Centralised Scheduling",
		details:
			"Scheduling is a complex operation. There are so many stakeholders that need to be coordinated for every single project in order for everything to run smoothly which is only made possible through our highly experienced, centralised scheduling team who review every element of your project and ensures that works are scheduled as efficiently as possible, taking into account resource availability, lead times for suppliers, third party dependencies and customers availability.",
	},
	{
		id: 5,
		arrow: true,
		imagePath: AppConst.assetsBaseUrl + "one-stop-shop/oss-icons-5.webp",
		heading: "Dedicated Project Management",
		details:
			"Each project is assigned to one of our highly experienced Project Managers whose job it is to provide you with a single point of contact throughout the entire installation and will ensure that all works are coordinated in the right manner and completed to the right standard while keeping you informed every step of the way.",
	},
	{
		id: 6,
		arrow: true,
		imagePath: AppConst.assetsBaseUrl + "one-stop-shop/oss-icons-6.webp",
		heading: "High Quality Installations",
		details:
			"We pride ourselves on the quality of work we deliver and are always striving to learn new ways to continuously improve. We only work with the best quality materials and highly experienced and passionate tradespeople who take the same pride in their work as we do ourselves to ensure we deliver the best quality installations our customers have learned to expect.",
	},
	{
		id: 7,
		arrow: true,
		imagePath: AppConst.assetsBaseUrl + "one-stop-shop/oss-icons-7.webp",
		heading: "Robust Quality Management",
		details:
			"We understand the value and importance of ensuring that we have robust quality management systems and procedures in place to enable us to deliver on our commitments to our customers. We use best-in-class quality management tools and technology that enables us to provide end-to-end traceability for the full list of services we provide.",
	},
	{
		id: 8,
		arrow: true,
		imagePath: AppConst.assetsBaseUrl + "one-stop-shop/oss-icons-8.webp",
		heading: "Customer Satisfaction Guarantee",
		details:
			"Nothing is more important than ensuring our customers are fully satisfied with the service we provide. Retrofitting is complex and there are a lot of ways things can go wrong, but we pride ourselves on providing 5* Customer Service on every project we deliver and hope that you will become our next customer to rate us 5* at the end of your project.",
	},
];
