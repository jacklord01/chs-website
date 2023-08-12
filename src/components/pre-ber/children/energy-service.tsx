import Image from "next/image";
import React from "react";
import BerContent from "./content";
import AppConst from "@config/app.const";

interface EnergyServiceProps { }

const EnergyService: React.FC<EnergyServiceProps> = () => {
	return (
		<div className="app-energy-choice pt-[90px] lg:pb-[90px] pb-[50px] overflow-hidden">
			<div className="container mx-auto px-[16px]">
				<div className="title text-center mb-[50px]">
					<h1 className="leading-[48px] md:text-[2.4em]">
						We&#39;ll complete a Pre-BER Assessment to accurately calculate{" "}
						<span className="lg:block">
							information you need to make the right choices.
						</span>
					</h1>
				</div>
				<div className="app-energy-choice-list grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
					<div className="app-energy-choice-item text-center px-[18px] py-[26px]">
						<div className="app-energy-choice-icon mx-auto">
							<Image
								src={AppConst.assetsBaseUrl + 'pre-ber/ber-service-1-v2.webp'}
								className="w-full h-auto"
								alt="House Type"
								loading="lazy"
								width={50}
								height={50}
							/>
						</div>
						<h2 className="mt-[24px] mb-[12px] text-[21px] text-[#204971]">
							Energy Efficiency
						</h2>
						<p className="mb-[35px]">
							The Pre-BER will accurately determine your home&#39;s current
							energy efficiency level on a scale of A to G which gives you a
							baseline to work from.
						</p>
					</div>
					<div className="app-energy-choice-item text-center px-[18px] py-[26px]">
						<div className="app-energy-choice-icon mx-auto">
							<Image
								src={AppConst.assetsBaseUrl + 'pre-ber/ber-service-2-v2.webp'}
								className="w-full h-auto"
								alt="House Type"
								loading="lazy"
								width={50}
								height={50}
							/>
						</div>
						<h2 className="mt-[24px] mb-[12px] text-[21px] text-[#204971]">
							Fuel Costs
						</h2>
						<p className="mb-[35px]">
							Annual fuel costs can be estimated based on your home&#39;s energy
							efficiency, your primary heating system, and the heat source used
							to heat your home.
						</p>
					</div>
					<div className="app-energy-choice-item text-center px-[18px] py-[26px]">
						<div className="app-energy-choice-icon mx-auto">
							<Image
								src={AppConst.assetsBaseUrl + 'pre-ber/ber-service-3-v2.webp'}
								className="w-full h-auto"
								alt="House Type"
								loading="lazy"
								width={50}
								height={50}
							/>
						</div>
						<h2 className="mt-[24px] mb-[12px] text-[21px] text-[#204971]">
							Potential Savings
						</h2>
						<p className="mb-[35px]">
							Potential savings can be estimated based on your current BER and
							your target BER which can then be used to evaluate the payback on
							your investment.
						</p>
					</div>
				</div>
				<div className="text-center mt-[95px]">
					<p className="md:text-[21px] md:leading-[30px]">
						It&#39;s impossible to know the improvements you have achieved to
						your home&#39;s energy performance if you don&#39;t first know what
						your current energy performance is before you start. We highly
						recommend customers get a BER Assessment carried out on their home
						at the start of their Energy Efficiency project. This will indicate
						your home&#39;s energy performance and provide you with the
						information you need to make informed decisions on choosing the
						correct measures to upgrade.
					</p>
					<p className="font-semibold md:text-[21px] md:leading-[30px] mt-[45px]">
						Your BER is calculated on the amount of energy use for space and hot
						water heating, ventilation, and lighting. The number of people
						likely to occupy a building is also taken into consideration. Your
						BER is valid for 10 years and is a mandatory requirement if you are
						buying or renting a home.
					</p>
				</div>
				<BerContent />
			</div>
		</div>
	);
};

export default EnergyService;
