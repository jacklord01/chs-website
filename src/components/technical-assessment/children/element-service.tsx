import AppConst from "@config/app.const";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ElementServiceProps {}

const ElementService: React.FC<ElementServiceProps> = () => {
	return (
		<div className="app-element-service bg-[#F3F3F3] pt-[50px] pb-[95px]">
			<div className="container mx-auto px-[16px]">
				<div className="app-service-list">
					{ElementServiceData.map(item => (
						<div
							key={item.id}
							className="app-service-item md:flex flex-wrap mb-[48px]"
						>
							<div className="app-service-image flex md:w-1/2 lg:w-[40%]">
								<Link href={item.url} className="flex">
									<Image
										className="max-w-full"
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
							<div className="app-service-content  md:w-1/2  lg:w-[60%] flex items-center">
								<div>
									<h2>{item.name}</h2>
									<p>{item.content}</p>
									<p>{item.secondContent}</p>

									<Link
										href={item.url}
										className="btn btn-white secondary-hover outline"
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

export default ElementService;

interface ServiceType {
	id: number;
	name: string;
	content: string;
	secondContent: string;
	imgUrl: string;
	buttonText: string;
	url: string;
}

const ElementServiceData: Array<ServiceType> = [
	{
		id: 1,
		name: "Fabric First Approach",
		content:
			"A ‘fabric first’ approach involves maximising the performance of the components and materials that make up the building fabric itself such as roof insulation, wall insulation, floor insulation and external windows and doors before considering upgrading mechanical or electrical building services systems such as your heating system.",
		secondContent:
			"This essentially reduces the amount of energy required to heat the dwelling at source...",
		imgUrl: AppConst.assetsBaseUrl + "home-technical/element-service-1.webp",
		buttonText: "Read More",
		url: "./home-energy-assessment",
	},
	{
		id: 2,
		name: "Renewable Heating",
		content:
			"The next stage of the retrofit design is to introduce renewable heating sources such as upgrading existing oil, gas and other fossil fuel heating systems to heat pumps, where possible, as a cleaner, more energy-efficient way of generating heat in a home.",
		secondContent:
			"Heat pumps are designed to deliver a consistent low level of heating that creates a very comfortable living environment. But, in order for heat pumps to operate efficiently, it is essential that all elements of the heating system are designed correctly...",
		imgUrl:
			AppConst.assetsBaseUrl + "home-technical/element-service-2-new.webp",
		buttonText: "Read More",
		url: "./home-energy-assessment",
	},
	{
		id: 3,
		name: "Solar PV",
		content:
			"Solar PV is an excellent way to further enhance the energy efficiency of your home and is usually one of the last measures that are recommended to be installed as part of your retrofit project. This is mainly due to the fact that greater savings are associated with completing the fabric and heating measures first before then adding renewable electricity to the design.",
		secondContent:
			"The size of the system recommended as part of your home energy assessment report... ",
		imgUrl:
			AppConst.assetsBaseUrl + "home-technical/element-service-3-new.webp",
		buttonText: "Read More",
		url: "./home-energy-assessment",
	},
];
