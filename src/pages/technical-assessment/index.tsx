import ChsHead from "@/components/layouts/ChsHead";
import utilService from "@services/utility/util.service";
import "slick-carousel/slick/slick.css";
import { StoreUtil } from "@utils/store-util";
import React, { useEffect } from "react";
import HomeTechnical from "@/components/technical-assessment";
import { BasePageProps } from "@utils/base-page-props.interface";
interface HomeTechnicalProps extends BasePageProps {
}

const HomeTechnicalPage = ({ seoData }: HomeTechnicalProps) => {
	//Detecting Page is being loading, We will clear our store if it happens
	useEffect(() => {
		if (performance.navigation.type === 1) {
			StoreUtil.clearStore();
		}
	}, []);

	return (
		<>
			{seoData && <ChsHead seoData={seoData} />}
			<HomeTechnical />
		</>
	);
};

export const getStaticProps = async () => {
	let seoData = await utilService.getSEOContentByPageUrl('technical-assessment')
	return {
		props: {
			seoData: seoData,
		},
		revalidate: 60 * 60 * 24,
	};
};

export default HomeTechnicalPage;
