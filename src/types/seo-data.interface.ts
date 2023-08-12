export interface SEOData {
  pageTitle: string;
  metaTag: string;
  metaDescription: string;

  ogTitle: string;
  ogDescription: string;
  ogUrl?: string;
  ogImageUrl?: string;
  ogImageAlt?: string;

  twitterImageUrl?: string;
  twitterImageAlt?: string;

  linkedinImageUrl?: string;
  linkedinImageAlt?: string;

  facebookImageUrl?: string;
  facebookImageAlt?: string;

  instagramImageUrl?: string;
  instagramImageAlt?: string;

  googleSiteVerification?: string;
}
