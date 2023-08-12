import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AppBannerProps {
	bannerImage: string;
	pageHeading: string;
	title: string;
	subTitle: string;
	buttonText?: string;
	buttonLink?: string;
	openButtonLinkInNewTab?: boolean;
	smTitleLineSpace?: string;
}

const AppBanner: React.FC<AppBannerProps> = ({
	bannerImage,
	pageHeading,
	title,
	subTitle,
	buttonText,
	buttonLink,
	openButtonLinkInNewTab,
	smTitleLineSpace,
}) => {
	const titleClass =
		smTitleLineSpace == "18"
			? `mb-[18px] md:mb-[20px]`
			: `mb-[16px] md:mb-[20px]`;
	const buttonClass =
		smTitleLineSpace == "18"
			? `btn btn-white secondary-hover mt-[18px] md:mt-[28px]`
			: `btn btn-white secondary-hover mt-[16px] md:mt-[28px]`;

	return (
		<div className="app-banner relative overflow-hidden">
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
				<div className="app-banner-text relative md:text-left text-center ">
					<p className={titleClass}>{pageHeading}</p>
					<h1>{title}</h1>
					<p>{subTitle}</p>
					{buttonText && buttonLink ? (
						<>
							{openButtonLinkInNewTab ? (
								<Link
									type="button"
									role="button"
									className={buttonClass}
									href={buttonLink}
									target="_blank"
								>
									{buttonText}
								</Link>
							) : (
								<Link
									type="button"
									role="button"
									className={buttonClass}
									href={buttonLink}
								>
									{buttonText}
								</Link>
							)}
						</>
					) : (
						""
					)}
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

export default AppBanner;
