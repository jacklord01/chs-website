import React from "react";

interface MeasureSkeletonProps {}

const MeasureSkeleton: React.FC<MeasureSkeletonProps> = () => {
	return (
		<div className="table-loder">
			<h4 className="measure-upgrade-heding">
				<span className="h-[16px] w-[40%] bg-[#CCCED3]"></span>
			</h4>
			<ul className="measure-upgrade-list">
				<li>
					<span className="h-[16px] w-[50%] bg-[#CCCED3]"></span>
					<span className="h-[16px] w-[20%] bg-[#CCCED3]"></span>
				</li>
			</ul>
		</div>
	);
};

export default MeasureSkeleton;
