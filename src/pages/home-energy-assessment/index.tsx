import HomeEnergy from "@/components/home-energy";
import ChsHead from "@/components/layouts/ChsHead";
import utilService from "@services/utility/util.service";
import "slick-carousel/slick/slick.css";
import { StoreUtil } from "@utils/store-util";
import React, { useEffect } from "react";
import { BasePageProps } from "@utils/base-page-props.interface";

interface HomeEnergyProps extends BasePageProps {
}

const HomeEnergyPage = ({ seoData }: HomeEnergyProps) => {
	//Detecting Page is being loading, We will clear our store if it happens
	useEffect(() => {
		if (performance.navigation.type === 1) {
			StoreUtil.clearStore();
		}
	}, []);

	return (
		<>
			{seoData && <ChsHead seoData={seoData} />}
			<HomeEnergy />
		</>
	);
};

export const getStaticProps = async () => {
	let seoData = await utilService.getSEOContentByPageUrl('home-energy-assessment');
	return {
		props: {
			seoData: seoData
		},
		revalidate: 60 * 60 * 24,
	};
};

export default HomeEnergyPage;
