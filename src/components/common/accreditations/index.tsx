import React from "react";
import Image from "next/image";

import Slider from "react-slick";
import AppConst from "@config/app.const";

interface accreditationsProps {}

const Accreditations: React.FC<accreditationsProps> = () => {
	const settings = {
		infinite: true,
		centerPadding: "0px",
		slidesToShow: 6,
		speed: 500,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 900,
		focusOnSelect: true,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					centerPadding: "0px",
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 3,
				},
			},
		],
	};

	return (
		<div className="app-accreditations py-[50px] lg:pb-[145px]">
			<div className="container mx-auto px-[16px]">
				<div className="title text-center pb-[45px]">
					<h1 className="sm:max-w-full max-w-[200px] m-auto ">
						<b>Accreditations are important to us</b>
					</h1>
				</div>
				<Slider {...settings}>
					{AccreditationsData.map(item => (
						<div className="app-accreditations-item-2" key={item.id}>
							<Image
								src={item.imgUrl}
								alt={item.name}
								width={138}
								height={70}
								loading="lazy"
								sizes="(max-width: 138px) 70px"
								quality={100}
							/>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Accreditations;

interface AccreditationsType {
	id: number;
	name: string;
	imgUrl: string;
	url: string;
}

const AccreditationsData: Array<AccreditationsType> = [
	{
		id: 1,
		name: "Accreditations 1",
		imgUrl: AppConst.assetsBaseUrl + "clients/client-logo-1.webp",
		url: "",
	},
	{
		id: 2,
		name: "Accreditations 2",
		imgUrl: AppConst.assetsBaseUrl + "clients/client-logo-2.webp",
		url: "",
	},
	{
		id: 3,
		name: "Accreditations 3",
		imgUrl: AppConst.assetsBaseUrl + "clients/client-logo-3.webp",
		url: "",
	},
	{
		id: 4,
		name: "Accreditations 4",
		imgUrl: AppConst.assetsBaseUrl + "clients/client-logo-4.webp",
		url: "",
	},
	{
		id: 5,
		name: "Accreditations 5",
		imgUrl: AppConst.assetsBaseUrl + "clients/client-logo-5.webp",
		url: "",
	},
	{
		id: 6,
		name: "Accreditations 7",
		imgUrl: AppConst.assetsBaseUrl + "clients/client-logo-6.webp",
		url: "",
	},
];
