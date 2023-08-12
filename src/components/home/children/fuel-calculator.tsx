import AppConst from "@config/app.const";
import {
	HeatSource,
	InitDataOutputDto,
} from "@services/fuel-cost/dto/inti-data.output.dto";
import fuleCostService from "@services/fuel-cost/fule-cost.service";
import { DateTimeUtil } from "@utils/datetime-util";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

interface FuelCalculatorProps {
	initialProps: InitDataOutputDto;
	defaultValues: FormValue;
}

interface FormValue {
	houseTypeId: number;
	floorArea: number;
	primaryHeatingSourceId: number;
	centralHeatingTypeId: number;
	heatSourceId: number;
	yearBuilt: number;
	currentBER: number;
}

const FuelCalculator: React.FC<FuelCalculatorProps> = ({
	initialProps,
	defaultValues,
}) => {
	const FuelCostFormSchema = Yup.object().shape({
		houseTypeId: Yup.number().min(1),
		floorArea: Yup.number().min(1),
		primaryHeatingSourceId: Yup.number().min(1),
		centralHeatingTypeId: Yup.number().min(1),
		heatSourceId: Yup.number().min(1),
		yearBuilt: Yup.number().min(1),
		currentBER: Yup.number().min(1),
	});

	const initialValues: FormValue = { ...defaultValues };
	const [heatSources, setHeatSources] = useState<Array<HeatSource>>(
		initialProps.primaryHeatSourcList.find(x => x.isDefault)?.heatSources || []
	);
	const [years, setYears] = useState<Array<number>>([2005]);

	const [berOutput, setBerOutput] = useState<{
		berMedienValue: number;
		pricePerKwh: number;
	}>({
		berMedienValue: 0,
		pricePerKwh: 0,
	});
	const [calculatedCost, setCalculatedCost] = useState<number>(0);

	useEffect(() => {
		const fetchData = async () => {
			const berApiOutput =
				await fuleCostService.getCalculatedBerWithPerKWHPrice(
					defaultValues.yearBuilt,
					defaultValues.primaryHeatingSourceId,
					defaultValues.centralHeatingTypeId,
					defaultValues.heatSourceId,
					defaultValues.houseTypeId
				);
			setBerOutput(prevVal => ({
				...prevVal,
				berMedienValue: berApiOutput.berMedienValue,
				pricePerKwh: berApiOutput.pricePerKwh,
			}));
			showCalculatedValue(
				defaultValues.floorArea,
				berApiOutput.berMedienValue,
				berApiOutput.pricePerKwh
			);
		};

		// Call the fetchData function after 2 seconds
		const timer = setTimeout(() => {
			fetchData();
		}, 2000);

		return () => {
			// Clear the timer if the component unmounts before 2 seconds
			clearTimeout(timer);
		};
	}, [defaultValues]);

	const getCalculatedBerForFuelCost = async (values: FormValue) => {
		if (values.heatSourceId) {
			const {
				yearBuilt,
				primaryHeatingSourceId,
				centralHeatingTypeId,
				heatSourceId,
				houseTypeId,
			} = values;
			try {
				const berApiOutput =
					await fuleCostService.getCalculatedBerWithPerKWHPrice(
						yearBuilt,
						primaryHeatingSourceId,
						centralHeatingTypeId,
						heatSourceId,
						houseTypeId
					);

				setBerOutput(prevVal => ({
					...prevVal,
					berMedienValue: berApiOutput.berMedienValue,
					pricePerKwh: berApiOutput.pricePerKwh,
				}));
				showCalculatedValue(
					values.floorArea,
					berApiOutput.berMedienValue,
					berApiOutput.pricePerKwh
				);
				return berApiOutput.berId;
			} catch (error) {
				setBerOutput(prevVal => ({
					...prevVal,
					berMedienValue: 0,
					pricePerKwh: 0,
				}));
				showCalculatedValue(0, 0, 0);
			}
		}
	};

	const showCalculatedValue = (
		floorArea: number = 0,
		berMedianValue: number = 0,
		pricePerKWH: number = 0
	) => {
		const fuelCost =
			Number(floorArea.toFixed(2)) * berMedianValue * pricePerKWH;
		setCalculatedCost(fuelCost);
	};

	return (
		<>
			<div className="app-calculator pt-[60px] sm:pb-[60px] pb-0 relative">
				<Image
					src={AppConst.assetsBaseUrl + "calculator-bg.webp"}
					fill
					loading="lazy"
					alt="Fuel Calculator"
					sizes="(max-width: 1920px) 100vw"
					className="object-fill"
				/>
				<div className="container mx-auto px-[16px]  relative">
					<div className="lg:flex flex-row  lg:items-center">
						<div className="lg:basis-1/2 lg:pb-0 pb-[50px]">
							<div className="app-calculator-text">
								<h1>
									How Much <br />
									You Are Spending on Fuel?
								</h1>
								<p>
									Simply enter some basic details to estimate your annual
									running costs to heat your home.
								</p>
								<button
									type="button"
									role="button"
									className="btn btn-white secondary-hover"
								>
									See How Much You Can Save
								</button>
							</div>
						</div>
						<div className="lg:basis-1/2 sm:mx-0 mx-[-16px]">
							<div className="calculator-box ">
								<Formik
									initialValues={initialValues}
									validationSchema={FuelCostFormSchema}
									onSubmit={() => console.log("")}
								>
									{({ values, handleChange, setFieldValue }) => (
										<Form>
											<div className="grid grid-cols-2 gap-[18px]">
												<div className="col-span-2">
													<label htmlFor="houseTypeId" className="form-label">
														House Type
													</label>
													<Field
														as="select"
														className="form-select white"
														name="houseTypeId"
														onChange={(
															event: React.ChangeEvent<HTMLSelectElement>
														) => {
															const houseTypeId = +event.target.value;
															const floorArea =
																initialProps.houseTypeChsList.find(
																	x => x.id === houseTypeId
																)?.floorArea || 0;
															setFieldValue("houseTypeId", houseTypeId);
															setFieldValue("floorArea", floorArea);

															const output = getCalculatedBerForFuelCost({
																...values,
																houseTypeId: houseTypeId,
																floorArea: floorArea,
															});

															output.then(betId =>
																setFieldValue("currentBER", betId)
															);
														}}
													>
														<option disabled defaultValue={0} value="0">
															Select House Type
														</option>
														{initialProps.houseTypeChsList.map(x => (
															<option key={x.id} value={x.id}>
																{x.houseTypeName}
															</option>
														))}
													</Field>
												</div>
												<div className="sm:col-span-1 col-span-2">
													<label htmlFor="yearBuilt" className="form-label">
														Year Built
													</label>
													<Field
														as="select"
														className="form-select white"
														name="yearBuilt"
														onTouchStart={() => {
															setYears(
																DateTimeUtil.getListOfYearsFromGivenYear()
															);
														}}
														onFocus={() => {
															setYears(
																DateTimeUtil.getListOfYearsFromGivenYear()
															);
														}}
														onChange={(
															event: React.ChangeEvent<HTMLSelectElement>
														) => {
															const year = +event.target.value;
															setFieldValue("yearBuilt", year);

															const output = getCalculatedBerForFuelCost({
																...values,
																yearBuilt: year,
															});
															output.then(betId =>
																setFieldValue("currentBER", betId)
															);
														}}
													>
														<option disabled defaultValue={0} value="0">
															Select Year Built
														</option>
														{years.map(year => (
															<option key={year} value={year}>
																{" "}
																{year}{" "}
															</option>
														))}
													</Field>
												</div>
												<div className="sm:col-span-1 col-span-2">
													<label htmlFor="floorArea" className="form-label">
														Floor Area
													</label>
													<div className="relative">
														<Field
															type="number"
															placeholder="Type here"
															name="floorArea"
															className="form-control white pr-[45px]"
															onChange={(
																event: React.ChangeEvent<HTMLInputElement>
															) => {
																const val = +event.target.value;
																setFieldValue("floorArea", val);
																showCalculatedValue(
																	val,
																	berOutput.berMedienValue,
																	berOutput.pricePerKwh
																);
															}}
														/>
														<span className="text-white absolute top-[12px] right-[16px]">
															m<sup>2</sup>
														</span>
													</div>
												</div>
												<div className="col-span-2">
													<label
														htmlFor="primaryHeatingSourceId"
														className="form-label"
													>
														Primary Heating System
													</label>
													<Field
														as="select"
														className="form-select white"
														name="primaryHeatingSourceId"
														onChange={(
															event: React.ChangeEvent<HTMLSelectElement>
														) => {
															const newId = +event.target.value;
															const primaryHeatingObj =
																initialProps.primaryHeatSourcList.find(
																	x => x.id === newId
																);
															const heatSources =
																primaryHeatingObj?.heatSources || [];
															setHeatSources(heatSources);

															setFieldValue("primaryHeatingSourceId", newId);
															setFieldValue("heatSourceId", 0);
															setFieldValue(
																"centralHeatingTypeId",
																primaryHeatingObj?.centralHeatingTypeId || 0
															);

															setBerOutput(prevVal => ({
																...prevVal,
																berMedienValue: 0,
																pricePerKwh: 0,
															}));
															showCalculatedValue(0, 0, 0);
														}}
													>
														<option disabled defaultValue={0} value="0">
															Select Primary Heating System
														</option>
														{initialProps.primaryHeatSourcList.map(x => (
															<option key={x.id} value={x.id}>
																{x.name}
															</option>
														))}
													</Field>
												</div>
												<div className="col-span-2">
													<label htmlFor="HeatSource" className="form-label">
														Heat Source
													</label>
													<Field
														as="select"
														className="form-select white"
														name="heatSourceId"
														onChange={(
															event: React.ChangeEvent<HTMLSelectElement>
														) => {
															const heatSourceId = +event.target.value;
															setFieldValue("heatSourceId", heatSourceId);

															const output = getCalculatedBerForFuelCost({
																...values,
																heatSourceId: heatSourceId,
															});

															output.then(betId =>
																setFieldValue("currentBER", betId)
															);
														}}
													>
														<option disabled defaultValue={0} value="0">
															Select Heat Source
														</option>
														{heatSources.map(x => (
															<option key={x.id} value={x.id}>
																{x.name}
															</option>
														))}
													</Field>
												</div>
												<div className="col-span-2">
													<label htmlFor="currentBER" className="form-label">
														Current BER
													</label>
													<Field
														as="select"
														className="form-select white"
														name="currentBER"
														onChange={(
															event: React.ChangeEvent<HTMLSelectElement>
														) => {
															const berId = +event.target.value;
															const berMedienValue =
																initialProps.berChsList.find(
																	x => x.id === berId
																)?.medianBerValue || 0;

															setFieldValue("currentBER", berId);
															showCalculatedValue(
																values.floorArea,
																berMedienValue,
																berOutput.pricePerKwh
															);
														}}
													>
														<option disabled defaultValue={0} value="0">
															Select Current BER
														</option>
														{initialProps.berChsList.map(x => (
															<option key={x.id} value={x.id}>
																{x.berName}
															</option>
														))}
													</Field>
												</div>
												<div className="col-span-2 form-total">
													<p className="pt-[16px] text-[21px]">
														Estimated Fuel Costs
													</p>
													<h2>€{calculatedCost.toFixed(2)}</h2>
													<p>
														<small className="italic">
															*Estimates are based on SEAI Fuel Cost Comparisons
															01 Oct, 2022
														</small>
													</p>
												</div>
											</div>
										</Form>
									)}
								</Formik>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default FuelCalculator;
