import React from "react";
import AppBanner from "../common/banner";
import ThoughtOfEverything from "../common/thought-of-everything/thought-of-everything";
import AppConst from "@config/app.const";
import InstallQuote from "./children/install-quote";
import dynamic from "next/dynamic";
import MadeSimple from "./children/Made-Simple";
import ImageView from "./children/Image-view";
import ConsultationModal from "../common/consultation-modal";

const FollowUs = dynamic(() => import("../common/follow-us"));
const ConsultationRequest = dynamic(
	() => import("../common/consultation-request")
);
const Accreditations = dynamic(() => import("../common/accreditations"));

interface InstallComponentProps {}

const InstallComponent: React.FC<InstallComponentProps> = () => {
	return (
		<div className="app-home">
			<ConsultationModal />
			<AppBanner
				bannerImage={AppConst.assetsBaseUrl + "install/install-banner-new.webp"}
				pageHeading="Install"
				title="With Over 5,523 Projects Completed to Date"
				subTitle="We know what it takes to deliver."
				buttonText="Learn More"
			/>
			<ThoughtOfEverything
				title="We Believe in Professional Delivery"
				subTitle="We carry out detailed Technical Surveys, Advise the Best Solutions, Install and Guarantee."
				options={thoughtEverything}
			/>
			<ImageView />
			<MadeSimple title="We’ve made it simple" options={madeSimple} />
			<InstallQuote />
			<Accreditations />
			<ConsultationRequest />
			<FollowUs />
		</div>
	);
};

export default InstallComponent;

const thoughtEverything = [
	{
		id: 1,
		arrow: false,
		imagePath: AppConst.assetsBaseUrl + "one-stop-shop/icons-1.webp",
		heading: "Professional Customer Care",
		details:
			"We have an experienced, on call customer care team who are there to help and advise you on every step of you retrofit journey. They will clearly explain each step of the process of delivering your individual project, in particular during the time between when an order is confirmed at which time when a dedicated Project Manager is assigned to your project who will then guide you through each stage of the installation.",
	},
	{
		id: 2,
		arrow: false,
		imagePath: AppConst.assetsBaseUrl + "one-stop-shop/icons-2.webp",
		heading: "Grant & Incentive Support",
		details:
			"Our Customer Care Team will also ensure that all of your grants and incentives have been applied for and secured in advance of your project commencing in line with SEAI requirements and discounting these from the total cost of the works so that you only have to pay the net amount after all grants and incentives have been factored in.",
	},
	{
		id: 3,
		arrow: false,
		imagePath: AppConst.assetsBaseUrl + "one-stop-shop/icons-3.webp",
		heading: "Experienced Project Planning",
		details:
			"The key to any successful project is planning and we are very proud to say that we have a hugely experienced project planning team. They will look at all aspects of your project, identify the critical path for delivery and work with our customer care team to assist you in coordinating all third party dependant services that need to be completed either in advance or as part of the overall project scope to mitigate against any delays during the installation process.",
	},
	{
		id: 4,
		arrow: false,
		imagePath: AppConst.assetsBaseUrl + "one-stop-shop/icons-4.webp",
		heading: "Centralised Scheduling",
		details:
			"Scheduling is a complex operation. There are so many stakeholders that need to be coordinated for every single project in order for everything to run smoothly which is only made possible through our highly experienced, centralised scheduling team who review every element of your project and ensures that works are scheduled as efficiently as possible, taking into account resource availability, lead times for suppliers, third party dependencies and customers availability.",
	},
	{
		id: 5,
		arrow: false,
		imagePath: AppConst.assetsBaseUrl + "one-stop-shop/icons-5.webp",
		heading: "Dedicated Project Management",
		details:
			"Each project is assigned to one of our highly experienced Project Managers whose job it is to provide you with a single point of contact throughout the entire installation and will ensure that all works are coordinated in the right manner and completed to the right standard while keeping you informed every step of the way.",
	},
	{
		id: 6,
		arrow: false,
		imagePath: AppConst.assetsBaseUrl + "one-stop-shop/icons-6.webp",
		heading: "High Quality Installations",
		details:
			"We pride ourselves on the quality of work we deliver and are always striving to learn new ways to continuously improve. We only work with the best quality materials and highly experienced and passionate tradespeople who take the same pride in their work as we do ourselves to ensure we deliver the best quality installations our customers have learned to expect.",
	},
	{
		id: 7,
		arrow: false,
		imagePath: AppConst.assetsBaseUrl + "one-stop-shop/icons-7.webp",
		heading: "Robust Quality Management",
		details:
			"We understand the value and importance of ensuring that we have robust quality management systems and procedures in place to enable us to deliver on our commitments to our customers. We use best-in-class quality management tools and technology that enables us to provide end-to-end traceability for the full list of services we provide.",
	},
	{
		id: 8,
		arrow: false,
		imagePath: AppConst.assetsBaseUrl + "one-stop-shop/icons-8.webp",
		heading: "Customer Satisfaction Guarantee",
		details:
			"Nothing is more important than ensuring our customers are fully satisfied with the service we provide. Retrofitting is complex and there are a lot of ways things can go wrong, but we pride ourselves on providing 5* Customer Service on every project we deliver and hope that you will become our next customer to rate us 5* at the end of your project.",
	},
];

const madeSimple = [
	{
		id: 1,
		imagePath: AppConst.assetsBaseUrl + "install/1.webp",
		heading: "Book Your Survey",
		details:
			"Just answer a few questions about your home and receive an instant quote, make your payment and include any discount codes you have to get the best deal!",
		setWidth: 112,
		setHeight: 260,
	},
	{
		id: 2,
		imagePath: AppConst.assetsBaseUrl + "install/2.webp",
		heading: "We’ll Make a Date",
		details: "We’ll schedule your Point Cloud Survey on a day that suits you.",
		setWidth: 112,
		setHeight: 226,
	},
	{
		id: 3,
		imagePath: AppConst.assetsBaseUrl + "install/3.webp",
		heading: "Provisional BER",
		details:
			"We’ll calculate your current BER to accurately establish where you are starting from.",
		setWidth: 112,
		setHeight: 250,
	},
	{
		id: 4,
		imagePath: AppConst.assetsBaseUrl + "install/4.webp",
		heading: "Technical Evaluation",
		details:
			"We’ll complete a Technical Evaluation of the BER Data to establish what upgrades you need to make to achieve your target efficiency rating.",
		setWidth: 112,
		setHeight: 247,
	},
	{
		id: 5,
		imagePath: AppConst.assetsBaseUrl + "install/5.webp",
		heading: "Home Energy Assessment Report",
		details:
			"Our report will not only clearly outline your baseline BER and the improvements you need to make in order to achieve your goal, but also the order to make them, should you decide to complete them over time.",
		setWidth: 112,
		setHeight: 247,
	},
];
