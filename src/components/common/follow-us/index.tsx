import React from "react";
import Image from "next/image";
import AppConst from "@config/app.const";

interface FollowUsProps {}

const FollowUs: React.FC<FollowUsProps> = () => {
	return (
		<div className="app-accreditations py-[95px] pb-[70px] md:pb-[95px] bg-[#E7E7E7]">
			<div className="container mx-auto px-[16px]">
				<div className="md:flex items-center justify-between gap-x-[16px]">
					{AccreditationsData.map(item => (
						<div
							className="app-accreditations-item mb-[24px] md:mb-0"
							key={item.id}
						>
							<Image
								src={item.imgUrl}
								alt={item.name}
								width={290}
								height={71}
								loading="lazy"
								sizes="(max-width: 218px) 100%"
								quality={100}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FollowUs;

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
		imgUrl: AppConst.assetsBaseUrl + "clients/client-logo-8.webp",
		url: "",
	},
	{
		id: 2,
		name: "Accreditations 2",
		imgUrl: AppConst.assetsBaseUrl + "clients/client-logo-9.webp",
		url: "",
	},
	{
		id: 3,
		name: "Accreditations 3",
		imgUrl: AppConst.assetsBaseUrl + "clients/client-logo-11.webp",
		url: "",
	},
	{
		id: 4,
		name: "Accreditations 4",
		imgUrl: AppConst.assetsBaseUrl + "clients/client-logo-10.webp",
		url: "",
	},
];
