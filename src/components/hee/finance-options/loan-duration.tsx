import React, { useState } from "react";
import { getTrackBackground, Range } from "react-range";

interface LoanDurationProps {
	maxTerm: number;
	currentValue: number;
	onTermChange(value: number): void;
}

const LoanDuration: React.FC<LoanDurationProps> = ({
	maxTerm,
	currentValue,
	onTermChange,
}) => {
	const [values, setValues] = useState([currentValue]);
	const onValueChange = (vals: number[]) => {
		setValues(vals);
		onTermChange(vals[0]);
	};
	return (
		<div className="mt-6 overflow-hidden">
			<h6 className="text-[#0D0D0D] mb-4">Loan Duration</h6>
			<Range
				values={values}
				step={1}
				min={0}
				max={maxTerm}
				onChange={values => onValueChange(values)}
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
									max: maxTerm,
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
						<h6
							className="flex absolute top-[-22px] text-[#08A8FF] font-[600] text-[14px]"
							style={currentValue > 2 ? { right: "0" } : { right: "auto" }}
						>
							{values[0]} <span className="ml-1">Years</span>
						</h6>
						<div className="h-[25px] w-[25px] bg-[#08A742] rounded-full" />
					</div>
				)}
			/>
		</div>
	);
};

export default LoanDuration;
