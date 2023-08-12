import AppConst from "@config/app.const";
import Image from "next/image";
import React from "react";

interface MadeSimpleProps {
	title: string;
	subTitle?: string;
	options: Array<{
		id: number;
		imagePath: string;
		heading: string;
		details: string;
		setWidth?: number;
		setHeight?: number;
	}>;
}

const MadeSimple: React.FC<MadeSimpleProps> = ({
	title,
	subTitle,
	options,
}) => {
	return (
		<div className="thought-of-everything pt-[90px] overflow-hidden bg-[#f3f3f3]">
			<div className="container mx-auto px-[16px]">
				<div className="title text-center mb-[50px]">
					<h1>{title}</h1>
					{subTitle && <p>{subTitle}</p>}
				</div>
				<div className="m-auto relative">
					<div className="top-img max-w-[900px] mx-auto mb-[-17px]">
						<Image
							className="max-w-full ml-[110px] hidden md:inline-block"
							src={AppConst.assetsBaseUrl + "install/top.webp"}
							alt="Icon"
							width={401}
							height={203}
							loading="lazy"
							sizes="(max-width: auto) auto"
						/>
						<Image
							className="max-w-full mx-auto md:hidden relative left-[4px]"
							src={AppConst.assetsBaseUrl + "install/top-sm.webp"}
							alt="Icon"
							width={93}
							height={235}
							loading="lazy"
							sizes="(max-width: auto) auto"
						/>
					</div>
					{options.map(item => (
						<div key={item.id}>
							<div className="thought-item lg:hover:pl-[155px] md:flex md:items-center px-[16px] pb-[16px] md:py-[0px] md:px-[50px] md:pl-[90px] !my-[1em]">
								<div className="w-[144px] m-auto md:mr-[50px] text-center">
									<Image
										className="max-w-full mx-auto m-0"
										src={item.imagePath}
										alt="Icon"
										width={item.setWidth}
										height={item.setHeight}
										loading="lazy"
										sizes="(max-width: auto) auto"
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
					<div className="bottom-img max-w-[900px] mx-auto mt-[-17px]">
						<Image
							className="max-w-full md:ml-[187px] lg:ml-[192px] hidden md:inline-block"
							src={AppConst.assetsBaseUrl + "install/simple-bottom.webp"}
							alt="Icon"
							width={257}
							height={133}
							loading="lazy"
							sizes="(max-width: auto) auto"
						/>
						<Image
							className="max-w-full mx-auto md:hidden"
							src={AppConst.assetsBaseUrl + "install/simple-bottom-sm.webp"}
							alt="Icon"
							width={23}
							height={176}
							loading="lazy"
							sizes="(max-width: auto) auto"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MadeSimple;
