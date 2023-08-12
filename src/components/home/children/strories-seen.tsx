import AppConst from "@config/app.const";
import Image from "next/image";
import React, { useState } from "react";
const embedID = "xukc82zhw7A";

interface StoriesSeenProps {}

const StorieSeen: React.FC<StoriesSeenProps> = () => {
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
							<div className="app-stories-content lg:text-left text-center lg:max-w-[420px] pt-[24px] lg:pt-0 lg:pr-[20px]">
								<h1 className="pb-[5px]">As seen on</h1>
								<Image
									src={AppConst.assetsBaseUrl + "stories-brand-2.webp"}
									alt="Seai"
									height={72}
									width={355}
									sizes="100vw"
									className="m-auto lg:m-0 h-auto"
								></Image>
								<p className="pt-[15px]">
									Duncan Stewart meets two families who have performed deep
									retrofits on their homes in an effort to diminish emissions
									and increase efficiency.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default StorieSeen;
