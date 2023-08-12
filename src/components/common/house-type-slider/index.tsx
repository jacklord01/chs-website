import AppConst from "@config/app.const";
import sliderConfig from "@config/slider-config";
import { HouseTypeDto } from "@services/fuel-cost/dto/inti-data.output.dto";
import Image from "next/image";
import React from "react";

import Slider from "react-slick";
import SliderSkeleton from "../loader";

interface HouseTypeProps {
  selectedHouse: number;
  isLoading?: boolean;
  houseTypes: Array<HouseTypeDto>;
  onHouseTypeSelect(
    id: number,
    houseTypeName: string,
    houseThumbnail: string,
    estimatedFloor: number
  ): void;
}

const HouseTypeSlider: React.FC<HouseTypeProps> = ({
  selectedHouse,
  isLoading,
  houseTypes,
  onHouseTypeSelect,
}) => {
  const houseTypeSliderSetting = {
    ...sliderConfig,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
  };
  return (
    <>
      {isLoading ? (
        <SliderSkeleton />
      ) : (
        <div className="checkbox-group  mt-4">
          {houseTypes.length && (
            <Slider {...houseTypeSliderSetting}>
              {houseTypes.map((x) => (
                <div className="checkbox-item !w-auto" key={x.id}>
                  <input
                    type="radio"
                    id={"houseType_" + x.id}
                    name="housType"
                    defaultChecked={selectedHouse == x.id}
                    value={x.id}
                    onChange={() =>
                      onHouseTypeSelect(
                        x.id,
                        x.houseTypeName,
                        x.thumbnailPath,
                        x.floorArea
                      )
                    }
                    hidden
                  />
                  <label
                    htmlFor={"houseType_" + x.id}
                    className="custom-checkbox"
                  >
                    <span className="checkbox-content w-full">
                      <span className="w-[128px] h-[58px] m-auto mb-3 block overflow-hidden">
                        <Image
                          src={AppConst.imageBaseUrl + x.thumbnailPath}
                          className="!w-full !h-full"
                          alt="House Type"
                          loading="lazy"
                          width="100"
                          height="100"
                        />
                      </span>
                      {x.houseTypeName}
                    </span>
                  </label>
                  <span className="check-icon">
                    <svg width="12" viewBox="0 0 8 7" fill="currentColor">
                      <use href="/images/sprite.svg#svg-check"></use>
                    </svg>
                  </span>
                </div>
              ))}
            </Slider>
          )}
        </div>
      )}
    </>
  );
};

const Arrow = ({
  onClick,
  direction,
}: {
  onClick?(): void;
  direction: string;
}) => {
  return (
    <div
      className="absolute w-[55px] h-full top-0 z-10 flex items-center slider-arrow justify-center cursor-pointer"
      onClick={onClick}
      style={
        direction == "right"
          ? {
              right: "0",
              justifyContent: "end",
              background:
                "linear-gradient(90deg, rgba(243, 243, 243, 0) 0%, #f3f3f3 69.63%)",
            }
          : { right: "auto" }
      }
    >
      <div className="h-[30px] w-[30px] rounded-full text-white bg-[#08A8FF] flex items-center justify-center">
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use href={"/images/sprite.svg#svg-slider-" + direction}></use>
        </svg>
      </div>
    </div>
  );
};

export default HouseTypeSlider;
