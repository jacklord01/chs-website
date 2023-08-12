import SliderSkeleton from "@/components/common/loader";
import AppConst from "@config/app.const";
import { SurveyOptionOutputDto } from "@services/hea/dto/survey-option-output.dto";
import heaService from "@services/hea/hea.service";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import Slider from "react-slick";

interface SelectServiceProps {
	surveyOptions: Array<SurveyOptionOutputDto>;
	currentOption: number;
	selectedOption(id: number): void;
}

const SelectService: React.FC<SelectServiceProps> = ({
	surveyOptions,
	currentOption,
	selectedOption,
}: SelectServiceProps) => {
	const onOptionSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
		selectedOption(+event.currentTarget.value);
	};

	if (!surveyOptions.length) return <SliderSkeleton itemCount={4} />;

	return (
		<>
			<div className="checkbox-group my-4 slider-item-center">
				<Slider {...settings}>
					{surveyOptions.map(x => (
						<div className="checkbox-item !w-auto checkbox-item-xl" key={x.id}>
							<input
								type="radio"
								id={"service_" + x.id}
								name="surveyOption"
								value={x.id}
								defaultChecked={currentOption == x.id}
								onChange={onOptionSelected}
								hidden
							/>
							<label
								htmlFor={"service_" + x.id}
								className="custom-checkbox md:!w-[200px] xl:!w-[250px] md:!h-[190px] xl:!h-[245px]"
							>
								<span className="check-icon !right-auto left-[16px] !top-[16px]">
									<svg width="12" viewBox="0 0 8 7" fill="currentColor">
										<use href="/images/sprite.svg#svg-check"></use>
									</svg>
								</span>
								<span className="checkbox-content w-full">
									<span className="w-[85px] h-[90px] m-auto mb-7 block">
										<Image
											src={AppConst.imageBaseUrl + x.imagePath}
											className="w-full h-auto"
											alt={x.name}
											loading="lazy"
											width="100"
											height="100"
										/>
									</span>
									{x.name}
								</span>
							</label>

							<span className="icon absolute top-[16px] right-[16px]">
								<div className="tooltip left">
									<svg width="13" viewBox="0 0 18 17" fill="CurrentColor">
										<use href="/images/sprite.svg#svg-info"></use>
									</svg>
									{x.toolTip && <div className="tooltiptext">{x.toolTip}</div>}
								</div>
							</span>
						</div>
					))}
				</Slider>
			</div>
		</>
	);
};

const settings = {
	infinite: false,
	centerPadding: "58px",
	slidesToShow: 4,
	slidesToScroll: 4,
	speed: 500,
	arrows: false,
	autoplay: false,
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				centerPadding: "30px",
			},
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				centerPadding: "30px",
			},
		},
		{
			breakpoint: 539,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				centerPadding: "16px",
			},
		},
	],
};

export default SelectService;
