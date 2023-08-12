import AppConst from "@config/app.const";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface RecentProjectsProps { }

const RecentProjects: React.FC<RecentProjectsProps> = () => {
	return (
		<div className="app-projects py-[50px]">
			<div className="container mx-auto px-[16px]">
				<div className="title text-center mb-[50px]">
					<h1>
						<b>Some Recent Projects</b>
					</h1>
				</div>
				<div className="app-projects-list grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-[30px] gap-[24px]">
					{ServiceData.map(item => (
						<div key={item.id} className="app-projects-item">
							<Link href={item.url} className="app-projects-item-image">
								<Image
									src={item.imgUrl}
									alt="Project thumbnail"
									width={370}
									height={307}
									loading="lazy"
									sizes="(max-width: 370px) 307px"
								/>
							</Link>
							<div className="app-projects-item-content">
								<h2>{item.name}</h2>
								<Link
									href={item.url}
									className="btn btn-primary secondary-hover mt-[23px] w-full"
								>
									{item.buttonText}
								</Link>
							</div>
						</div>
					))}
				</div>

				<div className="block text-center pt-[50px]">
					<button className="btn btn-primary outline secondary-hover">
						See More
					</button>
				</div>
			</div>
		</div>
	);
};

export default RecentProjects;

interface ServiceType {
	id: number;
	name: string;
	imgUrl: string;
	buttonText: string;
	url: string;
}

const ServiceData: Array<ServiceType> = [
	{
		id: 1,
		name: "The Beech, Oldbridge Park, Osberstown, Naas, Co Kildare",
		imgUrl: AppConst.assetsBaseUrl + "project-1.webp",
		buttonText: "See Details",
		url: "",
	},
	{
		id: 2,
		name: "The Beech, Oldbridge Park, Osberstown, Naas, Co Kildare",
		imgUrl: AppConst.assetsBaseUrl + "project-2.webp",
		buttonText: "See Details",
		url: "",
	},
	{
		id: 3,
		name: "The Beech, Oldbridge Park, Osberstown, Naas, Co Kildare",
		imgUrl: AppConst.assetsBaseUrl + "project-3.webp",
		buttonText: "See Details",
		url: "",
	},
];
