import AppConst from "@config/app.const";
import Image from "next/image";
import React from "react";

interface DetailProps {}

const Detail: React.FC<DetailProps> = () => {
	return (
		<div className="app-service py-[50px]">
			<div className="container mx-auto px-[16px]">
				<div className="title text-center mb-[50px]">
					<h1>
						<b>
							We&lsquo;ll carry out an detailed building survey of your home
						</b>
						<span className="font-normal block">
							using the latest laser technology.
						</span>
					</h1>
				</div>
				<div className="app-service-list">
					<div className="app-service-item md:flex flex-wrap mb-[48px]">
						<div className="app-service-image flex md:w-1/2 lg:w-[58.5%]">
							<div className="flex">
								<Image
									className="max-w-full"
									src={
										AppConst.assetsBaseUrl + "building-survey/service-1.webp"
									}
									alt="Service Image"
									width={714}
									height={381}
									loading="lazy"
									sizes="(max-width: 767px) 100%"
									quality={100}
								/>
							</div>
						</div>
						<div className="app-service-content  md:w-1/2  lg:w-[41.5%] flex items-center md:!py-[70px]">
							<div>
								<p className="font-semibold">
									We use Faro to capture all geometric data with pinpoint
									accuracy to ensure the accuracy of our recommendations.
								</p>
								<p className="!mb-0">
									This allows all of the geometric information needed to
									generate the initial technical assessment of your home&lsquo;s
									energy efficiency. It also captures the necessary information
									needed to generate all other design reports and detailed
									quotations for each upgrade; efficiently, accurately, and with
									millimeter precision.
								</p>
							</div>
						</div>
					</div>
				</div>
				<p className="text-center md:text-[21px] md:leading-[30px]">
					A detailed building survey questionnaire is also completed as part of
					our building survey. This survey gathers extensive data relating to
					your home&lsquo;s energy performance such as building fabric,
					ventilation details, space heating, hot water heating, lighting, and
					existing renewables. When this survey is put together with the laser
					scan survey, it provides all the information needed for the entire
					assessment, design, and quotation process during a single survey
					visit, reducing time and increasing efficiency in the process.
				</p>
			</div>
		</div>
	);
};

export default Detail;
