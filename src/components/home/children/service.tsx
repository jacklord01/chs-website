import AppConst from "@config/app.const";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ServiceProps {}

const Service: React.FC<ServiceProps> = () => {
	return (
		<div className="app-service py-[50px] md:pt-[90px]">
			<div className="container mx-auto px-[16px]">
				<div className="title text-center mb-[50px]">
					<h1>
						<b>Our goal is to make things simple!</b>
					</h1>
					<p>
						We provide an end-to-end <strong>‘One Stop Shop Service’</strong>{" "}
						that takes the hassle out of retrofitting your home. We project
						manage the entire process from the initial survey to making
						recommendations, applying for SEAI grants, and providing you with
						the highest standards of quality, professionalism, and customer
						services through every service we provide.
					</p>
				</div>
				<div className="app-service-list">
					{ServiceData.map(item => (
						<div
							key={item.id}
							className="app-service-item md:flex flex-wrap mb-[48px]"
						>
							<div className="app-service-image md:flex md:w-1/2 lg:w-[58.5%]">
								<Link href={item.url} className="md:flex">
									<Image
										src={item.imgUrl}
										alt="Service Image"
										width={714}
										height={381}
										loading="lazy"
										sizes="(max-width: 767px) 100%"
										quality={100}
									/>
								</Link>
							</div>
							<div className="app-service-content  md:w-1/2  lg:w-[41.5%] flex items-center">
								<div>
									<h2>{item.name}</h2>
									<p>{item.content}</p>
									<Link
										href={item.url}
										className="btn btn-white white-hover outline"
									>
										{item.buttonText}
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Service;

interface ServiceType {
	id: number;
	name: string;
	content: string;
	imgUrl: string;
	buttonText: string;
	url: string;
}

const ServiceData: Array<ServiceType> = [
	{
		id: 1,
		name: "We Survey",
		content:
			"Get it right from the start. A detailed building survey is essential to ensuring that we can provide the best design & recommendations to deliver the comfort & savings you desire.",
		imgUrl: AppConst.assetsBaseUrl + "we-survey_building.webp",
		buttonText: "Find Out How",
		url: "./home-energy-assessment",
	},
	{
		id: 2,
		name: "We Install",
		content:
			"Professional installations are what we are all about. We pride ourselves in providing our customers with the best-in-class customer service, quality, & value in all the services we provide.",
		imgUrl: AppConst.assetsBaseUrl + "we-install.webp",
		buttonText: "Find Out How",
		url: "./install",
	},
	{
		id: 3,
		name: "We Guarantee",
		content:
			"Over the years, we have continually developed and enhanced our end-to-end quality management systems. We ensure that everything is done the way it should be. In the case that an issue pops up, we will be there to put it right, giving you the peace of mind that you are in safe hands.",
		imgUrl: AppConst.assetsBaseUrl + "we-guarantee.webp",
		buttonText: "Find Out How",
		url: "./guarantee",
	},
];
