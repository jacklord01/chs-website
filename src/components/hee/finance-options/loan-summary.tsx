import Image from "next/image";

import { Euro } from "@utils/intl-util";
import { AvailavedLoanInfo } from "@services/hee/dto/availed-loan.info";
import AppConst from "@config/app.const";

interface LoanSummaryProps {
	availedLoanInfo: AvailavedLoanInfo;
}

const LoanSummary: React.FC<LoanSummaryProps> = ({ availedLoanInfo }) => {
	return (
		<>
			{availedLoanInfo.selectedOption && (
				<div className="total-summary total-summary-fo relative">
					<Image
						src={AppConst.assetsBaseUrl + "bg-shap.webp"}
						fill
						loading="lazy"
						alt="Image"
						sizes="(max-width: 470px) 100vw"
						className="object-cover md:block hidden"
					/>
					<h1>
						{Euro.format(
							(availedLoanInfo.interestedLoanAmount +
								(availedLoanInfo.interestedLoanAmount *
									availedLoanInfo.selectedOption.interestRate) /
								100) /
							(Math.ceil(availedLoanInfo.interestedLoanTerm * 12) || 1)
						)}
						<small>/ Month</small>
					</h1>
					<h4>
						for {Math.ceil(availedLoanInfo.interestedLoanTerm * 12)} months
					</h4>
					<ul>
						<li>
							Interest Rate:{" "}
							<span>{availedLoanInfo.selectedOption.interestRate}% APR</span>
						</li>
						<li>
							Total Interest to be Paid:{" "}
							<span>
								{Euro.format(
									(availedLoanInfo.interestedLoanAmount *
										availedLoanInfo.selectedOption.interestRate) /
									100
								)}
							</span>
						</li>
						<li>
							Total Amount Repayable:{" "}
							<span>
								{Euro.format(
									availedLoanInfo.interestedLoanAmount +
									(availedLoanInfo.interestedLoanAmount *
										availedLoanInfo.selectedOption.interestRate) /
									100
								)}
							</span>
						</li>
					</ul>
				</div>
			)}
		</>
	);
};

export default LoanSummary;
