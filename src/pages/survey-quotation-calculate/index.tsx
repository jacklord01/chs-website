import HeaComponent from "@/components/hea";
import ChsHead from "@/components/layouts/ChsHead";
import utilService from "@services/utility/util.service";
import { BasePageProps } from "@utils/base-page-props.interface";
import { StoreUtil } from "@utils/store-util";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface SurveyQuotationCalculateProps extends BasePageProps {
}
const SurveyQuotationCalculate = ({
	seoData,
}: SurveyQuotationCalculateProps) => {
	//Detecting Page is being loading, We will clear our store if it happens
	useEffect(() => {
		if (performance.navigation.type === 1) {
			StoreUtil.clearStore();
		}
	}, []);

	return (
		<>
			<ToastContainer
				position="top-center"
				autoClose={3000}
				closeOnClick={true}
				theme="light"
				hideProgressBar={true}
			/>
			{seoData && <ChsHead seoData={seoData} />}
			<HeaComponent />
		</>
	);
};

export const getStaticProps = async () => {
	let seoData = await utilService.getSEOContentByPageUrl('survey-quotation-calculate');
	return {
		props: {
			seoData: seoData,
		},
		revalidate: 60 * 60 * 24,
	};
};

export default SurveyQuotationCalculate;
