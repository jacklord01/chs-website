import ChsHead from "@/components/layouts/ChsHead";
import PreBerComponent from "@/components/pre-ber";
import utilService from "@services/utility/util.service";
import { BasePageProps } from "@utils/base-page-props.interface";
import { StoreUtil } from "@utils/store-util";
import React, { useEffect } from "react";

interface PreBerPageProps extends BasePageProps {
}

const PreBerPage = ({ seoData }: PreBerPageProps) => {
	//Detecting Page is being loading, We will clear our store if it happens
	useEffect(() => {
		if (performance.navigation.type === 1) {
			StoreUtil.clearStore();
		}
	}, []);

	return (
		<>
			{seoData && <ChsHead seoData={seoData} />}
			<PreBerComponent />
		</>
	);
};

export const getStaticProps = async () => {
	let seoData = await utilService.getSEOContentByPageUrl('pre-ber');
	return {
		props: {
			seoData: seoData,
		},
		revalidate: 60 * 60 * 24,
	};
};

export default PreBerPage;
