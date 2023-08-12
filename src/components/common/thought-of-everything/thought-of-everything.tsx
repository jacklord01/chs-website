import AppConst from "@config/app.const";
import Image from "next/image";
import React from "react";

interface ThoughtOfEverythingProps {
	title: string;
	subTitle?: string;
	options: Array<{
		id: number;
		imagePath: string;
		heading: string;
		details: string;
		arrow: boolean;
	}>;
}

const ThoughtOfEverything: React.FC<ThoughtOfEverythingProps> = ({
	title,
	subTitle,
	options,
}) => {
	return (
		<div className="thought-of-everything pt-[90px] lg:pb-[90px] pb-[50px] overflow-hidden bg-[#f3f3f3]">
			<div className="container mx-auto px-[16px]">
				<div className="title text-center mb-[50px]">
					<h1>{title}</h1>
					{subTitle && <p>{subTitle}</p>}
				</div>

				<div className="m-auto">
					{options.map(item => (
						<div key={item.id} className="thought-inner">
							{item.arrow && (
								<svg
									className="m-auto down-arrow"
									width="24"
									height="32"
									viewBox="0 0 24 32"
									fill="#08A8FF"
								>
									<use href="/images/sprite.svg#svg-arrow-down"></use>
								</svg>
							)}
							<div className="thought-item md:flex md:items-center p-[16px] md:py-[45px] md:px-[50px] !my-[1em]">
								<div className="md:mr-[50px] text-center">
									<Image
										className="max-w-full m-auto"
										src={item.imagePath}
										alt="Icon"
										width={95}
										height={100}
										loading="lazy"
										sizes="(max-width: auto) auto"
										quality={100}
									/>
								</div>
								<div className="content w-full text-center md:text-left mt-[20px] md:mt-0">
									<h2 className="mb-[12px] text-[18px] lg:text-[21px] text-[#204971]">
										{item.heading}
									</h2>
									<p>{item.details}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ThoughtOfEverything;
