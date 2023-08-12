import React, { useState } from "react";
import { getTrackBackground, Range } from "react-range";

interface LoanAmountProps {
	maxLoan: number;
	currentValue: number;
	onAmountChange(amount: number): void;
}

const LoanAmount: React.FC<LoanAmountProps> = ({
	maxLoan,
	currentValue,
	onAmountChange,
}) => {
	const [values, setValues] = useState([currentValue]);
	const onValueChange = (vals: number[]) => {
		setValues(vals);
		onAmountChange(vals[0]);
	};
	return (
		<div className="mt-4 overflow-hidden">
			<h6 className="text-[#0D0D0D]  mb-2 flex items-center justify-between">
				Loan Amount
				<small className="text-[14px] font-[400] border border-[rgba(13, 13, 13, 0.15)] p-3 py-1 bg-white">
					€{values[0]}
				</small>
			</h6>
			<Range
				values={values}
				step={1000}
				min={0}
				max={maxLoan}
				onChange={value => onValueChange(value)}
				renderTrack={({ props, children }) => (
					<div
						className="h-[35px] flex w-full]"
						onMouseDown={props.onMouseDown}
						onTouchStart={props.onTouchStart}
					>
						<div
							ref={props.ref}
							style={{
								height: "5px",
								width: "100%",
								background: getTrackBackground({
									values,
									colors: ["#08A742", "rgba(13, 13, 13, 0.15)"],
									min: 0,
									max: maxLoan,
								}),
								alignSelf: "center",
							}}
						>
							{children}
						</div>
					</div>
				)}
				renderThumb={({ props }) => (
					<div {...props}>
						<div className="h-[25px] w-[25px] bg-[#08A742] rounded-full" />
					</div>
				)}
			/>
		</div>
	);
};

export default LoanAmount;
