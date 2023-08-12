import Image from "next/image";
import React from "react";

interface EnergyChoiceProps {
	title: string;
	subTitle?: string;
	options: Array<{
		imagePath: string;
		heading: string;
		detail: string;
	}>;
}

const EnergyChoice: React.FC<EnergyChoiceProps> = ({
	title,
	subTitle,
	options,
}: EnergyChoiceProps) => {
	return (
		<div className="app-energy-choice lg:py-[90px] py-[90px] sm:pb-[150px]">
			<div className="container mx-auto px-[16px]">
				<div className="title text-center mb-[50px]">
					<h1 className="leading-[48px]">
						{title} <span className="lg:block">{subTitle}</span>
					</h1>
				</div>

				<div className="app-energy-choice-list grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[30px]">
					{options.map(x => (
						<div
							className="app-energy-choice-item text-center px-[18px] py-[22px]"
							key={x.heading}
						>
							<div className="app-energy-choice-icon mx-auto">
								<Image
									src={x.imagePath}
									className="w-full h-auto"
									alt="House Type"
									loading="lazy"
									width={80}
									height={80}
									quality={100}
								/>
							</div>
							<h2 className="mt-[24px] mb-[12px] text-[21px] text-[#204971]">
								{x.heading}
							</h2>
							<p>{x.detail}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default EnergyChoice;
