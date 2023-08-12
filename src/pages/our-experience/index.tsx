import ChsHead from "@/components/layouts/ChsHead";
import utilService from "@services/utility/util.service";
import "slick-carousel/slick/slick.css";
import { StoreUtil } from "@utils/store-util";
import React, { useEffect } from "react";
import ExperienceComponent from "@/components/experience-component";
import { BasePageProps } from "@utils/base-page-props.interface";
interface ExperienceProps extends BasePageProps {
}

const OurExperience = ({ seoData }: ExperienceProps) => {
	//Detecting Page is being loading, We will clear our store if it happens
	useEffect(() => {
		if (performance.navigation.type === 1) {
			StoreUtil.clearStore();
		}
	}, []);

	return (
		<>
			{seoData && <ChsHead seoData={seoData} />}
			<ExperienceComponent />
		</>
	);
};

export const getStaticProps = async () => {
	let seoData = await utilService.getSEOContentByPageUrl('our-experience');
	return {
		props: {
			seoData: seoData,
		},
		revalidate: 60 * 60 * 24,
	};
};

export default OurExperience;
