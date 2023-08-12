import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface StoriesProps {
	title: string;
	subTitle: string;
	storiesLogo?: string;
	embedID: string;
	buttonText?: string;
	btnUrl?: string;
}

const Stories: React.FC<StoriesProps> = ({
	title,
	subTitle,
	storiesLogo,
	embedID,
	buttonText,
	btnUrl,
}) => {
	const [imageClicked, setImageClicked] = useState(false);

	const onThumbnailClick = () => {
		setImageClicked(true);
	};

	return (
		<>
			<div className="app-stories lg:py-[90px] py-[50px]">
				<div className="container mx-auto px-[16px]">
					<div className="lg:flex flex-row">
						<div className="lg:basis-3/4 lg:order-last">
							<div className="sm:h-[358px] h-[190px] border-0 lg:w-[670px] w-full ml-auto bg-[#204971]">
								{!imageClicked ? (
									<div
										className="sm:h-[358px] h-[190px] border-0 relative lg:w-[670px] w-full flex items-center justify-center"
										onClick={onThumbnailClick}
									>
										<Image
											src={`https://img.youtube.com/vi/${embedID}/sddefault.jpg`}
											fill
											className="object-cover"
											alt="Youtube thumbnail"
											loading="lazy"
											sizes="(max-width: 670px) 100vw"
										/>
										<span id="#play-button" className="absolute cursor-pointer">
											<svg width="81" viewBox="0 0 81 81">
												<use href="/images/sprite.svg#svg-youtube-play"></use>
											</svg>
										</span>
									</div>
								) : (
									<iframe
										allowFullScreen
										src={
											imageClicked
												? `https://www.youtube.com/embed/${embedID}?rel=0&showinfo=0&autoplay=1&controls=0`
												: ""
										}
										className="sm:h-[358px] h-[190px] border-0 lg:w-[670px] w-full"
										title="Upgrade to a comfortable and warm home"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									/>
								)}
							</div>
						</div>
						<div className="lg:basis-2/4 items-center lg:flex">
							<div className="app-stories-content lg:text-left text-center pt-[24px] lg:pt-0">
								<h1>{title}</h1>
								<p>{subTitle}</p>
								{storiesLogo && (
									<Image
										src={storiesLogo}
										alt="Seai"
										height={44}
										width={165}
										className="m-auto lg:m-0"
										quality={100}
									></Image>
								)}
								{buttonText && btnUrl && (
									<Link
										href={btnUrl}
										className="btn btn-primary outline secondary-hover"
									>
										{buttonText}
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Stories;
