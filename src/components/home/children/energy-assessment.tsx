import AppConst from "@config/app.const";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface EnergyAssesProps {
  buttonLabel: string;
}

const EnergyAssessment: React.FC<EnergyAssesProps> = ({
  buttonLabel,
}: EnergyAssesProps) => {
  return (
    <>
      <div className="app-energy-assessment lg:py-[95px] py-[50px]">
        <div className="container mx-auto px-[16px]">
          <div className="lg:relative">
            <div className="lg:order-last lg:absolute lg:right-0 lg:top-[-80px] z-10">
              <Image
                src={AppConst.assetsBaseUrl + "home-energy-ssessment.webp"}
                alt="Book Image"
                loading="lazy"
                width={670}
                height={440}
                sizes="(max-width: 670px) 100vw"
                className="sm-image lg:max-w-[70%] xl:max-w-full lg:ml-auto"
                quality={100}
              />
            </div>
            <div className="app-energy-assessment-content lg:text-left text-center lg:max-w-[690px]">
              <p className="text-[#204971] text-[18px] font-normal">
                Book Your
              </p>
              <h2 className="text-[#204971]">
                Home Energy Assessment <br /> Today!
              </h2>
              <p className="pb-[32px] pt-[10px]">
                Your first step to a Warm, Comfortable, <br />
                Healthy Home
              </p>
              <Link className="btn btn-primary" href="./home-energy-assessment">
                {buttonLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EnergyAssessment;
