import DetailedQuotationsComponent from "@/components/detailed-quotations";
import ChsHead from "@/components/layouts/ChsHead";
import utilService from "@services/utility/util.service";
import { BasePageProps } from "@utils/base-page-props.interface";
import { StoreUtil } from "@utils/store-util";
import React, { useEffect } from "react";

interface DetailedQuotationsPageProps extends BasePageProps {
}

const DetailedQuotationsPage = ({ seoData }: DetailedQuotationsPageProps) => {
	//Detecting Page is being loading, We will clear our store if it happens
	useEffect(() => {
		if (performance.navigation.type === 1) {
			StoreUtil.clearStore();
		}
	}, []);

	return (
		<>
			{seoData && <ChsHead seoData={seoData} />}
			<DetailedQuotationsComponent />
		</>
	);
};

export const getStaticProps = async () => {
	let seoData = await utilService.getSEOContentByPageUrl('detailed-quotations');
	return {
		props: {
			seoData: seoData,
		},
		revalidate: 60 * 60 * 24,
	};
};

export default DetailedQuotationsPage;
