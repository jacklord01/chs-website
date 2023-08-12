import ChsHead from "@/components/layouts/ChsHead";
import utilService from "@services/utility/util.service";
import { BasePageProps } from "@utils/base-page-props.interface";
import React from "react";

interface ContactProps extends BasePageProps {
}
const Contact = ({ seoData }: ContactProps) => {
	return (
		<>
			{seoData && <ChsHead seoData={seoData} />}
			<p>Contact working</p>
		</>
	);
};

export const getStaticProps = async () => {
	let seoData = await utilService.getSEOContentByPageUrl('contact');
	return {
		props: {
			seoData: seoData,
		},
		revalidate: 60 * 60 * 24,
	};
};

export default Contact;
