import ChsHead from "@/components/layouts/ChsHead";
import SeaiGrantComponent from "@/components/seai-grant";
import utilService from "@services/utility/util.service";
import { BasePageProps } from "@utils/base-page-props.interface";
import React from "react";

interface SeaiGrantProps extends BasePageProps {
}
const SeaiGrant = ({
    seoData,
}: SeaiGrantProps) => {
    return (
        <>
            {seoData && <ChsHead seoData={seoData} />}
            <SeaiGrantComponent />
        </>
    );
};

export const getStaticProps = async () => {
    let seoData = await utilService.getSEOContentByPageUrl('seai-better-energy-home-scheme');
    return {
        props: {
            seoData: seoData,
        },
        revalidate: 60 * 60 * 24,
    };
};

export default SeaiGrant;
