import { InitDataOutputDto } from "@services/fuel-cost/dto/inti-data.output.dto";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import EnergyAssessment from "./children/energy-assessment";
import FuelCalculator from "./children/fuel-calculator";
import Service from "./children/service";
import StorieSeen from "./children/strories-seen";

import "slick-carousel/slick/slick.css";

const FollowUs = dynamic(() => import("../common/follow-us"));
const ConsultationRequest = dynamic(
	() => import("../common/consultation-request")
);
const Accreditations = dynamic(() => import("../common/accreditations"));
const RecentProjects = dynamic(() => import("../common/recent-project"));
const Testimonial = dynamic(() => import("../common/testimonial"));

import AppConst from "@config/app.const";
import AppBanner from "../common/banner";
import Stories from "../common/strories";
import { WebConstraintOutputDto } from "@services/utility/web-constraints.output.dto";
import utilService from "@services/utility/util.service";
import ConsultationModal from "../common/consultation-modal";

const embedID = "kIjb--N7PbQ";

interface HomeProps {
	initData: InitDataOutputDto;
	// homeConstraint: WebConstraintOutputDto
}

const Home: React.FC<HomeProps> = ({ initData }: HomeProps) => {
	const [defaultFuelState, setDefaultFuelState] = useState<{
		houseTypeId: number;
		floorArea: number;
		primaryHeatingSourceId: number;
		centralHeatingTypeId: number;
		heatSourceId: number;
		yearBuilt: number;
		currentBER: number;
	}>({
		houseTypeId:
			initData.houseTypeChsList.find(x => x.isDefault)?.id ||
			initData.houseTypeChsList[0]?.id ||
			0,
		floorArea:
			initData.houseTypeChsList.find(x => x.isDefault)?.floorArea ||
			initData.houseTypeChsList[0]?.floorArea ||
			0,
		primaryHeatingSourceId:
			initData.primaryHeatSourcList.find(x => x.isDefault)?.id || 0,
		centralHeatingTypeId:
			initData.primaryHeatSourcList.find(x => x.isDefault)
				?.centralHeatingTypeId || 0,
		heatSourceId:
			initData.primaryHeatSourcList
				.find(x => x.isDefault)
				?.heatSources?.find(x => x.isDefault)?.id || 0,
		yearBuilt: 2005,
		currentBER: initData.berChsList.find(x => x.isDefault)?.id || 0,
	});
	const [homeConstraint, setHomeConstraint] =
		useState<WebConstraintOutputDto | null>(null);
	useEffect(() => {
		const fetchConst = async () => {
			const data = await utilService.getWebConstraints();
			setHomeConstraint(data);
		};
		fetchConst();
	}, []);
	return (
		<div className="app-home">
			<ConsultationModal />
			<AppBanner
				bannerImage={
					AppConst.assetsBaseUrl + "Warm_Comfortable_Healthy_Home.webp"
				}
				pageHeading="Home"
				title="Dreaming of a Warm, Comfortable, Healthy Home?"
				subTitle="We Survey, Install and Guarantee."
				buttonText="Home Energy Assessment"
				// buttonText={
				//   homeConstraint?.heaLinkLabelOnBanner || "Home Energy Assessment"
				// }
				buttonLink="./home-energy-assessment"
				smTitleLineSpace={homeConstraint?.bannerHeaderLineSpace || "18"}
			/>
			<Service />
			<Stories
				title="Homeowner Stories"
				subTitle="We upgraded Kevin’s home in Rush last year and visited him to see how he was enjoying the benefits of his upgrades."
				storiesLogo={AppConst.assetsBaseUrl + "stories-brand-new.webp"}
				embedID={embedID}
			/>
			<FuelCalculator
				initialProps={initData}
				defaultValues={defaultFuelState}
			/>
			<StorieSeen />
			<EnergyAssessment
				buttonLabel="See How"
				// buttonLabel={homeConstraint?.heaLinkLabelUnderFuelCost || "Read More"}
			/>
			<Testimonial />
			{/* <RecentProjects /> */}
			<Accreditations />
			<ConsultationRequest />
			<FollowUs />
		</div>
	);
};

export default Home;
