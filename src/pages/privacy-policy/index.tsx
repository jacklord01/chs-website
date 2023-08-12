import ChsHead from "@/components/layouts/ChsHead";
import PrivacyPolicyComponent from "@/components/privacy-policy-component";
import utilService from "@services/utility/util.service";
import { BasePageProps } from "@utils/base-page-props.interface";
import React from "react";

interface PrivacyPolicyProps extends BasePageProps {
}
const PrivacyPolicy = ({
    seoData,
}: PrivacyPolicyProps) => {
    return (
        <>
            {seoData && <ChsHead seoData={seoData} />}
            <PrivacyPolicyComponent />
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

export default PrivacyPolicy;
