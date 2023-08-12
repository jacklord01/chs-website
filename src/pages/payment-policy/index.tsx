import ChsHead from "@/components/layouts/ChsHead";
import PaymentPolicyComponent from "@/components/payment-policy-component";
import utilService from "@services/utility/util.service";
import { BasePageProps } from "@utils/base-page-props.interface";
import React from "react";

interface PaymentPolicyProps extends BasePageProps {
}
const PaymentPolicy = ({
    seoData,
}: PaymentPolicyProps) => {
    return (
        <>
            {seoData && <ChsHead seoData={seoData} />}
            <PaymentPolicyComponent />
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

export default PaymentPolicy;
