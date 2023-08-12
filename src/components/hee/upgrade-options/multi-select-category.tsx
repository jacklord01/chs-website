import MeasureSkeleton from "@/components/common/loader/measure-skeleton";
import { HeeMeasureOutputDto } from "@services/hee/dto/hee.measure.dto";
import { Euro, USDollar } from "@utils/intl-util";

interface MultiSelectCategoryProps {
	measureCategory: HeeMeasureOutputDto;
	onItemSelected(
		measureId: number,
		e: React.ChangeEvent<HTMLInputElement>
	): void;
}

const MultiSelectCategory: React.FC<MultiSelectCategoryProps> = ({
	measureCategory,
	onItemSelected,
}: MultiSelectCategoryProps) => {
	const onChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
		onItemSelected(+e.currentTarget.value, e);
	};
	return (
		<div
			key={measureCategory.measureCategoryId}
			className="measure-upgrade-group"
		>
			<h4 className="measure-upgrade-heding flex items-center text-[#0D0D0D]">
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
			</h4>
			<ul className="measure-upgrade-list">
				{measureCategory.measures.map((m, index) => (
					<li key={m.fkHeeMeasureId + "_" + index}>
						<label className="app-form--checkbox">
							<input
								className="checkbox"
								type="checkbox"
								name={"measure_" + m.fkHeeMeasureId}
								value={m.fkHeeMeasureId}
								defaultChecked={m.selected}
								onChange={onChecked}
							/>
							<span className="text-center">
								<svg width="10" viewBox="0 0 8 7" fill="currentColor">
									<use href="/images/sprite.svg#svg-check"></use>
								</svg>
							</span>
							<p className="app-form--checkbox-text !text-[#0D0D0D]">
								{m.measureName}
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

export default MultiSelectCategory;
