import React from "react";

interface TechnicalInfoProps {}

const TechnicalInfo: React.FC<TechnicalInfoProps> = () => {
	return (
		<div className="app-technical-info bg-[#F3F3F3]">
			<div className="container mx-auto px-[16px]">
				<div className="app-technical-info-inner bg-white max-w-[970px] mx-auto col-center-2 pt-[50px] pb-[50px] px-[50px]">
					<p>
						Your building fabric refers to structural materials, insulation,
						finishes, etc., that enclose the interior of your home, separating
						the internal from the external.
					</p>
				</div>
			</div>
		</div>
	);
};

export default TechnicalInfo;
