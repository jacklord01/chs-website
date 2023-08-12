import AppConst from "@config/app.const";
import { Euro } from "@utils/intl-util";
import Image from "next/image";

interface EstimatedSummaryProps {
	vatRate: number;
	totalMeasure: number;
	totalGrant: number;
	totalIncentive: number;
}

const EstimatedSummary: React.FC<EstimatedSummaryProps> = ({
	vatRate,
	totalMeasure,
	totalGrant,
	totalIncentive,
}: EstimatedSummaryProps) => {
	const vatAmount = Number(((totalMeasure * vatRate) / 100).toFixed(2));
	const netMeasure = totalMeasure + vatAmount;
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
			<h3>Estimated Cost Summary </h3>
			<ul>
				<li>
					Measures total <span>{Euro.format(totalMeasure)}</span>
				</li>
				<li className="border-b border[rgba(255, 255, 255, 0.5)]">
					Vat (@{vatRate}%)
					<span>{Euro.format(vatAmount)}</span>
				</li>
				<li className="!font-[600] pt-3">
					Total Cost{" "}
					<span>
						{Euro.format(netMeasure)}
					</span>
				</li>
				{totalGrant != 0 && (
					<li>
						Less SEAI Grant <span>{Euro.format(totalGrant)}</span>
					</li>
				)}
				{totalIncentive != 0 && (
					<li className="border-b border[rgba(255, 255, 255, 0.5)]">
						Less Energy Credit Incentives{" "}
						<span>{Euro.format(totalIncentive)}</span>
					</li>
				)}
				<li className="!font-[600] pt-3">
					Net Cost Payable
					<span className="font-bold md:text-[32px]">
						{Euro.format(
							netMeasure + totalGrant + totalIncentive
						)}
					</span>
				</li>
			</ul>
		</>
	);
};

export default EstimatedSummary;
