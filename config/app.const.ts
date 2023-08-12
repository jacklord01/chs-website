const AppConst: AppConstType = {
  appBaseUrl: process.env.NEXT_PUBLIC_APP_BASE_URL,
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  webApiBaseUrl: process.env.NEXT_PUBLIC_WEB_API_BASE_URL,
  assetsBaseUrl: process.env.NEXT_PUBLIC_ASSET_IMAGE_BASE_URL,
  imageBaseUrl: process.env.NEXT_PUBLIC_IMAGE_BASE_URL,
  wpSiteUrl: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
  geoAddressUrl: "https://www.geoaddress-checked.ie/api/v1/",
  geoAddressToken: "3C48D0CC01F54913939106CEE5BB698B",
};

interface AppConstType {
  appBaseUrl?: string;
  apiBaseUrl?: string;
  webApiBaseUrl?: string;
  assetsBaseUrl?: string;
  imageBaseUrl?: string;
  wpSiteUrl?: string;
  geoAddressUrl: string;
  geoAddressToken: string;
}

export default AppConst;
