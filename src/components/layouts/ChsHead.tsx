import { SEOData } from "@/types/seo-data.interface";
import AppConst from "@config/app.const";
import Head from "next/head";
import React from "react";

interface HeadProps {
  seoData: SEOData;
}
const ChsHead = ({ seoData }: HeadProps) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      ></meta>

      <title>{seoData.pageTitle}</title>
      <meta name="description" content={seoData.metaDescription} />

      {seoData.ogTitle && (
        <meta property="og:title" content={seoData.ogTitle} />
      )}
      {seoData.ogDescription && (
        <meta property="og:description" content={seoData.ogDescription} />
      )}
      {seoData.ogUrl && (
        <meta property="og:url" content={AppConst.appBaseUrl + seoData.ogUrl} />
      )}
      {seoData.ogImageUrl && (
        <>
          <meta property="og:image" content={seoData.ogImageUrl} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content={seoData.ogImageAlt} />
        </>
      )}

      {seoData.twitterImageUrl && (
        <>
          <meta property="twitter:image" content={seoData.twitterImageUrl} />
          <meta property="twitter:image:width" content="1200" />
          <meta property="twitter:image:height" content="630" />
          <meta
            property="twitter:image:alt"
            content={seoData.twitterImageAlt}
          />
        </>
      )}

      {seoData.linkedinImageUrl && (
        <>
          <meta property="linkedin:image" content={seoData.linkedinImageUrl} />
          <meta property="linkedin:image:width" content="1200" />
          <meta property="linkedin:image:height" content="628" />
          <meta
            property="linkedin:image:alt"
            content={seoData.linkedinImageAlt}
          />
        </>
      )}

      {seoData.facebookImageUrl && (
        <>
          <meta property="facebook:image" content={seoData.facebookImageUrl} />
          <meta property="facebook:image:width" content="1200" />
          <meta property="facebook:image:height" content="630" />
          <meta
            property="facebook:image:alt"
            content={seoData.facebookImageAlt}
          />
        </>
      )}

      {seoData.instagramImageUrl && (
        <>
          <meta
            property="instagram:image"
            content={seoData.instagramImageUrl}
          />
          <meta property="instagram:image:width" content="1200" />
          <meta property="instagram:image:height" content="630" />
          <meta
            property="instagram:image:alt"
            content={seoData.instagramImageAlt}
          />
        </>
      )}
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="google-site-verification"
        content="6mJWwiojub47BBu_rz2iw6dZzH8mXsFVSYNL7QP0RrQ"
      />
    </Head>
  );
};

export default ChsHead;
