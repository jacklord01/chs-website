import Link from "next/link";
import React from "react";

interface InstallQuoteProps {}

const InstallQuote: React.FC<InstallQuoteProps> = () => {
	return (
		<div className="app-book-quote pt-[350px] md:pt-[200px] pb-[50px] md:pb-[90px] mt-[-345px] md:mt-[-195px] bg-[#035AB1]">
			<div className="container mx-auto px-[16px]">
				<div className="text-center">
					<Link
						href="./survey-quotation-calculate"
						className="btn btn-white secondary-hover mt-[16px] md:mt-[30px] mb-[45px]"
					>
						Get A Quote
					</Link>
					<h1 className="text-white leading-[40px] mb-[10px]">
						Book Your Installation Services Today
					</h1>
					{/* <p>
						Receive 50% Off Your First Report by entering the discount code
						HES0520
					</p> */}
				</div>
			</div>
		</div>
	);
};

export default InstallQuote;
