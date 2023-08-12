import AppConst from "@config/app.const";
import Image from "next/image";
import React from "react";

interface EnergyServiceProps { }

const EnergyService: React.FC<EnergyServiceProps> = () => {
	return (
		<div className="app-energy-choice pt-[90px] lg:pb-[90px] pb-[50px] overflow-hidden">
			<div className="container mx-auto px-[16px]">
				<div className="title text-center mb-[50px]">
					<h1 className="leading-[48px] md:text-[2.4em]">
						Our Quotations Include
					</h1>
				</div>
				<div className="app-energy-choice-list grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
					<div className="app-energy-choice-item text-center px-[18px] py-[26px]">
						<div className="app-energy-choice-icon mx-auto">
							<Image
								src={AppConst.assetsBaseUrl + 'detailed-quotations/quoatation-1-v2.webp'}
								className="w-full h-auto"
								alt="House Type"
								loading="lazy"
								width={50}
								height={50}
							/>
						</div>
						<h2 className="mt-[24px] mb-[12px] text-[21px] text-[#204971]">
							SEAI Grants
						</h2>
						<p className="mb-[35px]">
							We deduct the value of any SEAI Grants that you are
							entitled to from the total cost you pay.
						</p>
					</div>
					<div className="app-energy-choice-item text-center px-[18px] py-[26px]">
						<div className="app-energy-choice-icon mx-auto">
							<Image
								src={AppConst.assetsBaseUrl + 'detailed-quotations/quoatation-2-v2.webp'}
								className="w-full h-auto"
								alt="House Type"
								loading="lazy"
								width={50}
								height={50}
							/>
						</div>
						<h2 className="mt-[24px] mb-[12px] text-[21px] text-[#204971]">
							Energy Credit Incentives
						</h2>
						<p className="mb-[35px]">
							We deduct the value of any Energy Credit Incentive
							you are entitled to from your total cost.
						</p>
					</div>
					<div className="app-energy-choice-item text-center px-[18px] py-[26px]">
						<div className="app-energy-choice-icon mx-auto">
							<Image
								src={AppConst.assetsBaseUrl + 'detailed-quotations/quoatation-3-v2.webp'}
								className="w-full h-auto"
								alt="House Type"
								loading="lazy"
								width={50}
								height={50}
							/>
						</div>
						<h2 className="mt-[24px] mb-[12px] text-[21px] text-[#204971]">
							Finance Options
						</h2>
						<p className="mb-[35px]">
							We provide you with cost-effective finance options
							to allow you to spread the cost over time.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EnergyService;
