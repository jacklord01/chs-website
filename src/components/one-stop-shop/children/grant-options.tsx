import Link from "next/link";
import React from "react";

interface GrantOptionsProps {}

const GrantOptions: React.FC<GrantOptionsProps> = () => {
	return (
		<div className="grant-option-include pt-[90px] lg:pb-[90px] pb-[50px] overflow-hidden bg-[#f3f3f3]">
			<div className="container mx-auto px-[16px]">
				<div className="title text-center mb-[50px]">
					<h1 className="leading-[48px] md:text-[2.4em]">
						Grant Options include
					</h1>
				</div>
				<div className="grant-options grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
					<div className="grant-options-item text-center px-[10px] pt-[32px] pb-[45px] bg-white border-t-4 border-[#FFCE52]">
						<h2 className="mb-[12px] text-[21px] text-[#204971]">
							Individual Energy Upgrade Grants
						</h2>
						<p className="mb-[35px]">Part funded with SEAI grants</p>
						<Link href={""} className="btn btn-primary outline secondary-hover">
							Learn More
						</Link>
					</div>
					<div className="grant-options-item text-center px-[16px] pt-[32px] pb-[45px] bg-white border-t-4 border-[#2A9F9A]">
						<h2 className="mb-[12px] text-[21px] text-[#204971]">
							One Stop Shop Service
						</h2>
						<p className="mb-[35px]">Part funded with SEAI grants</p>
						<Link href={""} className="btn btn-primary outline secondary-hover">
							Learn More
						</Link>
					</div>
					<div className="grant-options-item text-center px-[16px] pt-[32px] pb-[45px] bg-white border-t-4 border-[#F49134]">
						<h2 className="mb-[12px] text-[21px] text-[#204971]">
							Free Energy Upgrade
						</h2>
						<p className="mb-[35px]">Fully funded by SEAI</p>
						<Link href={""} className="btn btn-primary outline secondary-hover">
							Learn More
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GrantOptions;
