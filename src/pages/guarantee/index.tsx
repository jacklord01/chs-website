import GuaranteeComponent from "@/components/guarantee";
import ChsHead from "@/components/layouts/ChsHead";
import { SEOData } from "@/types/seo-data.interface";
import utilService from "@services/utility/util.service";
import { BasePageProps } from "@utils/base-page-props.interface";
import { StoreUtil } from "@utils/store-util";
import React, { useEffect } from "react";

interface GuaranteePageProps extends BasePageProps {
}

const GuaranteePage = ({ seoData }: GuaranteePageProps) => {
	//Detecting Page is being loading, We will clear our store if it happens
	useEffect(() => {
		if (performance.navigation.type === 1) {
			StoreUtil.clearStore();
		}
	}, []);

	return (
		<>
			{seoData && <ChsHead seoData={seoData} />}
			<GuaranteeComponent />
		</>
	);
};

export const getStaticProps = async () => {
	let seoData = await utilService.getSEOContentByPageUrl('guarantee');
	return {
		props: {
			seoData: seoData,
		},
		revalidate: 60 * 60 * 24,
	};
};

export default GuaranteePage;
