import { HeeMeasureOutputDto } from "@services/hee/dto/hee.measure.dto";
import { Euro } from "@utils/intl-util";

interface SingleSelectCategoryProps {
	measureCategory: HeeMeasureOutputDto;
	onItemSelected(measureId: number): void;
	onClearSelection(): void;
}

const SingleSelectCategory: React.FC<SingleSelectCategoryProps> = ({
	measureCategory,
	onItemSelected,
	onClearSelection,
}: SingleSelectCategoryProps) => {
	return (
		<div
			key={measureCategory.measureCategoryId}
			className="measure-upgrade-group"
		>
			<h4 className="measure-upgrade-heding flex items-center justify-between text-[#0D0D0D]">
				<span className="flex items-center">
					{measureCategory.measureCategoryName}
					<span className="icon tooltip">
						<svg
							width="18"
							height="17"
							viewBox="0 0 18 17"
							fill="#0D0D0D"
							fillOpacity="0.4"
							className="ml-1"
						>
							<use href="/images/sprite.svg#svg-info"></use>
						</svg>
						<div className="tooltiptext">
							{measureCategory.categoryTooltipMessage}
						</div>
					</span>
				</span>
				<span
					className="bg-white p-1.5 text-[#204971] cursor-pointer hover:text-white hover:bg-[#204971] transition-all"
					onClick={onClearSelection}
				>
					<svg
						width="14"
						height="14"
						viewBox="0 0 14 14"
						fill="currentColor"
					>
						<use href="/images/sprite.svg#svg-reload"></use>
					</svg>
				</span>
			</h4>
			<ul className="measure-upgrade-list">
				{measureCategory.measures.map((m, index) => (
					<li key={index}>
						<label className="app-form--radio">
							<input
								type="radio"
								name={
									"measure_" +
									measureCategory.measureCategoryId
								}
								checked={m.selected == true}
								onChange={() =>
									onItemSelected(m.fkHeeMeasureId)
								}
								hidden
							/>
							<span className="!border-[#204971]"></span>
							<p className="app-form--checkbox-text !text-[#0D0D0D]">
								{m.measureName}
								{/* {m.selected ? "Yes" : "No"} */}
							</p>
						</label>
						<span className="text-[#0D0D0D] pl-4">
							{Euro.format(m.totalMeasure)}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SingleSelectCategory;
