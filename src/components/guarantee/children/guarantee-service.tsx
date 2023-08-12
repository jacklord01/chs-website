import AppConst from "@config/app.const";
import Image from "next/image";
import React from "react";

interface GuaranteeServiceProps {}

const GuaranteeService: React.FC<GuaranteeServiceProps> = () => {
	return (
		<div className="guarantee-service pt-[90px] lg:pb-[90px] pb-[50px] overflow-hidden bg-[#f3f3f3]">
			<div className="container mx-auto px-[16px]">
				<div className="title text-center">
					<h1 className="leading-[48px] md:text-[2.4em]">
						At Churchfield Home Services
					</h1>
					<p className="md:text-[21px] max-w-[778px] m-auto">
						Quality means everything to us, providing you with peace of mind and
						allowing you to enjoy the benefits of your upgrade for many years to
						come.
					</p>
				</div>
				<div className="guarantee-inner">
					{guaranteeService.map(item => (
						<div
							key={item.id}
							className="gs-item lg:flex lg:items-center lg:mt-[50px] mt-[45px]"
						>
							<div className="gs-image lg:w-[770px]">
								<Image
									src={item.imagePath}
									className="w-full h-auto"
									alt="House Type"
									loading="lazy"
									width={770}
									height={440}
								/>
							</div>
							<div className="gs-content bg-white p-[16px] md:py-[65px] md:px-[50px] lg:ml-[-230px] lg:w-[630px] mt-[-40px] lg:mt-0 mx-[16px] lg:mx-0 z-10 relative">
								<h2 className="text-[18px] md:text-[21px] text-[#204971] mb-3">
									{item.title}
								</h2>
								<p>{item.discription}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default GuaranteeService;

interface GuaranteeServiceType {
	id: number;
	title: string;
	discription: string;
	imagePath: string;
}

const guaranteeService: Array<GuaranteeServiceType> = [
	{
		id: 1,
		title: "Certified Products",
		discription:
			"We only choose the highest quality certified and accredited building products in our Energy Efficiency Upgrades to ensure your peace of mind.",
		imagePath: AppConst.assetsBaseUrl + "guarantee/gurantee-1.webp",
	},
	{
		id: 2,
		title: "Trained Installers",
		discription:
			"Our Installers are trained to the highest standards to ensure that every product we use is fitted in line with manufacturers' guidelines, product certification, best practices, and up-to-date building standards.",
		imagePath: AppConst.assetsBaseUrl + "guarantee/gurantee-2.webp",
	},
	{
		id: 3,
		title: "Detailed Inspections ",
		discription:
			"We complete regular detailed quality inspections throughout through the installation process to ensure things are done right.",
		imagePath: AppConst.assetsBaseUrl + "guarantee/gurantee-3.webp",
	},
	{
		id: 4,
		title: "100% Quality Auditing",
		discription:
			"We also understand the value of independent oversight and therefore ensure we complete independent quality audits on 100% of our installations.",
		imagePath: AppConst.assetsBaseUrl + "guarantee/gurantee-4.webp",
	},
	{
		id: 5,
		title: "Industry Leading Guarantees",
		discription:
			"And just to ensure your total peace of mind, we provide all our customers with industry leading guarantees on all of the products and services we provide.",
		imagePath: AppConst.assetsBaseUrl + "guarantee/gurantee-5.webp",
	},
];
