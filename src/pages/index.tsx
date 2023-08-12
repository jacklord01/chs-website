import utilService from "@services/utility/util.service";
import Home from "@/components/home";
import ChsHead from "@/components/layouts/ChsHead";
import fuleCostService from "@services/fuel-cost/fule-cost.service";
import { InitDataOutputDto } from "@services/fuel-cost/dto/inti-data.output.dto";
import dynamic from "next/dynamic";
import { BasePageProps } from "@utils/base-page-props.interface";

const ToastContainer = dynamic(
  () => import("react-toastify").then((module) => module.ToastContainer),
  {
    ssr: false,
  }
);

interface HomePageProps extends BasePageProps {
  initData: InitDataOutputDto;
}

const LandingPage = ({ seoData, initData }: HomePageProps) => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        closeOnClick
        theme="light"
        hideProgressBar={true}
      />
      {seoData && <ChsHead seoData={seoData} />}
      <Home initData={initData} />
    </>
  );
};

export const getStaticProps = async () => {
  let homePageData = await Promise.all([
    fuleCostService.getIntialDropDownData(),
    utilService.getSEOContentByPageUrl(),
  ]);

  return {
    props: {
      initData: homePageData[0],
      seoData: homePageData[1],
    },
    revalidate: 60 * 60 * 24,
  };
};

export default LandingPage;
