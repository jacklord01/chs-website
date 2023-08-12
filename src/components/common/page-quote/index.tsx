import Image from "next/image";
import React from "react";

interface PageQuoteProps {
	title: string;
	subTitle: string;
	imagePath: string;
	imageQuote?: string;
	quoteText: string;
	quoteText2?: string;
	details?: string;
}

const PageQuote: React.FC<PageQuoteProps> = ({
	title,
	subTitle,
	imagePath,
	imageQuote,
	quoteText,
	quoteText2,
	details,
}) => {
	return (
		<div className="bg-[#f3f3f3] pt-[50px]">
			<div className="container mx-auto px-[16px]">
				<div className="title text-center md:mb-[50px] mb-[40px]">
					<h1 className="md:leading-[48px] font-[Lato] max-w-[310px] md:max-w-[550px] m-auto lg:max-w-full">
						<b>{title}</b>
						<span className="font-normal block">{subTitle}</span>
					</h1>
				</div>
				<div className="app-service-list">
					<div className="app-service-item app-service-item2 md:flex flex-wrap">
						<div className="app-service-image flex md:w-1/2 lg:w-[58.5%]">
							<div className="flex img-box">
								<Image
									className="max-w-full"
									src={imagePath}
									alt="PageQuote Image"
									width={685}
									height={420}
									loading="lazy"
									sizes="(max-width: 767px) 100%"
									quality={100}
								/>
							</div>
						</div>
						<div className="app-service-content  md:w-1/2  lg:w-[41.5%] flex items-center md:!py-[70px]">
							<div>
								{imageQuote && <p className="font-semibold">{imageQuote}</p>}
								<p className="!mb-0">{quoteText}</p>
								<p className="!mb-0 mt-4">{quoteText2}</p>
							</div>
						</div>
					</div>
				</div>
				{details && (
					<p className="text-center md:text-[21px] md:leading-[30px] mt-[48px] text-[#0D0D0D]">
						{details}
					</p>
				)}
			</div>
		</div>
	);
};

export default PageQuote;
