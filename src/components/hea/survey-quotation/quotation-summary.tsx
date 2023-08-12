import AppConst from "@config/app.const";
import { Euro } from "@utils/intl-util";
import Image from "next/image";

interface QuotationSummaryProps {
	vatRate: number;
	totalCost: number;
	totalGrant: number;
	totalIncentive: number;
}

const QuotationSummary: React.FC<QuotationSummaryProps> = ({
	vatRate,
	totalCost,
	totalGrant,
	totalIncentive,
}: QuotationSummaryProps) => {

	const vatAmount = Number(((totalCost * vatRate) / 100).toFixed(2));
	const netCost = totalCost + vatAmount;

	return (
		<>
			<Image
				src={AppConst.assetsBaseUrl + "summary-bg.webp"}
				fill
				loading="lazy"
				alt="Image"
				sizes="(max-width: 470px) 100vw"
				className="object-cover"
			/>
			<h3>Quotation Cost Summary </h3>
			<ul>
				<li>
					Total Cost (ex VAT)
					<span>{Euro.format(totalCost)}</span>
				</li>
				<li className="border-b border[rgba(255, 255, 255, 0.5)]">
					Vat (@{vatRate}%)
					<span>{Euro.format(vatAmount)}</span>
				</li>
				<li className="!font-[600] pt-3">
					Total Cost
					<span>
						{Euro.format(netCost)}
					</span>
				</li>
				{totalGrant > 0 && (
					<li>
						Less SEAI Grant
						<span>-{Euro.format(totalGrant)}</span>
					</li>
				)}
				{totalIncentive > 0 && (
					<li>
						Less Energy Credit Incentives
						<span>-{Euro.format(totalIncentive)}</span>
					</li>
				)}
				<li className="!font-[600] pt-3 border-t border[rgba(255, 255, 255, 0.5)]">
					Net Cost Payable
					<span className="font-bold md:text-[32px]">
						{Euro.format(
							netCost - (totalGrant + totalIncentive)
						)}
					</span>
				</li>
			</ul>
		</>
	);
};

export default QuotationSummary;
