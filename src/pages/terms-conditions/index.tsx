import ChsHead from "@/components/layouts/ChsHead";
import TermsConditionComponent from "@/components/terms-condiction-component";
import utilService from "@services/utility/util.service";
import { BasePageProps } from "@utils/base-page-props.interface";
import React from "react";

interface TermsConditionProps extends BasePageProps {
}
const TermsCondition = ({
    seoData,
}: TermsConditionProps) => {
    return (
        <>
            {seoData && <ChsHead seoData={seoData} />}
            <TermsConditionComponent />
        </>
    );
};

export const getStaticProps = async () => {
    let seoData = await utilService.getSEOContentByPageUrl('privacy-policy');
    return {
        props: {
            seoData: seoData,
        },
        revalidate: 60 * 60 * 24,
    };
};

export default TermsCondition;
