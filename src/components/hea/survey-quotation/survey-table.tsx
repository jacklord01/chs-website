import TableSkeleton from "@/components/common/loader/table-skeleton";
import { FieldValue } from "@services/hea/dto/survey-template.output.dto";
import { Euro } from "@utils/intl-util";
import React, { ReactNode, useState } from "react";

interface SurveyTableProps {
	values?: Array<FieldValue>;
	loading: boolean;
}

const SurveyTable: React.FC<SurveyTableProps> = ({
	values,
	loading,
}: SurveyTableProps) => {
	return (
		<table className="table-auto app-table w-full mb-4">
			<thead>
				<tr>
					<th>Description</th>
					<th className="w-[45px] sm:w-[80px] !text-center">Qty</th>
					<th className="w-[85px] sm:w-[120px] !text-center">Rate</th>
					<th className="w-[85px] sm:w-[120px] !text-center">Amount</th>
				</tr>
			</thead>
			<tbody>
				{loading ? (
					<TableSkeleton />
				) : (
					<>
						{values?.map((value, i) => (
							<tr key={i}>
								<td>
									<h6>{value.fieldName}</h6>
									{/* <p className="hidden md:block">{value.valueDescription}</p> */}
									<DetailsDailog details={value.valueDescription} />
								</td>
								<td className="!text-center"> {value.qty}</td>
								<td className="!text-center">{Euro.format(value.unitPrice)}</td>
								<td className="!text-center">
									{Euro.format(value.unitPrice * value.qty)}
								</td>
							</tr>
						))}
					</>
				)}
			</tbody>
		</table>
	);
};

export default SurveyTable;

const DetailsDailog = (props: { details: string; children?: ReactNode }) => {
	const [isShowing, setIsShowing] = useState(false);
	const handleClick = () => {
		setIsShowing(!isShowing);
		document.body.classList.add("overflow-hidden");
		if (isShowing) {
			document.body.classList.remove("overflow-hidden");
		}
	};
	return (
		<div className="md:hiddenn">
			<span
				className="text-[#08A8FF] sm:text-[14px] text-[12px] underline pt-1 block cursor-pointer"
				onClick={handleClick}
			>
				Show Details
			</span>
			<div className={`app-modal p-4 ${isShowing ? "open" : ""}`}>
				<div className="w-full max-h-full">
					<div className="app-modal-body max-w-[600px] rounded m-auto">
						<button className="app-modal-close" onClick={handleClick}>
							<svg width="13" viewBox="0 0 26 27" fill="white">
								<use href="/images/sprite.svg#svg-close"></use>
							</svg>
						</button>
						<div className="form-box p-[16px] md:p-[30px] bg-[#013285]">
							<p className="text-white !pt-4">{props.details}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
