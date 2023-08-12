import MeasureSkeleton from "@/components/common/loader/measure-skeleton";
import { DropDownDto } from "@services/common.dto";
import {
	FilterParamDto,
	GrantGroup,
	GrantItems,
	GrantItemsDto,
} from "@services/grant-calculator/grant-option.output.dto";
import { EnumGrantValueType } from "@services/grant-calculator/grant-value.enum";
import { Utils } from "@utils/index";
import { Dispatch, useState } from "react";
import { Range, getTrackBackground } from "react-range";

interface GrantsCalculatorProps {
	grantOptions: Array<DropDownDto>;
	houseTypes: Array<DropDownDto>;
	onFilterChanged(params: FilterParamDto): void;
	grantItemsState?: GrantItemsDto | null;
	setGrantItemsState: Dispatch<
		React.SetStateAction<GrantItemsDto | null | undefined>
	>;
	filterParam: FilterParamDto;
	setFilterParamState: Dispatch<React.SetStateAction<FilterParamDto | null>>;
	isLoading: boolean;
	openCRform?(): void;
}

const GrantsCalculator: React.FC<GrantsCalculatorProps> = ({
	grantOptions,
	houseTypes,
	grantItemsState,
	onFilterChanged,
	setGrantItemsState,
	filterParam,
	setFilterParamState,
	isLoading,
	openCRform,
}) => {
	const [values, setValues] = useState([1]);
	const onValueChange = (vals: number[]) => {
		setValues(vals);
		updateFilterState("yearBuiltRange", vals[0]);
	};

	const [calculatedGrantTotal, setCalculatedGrantTotal] = useState<
		number | string | null
	>(null);

	const onFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		updateFilterState(event.target.name, Number(event.target.value));
	};

	const updateFilterState = (name: string, value: number) => {
		setCalculatedGrantTotal(null);
		setFilterParamState({
			...filterParam,
			[name]: value,
		});
	};

	const onItemChanged = (
		group: GrantGroup,
		item: GrantItems,
		e: any = null
	) => {
		let totalGrant = 0;
		const updatedGroups = grantItemsState?.grantGroups.map(gr => {
			if (gr.groupId === group.groupId) {
				gr.grantItems = gr.grantItems.map(itm => {
					itm.isDefault = false;
					if (!e && item.itemId && itm.itemId === item.itemId) {
						itm.isDefault = true;
					} else if (e) {
						itm.isDefault = e.target.checked;
					}
					return itm;
				});
			}
			totalGrant = gr.grantItems.reduce(
				(acc, itm) => acc + (itm.isDefault ? Number(itm.itemValue) : 0),
				totalGrant
			);
			return gr;
		});
		setCalculatedGrantTotal(totalGrant);
		const newItems = { ...grantItemsState, grantGroups: updatedGroups };
		setGrantItemsState(newItems as GrantItemsDto);
	};

	return (
		<div className="grants-calculator pt-[50px] md:py-[90px]">
			<div className="container mx-auto md:px-[16px]">
				<div className="title text-center mb-[40px] lg:mb-[90px] px-[16px] md:px-0">
					<h1>Compare Your Options</h1>
					<p className="md:text-[21px] leading-[30px] md:px-[20px]">
						There are a number of grant options available for you to choose
						from. Whether you wish to avail of a One Stop Shop Service to
						complete all the upgrades together or choose an Individual Energy
						Upgrade grant to allow you to complete the works over time, the
						choice is up to you. Simply select the grant option you wish to
						choose along with your house type and age, to find out how much you
						can save.
					</p>
				</div>
				<div className="grants-calculator-wrap">
					<div className="gc-form">
						<h2>SEAI Grants Calculator</h2>

						<div className="grid grid-cols-6 gap-6">
							<div className="col-span-6 md:col-span-3">
								<div className="form-group mb-6">
									<label className="form-label text-white !font-[600]">
										Choose grants option
									</label>
									<select
										name="grantOptionId"
										onChange={onFilterChange}
										value={filterParam.grantOptionId}
										className="form-select white"
									>
										{grantOptions.map(x => (
											<option key={x.id} value={x.id}>
												{x.name}
											</option>
										))}
									</select>
								</div>
								<div className="form-group mb-6">
									<label className="form-label text-white !font-[600]">
										Choose House Type
									</label>
									<select
										name="houseTypeId"
										onChange={onFilterChange}
										value={filterParam.houseTypeId}
										className="form-select white"
									>
										{houseTypes.map(x => (
											<option key={x.id} value={x.id}>
												{x.name}
											</option>
										))}
									</select>
								</div>
								<div className="form-group">
									<label className="form-label text-white !font-[600]">
										Choose Year Built
									</label>
									<ul className="rang-lavel">
										<li>Pre 2011</li>
										<li>Pre 2021</li>
									</ul>

									<Range
										step={1}
										min={1}
										max={2}
										values={values}
										onChange={value => onValueChange(value)}
										renderTrack={({ props, children }) => (
											<div
												className="h-[35px] flex w-full] ml-3"
												onMouseDown={props.onMouseDown}
												onTouchStart={props.onTouchStart}
											>
												<div
													ref={props.ref}
													style={{
														height: "4px",
														width: "100%",
														background: getTrackBackground({
															values,
															colors: ["#fff", "rgba(8, 168, 255, 0.5)"],
															min: 1,
															max: 2,
														}),
														alignSelf: "center",
													}}
												>
													{children}
												</div>
											</div>
										)}
										renderThumb={({ props }) => (
											<div {...props} className="outline-none shadow-none">
												<div className="h-[25px] w-[25px] bg-white rounded-full" />
											</div>
										)}
									/>
									<h6>*Based on order history estimate price may vary</h6>
								</div>
							</div>
							<div className="col-span-6 md:col-span-3 hidden md:flex items-center justify-center md:pl-[60px]">
								<div className="grant-available">
									<h6>Maximum Grant Available</h6>
									{!grantItemsState && <h2>-</h2>}
									{grantItemsState &&
										grantItemsState.maximumAvailableGrantValueType ==
											EnumGrantValueType.Currency && (
											<h2>
												€
												{Utils.numberWithCommas(
													grantItemsState.maximumAvailableGrantValue
												)}
											</h2>
										)}
									{grantItemsState &&
										grantItemsState.maximumAvailableGrantValueType ==
											EnumGrantValueType.Text && (
											<h2>{grantItemsState.maximumAvailableGrantValue}</h2>
										)}
									<button
										className="btn btn-white secondary-hover"
										onClick={openCRform}
									>
										Request More Information
									</button>
								</div>
							</div>
						</div>
					</div>

					{!isLoading ? (
						<div className="grand-table">
							{grantItemsState?.grantGroups ? (
								<div className="table-responsive">
									<table className="table-warp">
										<thead>
											<tr>
												<th className="md:w-full">
													<h4>Grant Name</h4>
												</th>
												<th colSpan={2}>
													<h6 className="title-right-heading">
														{
															houseTypes.find(
																x => x.id == filterParam.houseTypeId
															)?.name
														}
													</h6>
												</th>
											</tr>
										</thead>
										<tbody>
											{grantItemsState.grantGroups.map(group => (
												<tr key={group.groupId}>
													<td colSpan={3}>
														<table className="table">
															<tbody>
																<tr className="table-heading-row">
																	<td className="table-heading" colSpan={3}>
																		<div className="flex w-full items-center">
																			<b>{group.groupName}</b>
																			<span className="icon tooltip">
																				<svg
																					height="14"
																					viewBox="0 0 18 17"
																					fillOpacity="0.4"
																					className="ml-1"
																				>
																					<use href="/images/sprite.svg#svg-info"></use>
																				</svg>
																				<div className="tooltiptext">
																					{group.groupDescription}
																				</div>
																			</span>
																		</div>
																	</td>
																	{group.grantItems.length == 1 && (
																		<td width="25%">
																			{group.grantItems[0].itemValueType ==
																			EnumGrantValueType.Currency
																				? "€" +
																				  Utils.numberWithCommas(
																						group.grantItems[0].itemValue
																				  )
																				: group.grantItems[0].itemValue}
																		</td>
																	)}
																	{group.grantItems.length == 1 && (
																		<td width="15%" className="set-width">
																			<label className="app-form--checkbox !p-0 !top-[-2px]">
																				<input
																					className="checkbox"
																					type="checkbox"
																					name={"check_" + group.groupId}
																					defaultChecked={
																						group.grantItems[0].isDefault
																					}
																					// checked={group.grantItems[0].isDefault}
																					onChange={e =>
																						onItemChanged(
																							group,
																							group.grantItems[0],
																							e
																						)
																					}
																				/>
																				<span className="text-center">
																					<svg
																						width="10"
																						viewBox="0 0 8 7"
																						fill="currentColor"
																					>
																						<use href="/images/sprite.svg#svg-check"></use>
																					</svg>
																				</span>
																			</label>
																		</td>
																	)}
																</tr>
																{group.grantItems.length > 1 &&
																	group.grantItems.map(item => (
																		<tr key={group.groupId + "_" + item.itemId}>
																			<td width="60%">{item.itemName}</td>
																			{item.itemValueType ==
																				EnumGrantValueType.Currency && (
																				<td width="25%">
																					€
																					{Utils.numberWithCommas(
																						item.itemValue
																					)}
																				</td>
																			)}
																			{item.itemValueType ==
																				EnumGrantValueType.Text && (
																				<td width="25%">{item.itemValue}</td>
																			)}
																			<td width="20%">
																				<label className="app-form--radio !ml-[5px]">
																					<input
																						type="radio"
																						name={"item_" + group.groupId}
																						defaultChecked={item.isDefault}
																						// checked={item.isDefault}
																						onChange={() =>
																							onItemChanged(group, item)
																						}
																						hidden
																					/>
																					<span className="!border-[#204971] !top-[-13px]"></span>
																				</label>
																			</td>
																		</tr>
																	))}
															</tbody>
														</table>
													</td>
												</tr>
											))}
										</tbody>
									</table>

									<div
										className="revert-original"
										onClick={() => {
											setCalculatedGrantTotal(null);
											onFilterChanged(filterParam);
										}}
									>
										<span>Revert to Original</span>
									</div>
								</div>
							) : (
								<div>
									<h3>No Item Found</h3>
								</div>
							)}
						</div>
					) : (
						<div className="grand-table">
							<MeasureSkeleton />
						</div>
					)}

					<div className="gc-form gc-form-bottom">
						<div className="grid grid-cols-6 gap-6">
							<div className="col-span-6 md:col-span-3">
								<div className="grant-available !text-left md:pt-[15px]">
									<h6>Maximum Grant Available</h6>
									<p>Based on Your Selection</p>
								</div>
							</div>
							<div className="col-span-6 md:col-span-3">
								<div className="grant-available lg:pl-[80px]">
									{!grantItemsState && <h2 style={{ paddingTop: "0" }}>-</h2>}
									{grantItemsState &&
										grantItemsState.maximumAvailableGrantValueType ==
											EnumGrantValueType.Currency && (
											<h2 style={{ paddingTop: "0" }}>
												€
												{calculatedGrantTotal == null
													? Utils.numberWithCommas(
															grantItemsState.maximumAvailableGrantValue
													  )
													: Utils.numberWithCommas(calculatedGrantTotal)}
											</h2>
										)}
									{grantItemsState &&
										grantItemsState.maximumAvailableGrantValueType ==
											EnumGrantValueType.Text && (
											<h2>{grantItemsState.maximumAvailableGrantValue}</h2>
										)}
									<button
										className="btn btn-white secondary-hover"
										onClick={openCRform}
									>
										Request More Information
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GrantsCalculator;
