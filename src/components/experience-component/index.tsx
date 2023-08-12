import React from "react";
import AppBanner from "../common/banner";
import UpgradProgram from "./children/upgrad-program";
import ProjectFilter from "./children/project-filter";
import ProjectList from "./children/project-list";
import AppConst from "@config/app.const";

interface ExperienceComponentProps {}

const ExperienceComponent: React.FC<ExperienceComponentProps> = () => {
	return (
		<div className="app-home">
			<AppBanner
				bannerImage={AppConst.assetsBaseUrl + "install/install-banner.webp"}
				pageHeading="Install"
				title="With Over 5,523 Projects Completed to Date"
				subTitle="we know what it takes to deliver"
				buttonText="Learn More"
			/>
			<UpgradProgram />
			<ProjectFilter />
			<ProjectList options={projectList} />
		</div>
	);
};

export default ExperienceComponent;

const projectList = [
	{
		id: 1,
		imagePath: AppConst.assetsBaseUrl + "project-list/slide-1.png",
		heading: "19 Lorcan Rd, Whitehall, Dublin 9, D09 V3V6",
		details:
			"Energy Saving - xxxKwh/m2/yr CO2 Emmission Saving - xxxKgCO2/m2/yr",
	},
	{
		id: 2,
		imagePath: AppConst.assetsBaseUrl + "project-list/slide-1.png",
		heading: "19 Lorcan Rd, Whitehall, Dublin 9, D09 V3V6",
		details:
			"Energy Saving - xxxKwh/m2/yr CO2 Emmission Saving - xxxKgCO2/m2/yr",
	},
	{
		id: 3,
		imagePath: AppConst.assetsBaseUrl + "project-list/slide-1.png",
		heading: "19 Lorcan Rd, Whitehall, Dublin 9, D09 V3V6",
		details:
			"Energy Saving - xxxKwh/m2/yr CO2 Emmission Saving - xxxKgCO2/m2/yr",
	},
	{
		id: 4,
		imagePath: AppConst.assetsBaseUrl + "project-list/slide-1.png",
		heading: "19 Lorcan Rd, Whitehall, Dublin 9, D09 V3V6",
		details:
			"Energy Saving - xxxKwh/m2/yr CO2 Emmission Saving - xxxKgCO2/m2/yr",
	},
	{
		id: 5,
		imagePath: AppConst.assetsBaseUrl + "project-list/slide-1.png",
		heading: "19 Lorcan Rd, Whitehall, Dublin 9, D09 V3V6",
		details:
			"Energy Saving - xxxKwh/m2/yr CO2 Emmission Saving - xxxKgCO2/m2/yr",
	},
];
