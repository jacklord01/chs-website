import AppConst from "@config/app.const";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface EnergyBookProps {}

const EnergyBook: React.FC<EnergyBookProps> = () => {
	return (
		<div className="app-energy-book relative">
			<Image
				src={AppConst.assetsBaseUrl + "home-energy/booking-bg.webp"}
				fill
				loading="lazy"
				alt="Fuel Calculator"
				sizes="(max-width: 1920px) 100vw"
				className="object-fill"
			/>
			<div className="lg:flex flex-row  lg:items-center relative">
				<div className="lg:basis-1/2 lg:pb-0 pb-[50px] pt-[50px] lg:pt-[0]">
					<div className="app-energy-book-text lg:pl-[16px] lg:pr-[80px] text-center lg:text-left">
						<h1 className="text-white leading-[48px] mb-[20px]">
							<span>Book Your</span> <br />
							Home Energy Assessment Today!
						</h1>
						<p className="text-white mb-[35px]">
							Your first step to a Warm, Comfortable,
							<br /> Healthy Home.
						</p>
						<Link
							type="button"
							role="button"
							className="btn btn-white secondary-hover !px-[20px]"
							href="./survey-quotation-calculate"
						>
							Book Now
						</Link>
					</div>
				</div>
				<div className="lg:basis-1/2 lg:pb-0 pb-[50px]">
					<div className="app-energy-book-img lg:pl-[35px]">
						<Image
							className="mx-auto lg:ml-[0]"
							src={AppConst.assetsBaseUrl + "home-energy/booking-person.webp"}
							alt="Project thumbnail"
							width={780}
							height={307}
							loading="lazy"
							sizes="(max-width: 780px) 307px"
							quality={100}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EnergyBook;
