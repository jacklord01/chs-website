import AppConst from "@config/app.const";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

interface ImageViewProps {}

const ImageView: React.FC<ImageViewProps> = () => {
	const settings = {
		infinite: false,
		centerPadding: "30px",
		slidesToShow: 3,
		speed: 500,
		arrows: false,
		autoplay: false,
		focusOnSelect: true,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					centerPadding: "30px",
				},
			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					centerPadding: "50px",
					className: "center",
					centerMode: true,
					infinite: true,
				},
			},
		],
	};

	return (
		<div className="app-image-view py-[50px] md:pt-[90px] md:pb-[90px] ">
			<div className="container mx-auto px-[16px]">
				<div className="app-image-view-slider">
					<Slider {...settings}>
						{ImageViewData.map(item => (
							<div className="app-image-view-item" key={item.id}>
								<Image
									className="max-w-full"
									src={item.imgUrl}
									alt="image"
									width={371}
									height={400}
									loading="lazy"
									sizes="(max-width: 138px) 100%"
								/>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default ImageView;

interface ImageSlideType {
	id: number;
	imgUrl: string;
}

const ImageViewData: Array<ImageSlideType> = [
	{
		id: 1,
		imgUrl: AppConst.assetsBaseUrl + "install/install-s-1.webp",
	},
	{
		id: 2,
		imgUrl: AppConst.assetsBaseUrl + "install/install-s-2.webp",
	},
	{
		id: 3,
		imgUrl: AppConst.assetsBaseUrl + "install/install-s-3.webp",
	},
];
