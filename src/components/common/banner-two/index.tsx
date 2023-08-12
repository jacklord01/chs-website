import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AppBannerTwoProps {
	bannerImage: string;
	title: string;
}

const AppBannerTwo: React.FC<AppBannerTwoProps> = ({ bannerImage, title }) => {
	return (
		<div className="app-banner app-banner-two relative overflow-hidden">
			<div className="bg-image relative">
				<Image
					src={bannerImage}
					fill
					loading="eager"
					priority
					alt="Banner"
					sizes="(max-width: 1920px) 100vw"
					className="image object-cover object-[75%]-top"
					quality={100}
				/>
			</div>
			<div className="container mx-auto md:px-[15px]">
				<div className="app-banner-text app-banner-text-two relative md:text-left text-center ">
					<h1>{title}</h1>
				</div>
			</div>

			<Link
				className="btn bg-[#adc936] !text-[#0d0d0d] sm:!hidden !block fixed inset-x-0 bottom-0 z-50"
				href="./home-energy-estimate"
				target="_blank"
			>
				GET AN ESTIMATE
			</Link>
		</div>
	);
};

export default AppBannerTwo;
