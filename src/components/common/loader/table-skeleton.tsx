import React from "react";

interface TableSkeletonProps {}

const TableSkeleton: React.FC<TableSkeletonProps> = () => {
	return (
		<tr className="table-loder">
			<td>
				<span className="h-[16px] w-full bg-[#CCCED3] mb-2"></span>
				<span className="h-[4px] w-full bg-[#CCCED3]"></span>
				<span className="h-[4px] w-full bg-[#CCCED3] my-1"></span>
				<span className="h-[4px] w-full bg-[#CCCED3]"></span>
			</td>
			<td>
				<span className="h-[16px] w-full bg-[#CCCED3] mb-2"></span>
			</td>
			<td>
				<span className="h-[16px] w-full bg-[#CCCED3] mb-2"></span>
			</td>
			<td>
				<span className="h-[16px] w-full bg-[#CCCED3] mb-2"></span>
			</td>
		</tr>
	);
};

export default TableSkeleton;
