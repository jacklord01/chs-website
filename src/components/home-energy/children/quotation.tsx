import AppConst from "@config/app.const";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface QuotationProps { }

const Quotation: React.FC<QuotationProps> = () => {
  return (
    <div className="app-energy-choice quotation pt-[90px] pb-[90px]">
      <div className="container mx-auto px-[16px]">
        <div className="title text-center mb-[50px]">
          <h1 className="leading-[48px]">Our Goal is to Make It Simple!</h1>
          <p>
            Get the information you need for less than you think in three simple
            steps. And remember, we will deduct the full cost of your Home
            Energy Assessment from the cost of completing your works to make
            sure you get the most value for your money.
          </p>
        </div>
        <div className="app-energy-choice-list grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
          <div className="app-energy-choice-item text-center px-[18px] py-[26px]">
            <div className="app-energy-choice-icon mx-auto">
              <Image
                src={AppConst.assetsBaseUrl + 'home-energy/energy-service-7-v2.webp'}
                className="w-full h-auto"
                alt="House Type"
                loading="lazy"
                width={50}
                height={50}
              />
            </div>
            <h2 className="mt-[24px] mb-[12px] text-[21px] text-[#204971]">Instant Estimate</h2>
            <p className="mb-[15px]">
              Answer some quick questions and get an online estimate in seconds
              with SEAI grants factored in.
            </p>
          </div>
          <div className="app-energy-choice-item text-center px-[18px] py-[26px]">
            <div className="app-energy-choice-icon mx-auto">
              <Image
                src={AppConst.assetsBaseUrl + 'home-energy/energy-service-8-v2.webp'}
                className="w-full h-auto"
                alt="House Type"
                loading="lazy"
                width={50}
                height={50}
              />
            </div>
            <h2 className="mt-[24px] mb-[12px] text-[21px] text-[#204971]">Expert Consultation</h2>
            <p className="mb-[15px]">
              A member of our Technical Sales Team will give you a call to
              answer any questions you may have and provide you with the best
              price available.
            </p>
          </div>
          <div className="app-energy-choice-item text-center px-[18px] py-[26px]">
            <div className="app-energy-choice-icon mx-auto">
              <Image
                src={AppConst.assetsBaseUrl + 'home-energy/energy-service-9-v2.webp'}
                className="w-full h-auto"
                alt="House Type"
                loading="lazy"
                width={50}
                height={50}
              />
            </div>
            <h2 className="mt-[24px] mb-[12px] text-[21px] text-[#204971]">Home Energy Assessment</h2>
            <p className="mb-[15px]">
              A member of our Building Survey Team will contact you to book a
              date and time to complete your building survey.
            </p>
          </div>
        </div>
        <div className="button-area text-center">
          <Link type="button" className="btn btn-primary mt-[50px]" href="survey-quotation-calculate">
            Get Quotation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Quotation;
