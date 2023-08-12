import React from "react";

interface SliderSkeletonProps {
	itemCount?: number;
}

const SliderSkeleton: React.FC<SliderSkeletonProps> = ({
	itemCount = 6,
}: SliderSkeletonProps) => {
	return (
		<div className="house-loder space-x-8 mt-3">
			{[...new Array(itemCount)].map((x, i) => (
				<div
					className="skeleton"
					key={i}
					style={itemCount === 4 ? { height: "245px" } : {}}
				>
					<span className="h-[60px] w-[70px] bg-[#CCCED3] mb-4"></span>
					<span className="h-[16px] w-[100px] bg-[#CCCED3]"></span>
				</div>
			))}
		</div>
	);
};

export default SliderSkeleton;
