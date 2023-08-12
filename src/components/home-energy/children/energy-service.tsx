import AppConst from "@config/app.const";
import utilService from "@services/utility/util.service";
import { WebConstraintOutputDto } from "@services/utility/web-constraints.output.dto";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface EnergyServiceProps {}

const EnergyService: React.FC<EnergyServiceProps> = () => {
	const [constraintData, setConstraintData] =
		useState<WebConstraintOutputDto | null>(null);
	useEffect(() => {
		const fetchConst = async () => {
			const data = await utilService.getWebConstraints();
			setConstraintData(data);
		};
		fetchConst();
	}, []);
	return (
		<div className="app-energy-choice pt-[90px] lg:pb-[120px] pb-[50px]">
			<div className="container mx-auto px-[16px]">
				<div className="title text-center mb-[50px]">
					<h1 className="leading-[48px]">So, what&#39;s included?</h1>
				</div>
				<div className="app-energy-choice-list grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px] items-start">
					<div className="app-energy-choice-item text-center px-[18px] py-[26px]">
						<div className="app-energy-choice-icon mx-auto">
							<Image
								src={
									AppConst.assetsBaseUrl + "home-energy/energy-service-1-v2.webp"
								}
								className="w-full h-auto"
								alt="House Type"
								loading="lazy"
								width={50}
								height={50}
							/>
						</div>
						<h2 className="mt-[24px] mb-[12px] text-[21px] text-[#204971]">
							Building Survey
						</h2>
						<p className="mb-[35px]">
							We&#39;ll carry out a detailed building survey of your home using
							the latest laser technology to capture all of the geometric data
							with pinpoint accuracy to ensure the accuracy of our
							recommendations.
						</p>
						<Link
							className="btn btn-secondary"
							type="button"
							href="./building-survey"
						>
							Survey Your Home
						</Link>
					</div>
					<div className="app-energy-choice-item text-center px-[18px] py-[26px]">
						<div className="app-energy-choice-icon mx-auto">
							<Image
								src={
									AppConst.assetsBaseUrl + "home-energy/energy-service-2-v2.webp"
								}
								className="w-full h-auto"
								alt="House Type"
								loading="lazy"
								width={50}
								height={50}
							/>
						</div>
						<h2 className="mt-[24px] mb-[12px] text-[21px] text-[#204971]">
							Pre-BER
						</h2>
						<p className="mb-[35px]">
							We&#39;ll complete a Pre-BER Assessment to accurately calculate
							your home&#39;s energy efficiency and estimate the current fuel
							costs and potential savings.
						</p>
						<Link
							className="btn btn-secondary"
							type="button"
							href="./pre-ber"
						>
							{constraintData?.heaPreBerLinkLabel || "Learn More"}
						</Link>
					</div>
					<div className="app-energy-choice-item text-center px-[18px] py-[26px]">
						<div className="app-energy-choice-icon mx-auto">
							<Image
								src={
									AppConst.assetsBaseUrl + "home-energy/energy-service-3-v2.webp"
								}
								className="w-full h-auto"
								alt="House Type"
								loading="lazy"
								width={50}
								height={50}
							/>
						</div>
						<h2 className="mt-[24px] mb-[12px] text-[21px] text-[#204971]">
							Technical Assessment
						</h2>
						<p className="mb-[35px]">
							We&#39;ll complete a detailed technical assessment to determine
							your home&#39;s current HLI factor and outline what measures you
							need to upgrade to make your home Heat Pump Ready.
						</p>
						<Link
							className="btn btn-secondary"
							type="button"
							href="./technical-assessment"
						>
							{constraintData?.heaTechnicalAssesmentLinkLabel || "Learn More"}
						</Link>
					</div>
					<div className="app-energy-choice-item text-center px-[18px] py-[26px]">
						<div className="app-energy-choice-icon mx-auto">
							<Image
								src={
									AppConst.assetsBaseUrl + "home-energy/energy-service-4-v2.webp"
								}
								className="w-full h-auto"
								alt="House Type"
								loading="lazy"
								width={50}
								height={50}
							/>
						</div>
						<h2 className="mt-[24px] mb-[12px] text-[21px] text-[#204971]">
							Upgrade Plan
						</h2>
						<p className="mb-[35px]">
							We&#39;ll provide you with a simple and easy-to-understand upgrade
							plan that sets out your overall energy efficiency goal and what
							steps you need to take to achieve it.
						</p>
						<Link
							className="btn btn-secondary"
							type="button"
							href="./upgrade-plan"
						>
							{constraintData?.heaUpgradePlanLabel || "Learn More"}
						</Link>
					</div>
					<div className="app-energy-choice-item text-center px-[18px] py-[26px]">
						<div className="app-energy-choice-icon mx-auto">
							<Image
								src={
									AppConst.assetsBaseUrl + "home-energy/energy-service-5-v2.webp"
								}
								className="w-full h-auto"
								alt="House Type"
								loading="lazy"
								width={50}
								height={50}
							/>
						</div>
						<h2 className="mt-[24px] mb-[12px] text-[21px] text-[#204971]">
							Detailed Quotation
						</h2>
						<p className="mb-[35px]">
							We&#39;ll provide you with best-in-class, detailed, transparent
							quotations for your works, in line with the recommendations set
							out in your report, with all grants and incentives factored in.
						</p>
						<Link
							className="btn btn-secondary"
							type="button"
							href="./detailed-quotations"
						>
							{constraintData?.heaDetailedQuotationLabel || "Learn More"}
						</Link>
					</div>
					<div className="app-energy-choice-item text-center px-[18px] py-[26px]">
						<div className="app-energy-choice-icon mx-auto">
							<Image
								src={
									AppConst.assetsBaseUrl + "home-energy/energy-service-6-v2.webp"
								}
								className="w-full h-auto"
								alt="House Type"
								loading="lazy"
								width={50}
								height={50}
							/>
						</div>
						<h2 className="mt-[24px] mb-[12px] text-[21px] text-[#204971]">
							One Stop Shop Delivery
						</h2>
						<p className="mb-[35px]">
							We&#39;ll provide you with a choice of fully managed service
							options to complete your works as part of a single project, or to
							complete the works in stages over time.
						</p>
						<Link
							className="btn btn-secondary"
							type="button"
							href="./one-stop-shop"
						>
							{constraintData?.heaOssDeliveryLinkLabel || "Learn More"}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EnergyService;
