import ChsHead from "@/components/layouts/ChsHead";
import UpgradePlanComponent from "@/components/upgrade-plan";
import utilService from "@services/utility/util.service";
import { BasePageProps } from "@utils/base-page-props.interface";
import { StoreUtil } from "@utils/store-util";
import React, { useEffect } from "react";

interface UpgradePlanPageProps extends BasePageProps {
}

const UpgradePlanPage = ({ seoData }: UpgradePlanPageProps) => {
	//Detecting Page is being loading, We will clear our store if it happens
	useEffect(() => {
		if (performance.navigation.type === 1) {
			StoreUtil.clearStore();
		}
	}, []);

	return (
		<>
			{seoData && <ChsHead seoData={seoData} />}
			<UpgradePlanComponent />
		</>
	);
};

export const getStaticProps = async () => {
	let seoData = await utilService.getSEOContentByPageUrl('upgrade-plan')
	return {
		props: {
			seoData: seoData,
		},
		revalidate: 60 * 60 * 24,
	};
};

export default UpgradePlanPage;
