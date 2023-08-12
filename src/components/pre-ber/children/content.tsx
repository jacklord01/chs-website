import AppConst from "@config/app.const";
import Image from "next/image";
import React from "react";

interface BerContentProps { }

const BerContent: React.FC<BerContentProps> = () => {
	return (
		<>
			<div className="rating-scale lg:flex flex-wrap bg-[#ADC936] md:p-[55px] p-[16px] py-[45px] pr-[20px] mt-[90px] items-end">
				<div className="content text-[#0D0D0D] lg:w-[63%]">
					<h2 className="text-[#0D0D0D] text-[1.3em] sm:text-[1.5em] mb-3">
						The Rating Scale
					</h2>
					<p className="text-[#0D0D0D] pb-4">
						A Building Energy Rating (BER) Certificate helps you understand the
						energy efficiency of a home. It is a good indicator of how much you
						will spend and how much carbon you will produce to heat the home to
						a comfortable level.
					</p>
					<p className="text-[#0D0D0D] pb-4">
						The rating scale looks like the energy rating labels for household
						appliances. It rates the home on a scale from A-G.
					</p>
					<ul className="list-disc pl-4">
						<li className="pb-3">
							A-rated homes are the most energy-efficient and comfortable. They
							tend to have the lowest energy bills.
						</li>
						<li>
							G-rated homes are the least energy-efficient. They typically
							require a lot of energy to heat the home and have the highest
							energy bills.
						</li>
					</ul>
				</div>
				<div className="lg:pl-[50px] lg:w-[37%]">
					<Image
						src={AppConst.assetsBaseUrl + 'pre-ber/ber.webp'}
						alt="BER"
						height={300}
						width={395}
						className="m-auto lg:m-0 mt-[32px]"
					></Image>
				</div>
			</div>
			<div className="max-w-[1030px] m-auto bg-white md:p-[55px] p-[16px] py-[45px]">
				<div className="content">
					<h2 className="text-[#204971] text-[1.3em] sm:text-[1.5em] mb-3">
						How is a BER calculated?
					</h2>
					<p className="pb-4">
						A BER is calculated based on the amount of energy the home requires
						for:
					</p>
					<ul className="list-disc pl-4 text-[rgba(13, 13, 13, 0.6)]">
						<li className="pb-3">Space and hot water heating</li>
						<li className="pb-3">Ventilation</li>
						<li className="pb-3">Lighting</li>
					</ul>
					<p className="pt-2">
						The calculation uses the Dwelling Energy Assessment Procedure
						(DEAP). This is Ireland&#39;s official method for calculating a
						dwelling&#39;s BER. The DEAP calculation framework is based on IS EN
						13790 and draws heavily on the calculation and data used for the
						energy rating of dwellings in the UK.
					</p>
				</div>
			</div>
		</>
	);
};

export default BerContent;
