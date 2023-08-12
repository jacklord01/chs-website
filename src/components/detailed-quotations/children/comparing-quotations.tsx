import AppConst from "@config/app.const";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ComparingQuotationsProps {}

const ComparingQuotations: React.FC<ComparingQuotationsProps> = () => {
	return (
		<div className="app-energy-choice pt-[90px] lg:pb-[90px] pb-[50px] overflow-hidden !bg-white">
			<div className="container mx-auto px-[16px]">
				<div className="lg:flex flex-row">
					<div className="lg:basis-2/4">
						<div className="lg:pr-[120px] text-right">
							<Image
								src={
									AppConst.assetsBaseUrl + "detailed-quotations/quoatation.webp"
								}
								className="h-auto m-auto lg:ml-auto lg:mr-0"
								alt="Comparing Quotations"
								loading="lazy"
								width={224}
								height={332}
							/>
						</div>
					</div>
					<div className="lg:basis-3/4 items-center lg:flex">
						<div className="app-stories-content lg:text-left text-center pt-[24px] lg:pt-0">
							<h1>Comparing Quotations</h1>
							<p className="lg:text-[18px] lg:max-w-[600px] lg:leading-[28px]">
								We&apos;re all about saving you time and energy, and we&apos;re
								so confident that you won&apos;t find a more detailed
								transparent like for like quotation that we&apos;ll give you a
								€50 One For All gift voucher if you get one from any of our
								competitors.
							</p>
							<Link
								href={"./survey-quotation-calculate"}
								className="btn btn-primary"
							>
								Book Now
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ComparingQuotations;
