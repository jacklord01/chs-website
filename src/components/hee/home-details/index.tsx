import { DropDownDto } from "@services/common.dto";
import { InitDataOutputDto } from "@services/fuel-cost/dto/inti-data.output.dto";
import fuleCostService from "@services/fuel-cost/fule-cost.service";
import { HomeDetailDto } from "@services/hee/dto/home-detail.input.dto";
import { YearBuiltOutputDto } from "@services/hee/dto/year-built.output";
import heeService, {
  _HeeEstimatedMeasureStoreKey,
  _HeeHomeDetailStoreKey,
} from "@services/hee/hee.service";
import { EncodeingUtil } from "@utils/encoading-util";
import { StoreUtil } from "@utils/store-util";
import React, { useEffect, useState } from "react";
import HouseDetailForm from "./house-detail.form";

interface HomeDetailsProps {
  changeTab(nextStep: number): void;
}

const HomeDetails: React.FC<HomeDetailsProps> = ({
  changeTab,
}: HomeDetailsProps) => {
  const [intialDropdownData, setIntialDropdownData] =
    useState<InitDataOutputDto>({
      berChsList: [],
      houseTypeChsList: [],
      primaryHeatSourcList: [],
    });

  const [yearBuildOptions, setYearBuildOptions] = useState<
    YearBuiltOutputDto[]
  >([]);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchIntialDropDownData = async () => {
      setLoading(true);
      const data = await Promise.all([
        fuleCostService.getIntialDropDownData(),
        heeService.getYearBuilt(),
      ]);
      setLoading(false);
      setIntialDropdownData(data[0]);
      setYearBuildOptions(data[1]);
    };

    fetchIntialDropDownData();
  }, []);

  const onFormSubmitted = (data: HomeDetailDto) => {
    StoreUtil.removeByKey(_HeeEstimatedMeasureStoreKey);
    StoreUtil.saveByKey(
      _HeeHomeDetailStoreKey,
      EncodeingUtil.encodeBase64String(JSON.stringify(data))
    );
    changeTab(2);
  };

  return (
    <div className="app-started overflow-hidden">
      <div className="container mx-auto px-[16px]">
        <h3 className="text-[#204971] pb-[16px]">What is the house type?</h3>
        <p>Select your house type and number of floors / storeys.</p>
        <HouseDetailForm
          isLoading={loading}
          houseTypeChsList={intialDropdownData.houseTypeChsList}
          yearBuildOptions={yearBuildOptions}
          primaryHeatSourcList={intialDropdownData.primaryHeatSourcList}
          berChsList={intialDropdownData.berChsList}
          onSubmitDetailForm={onFormSubmitted}
        />
      </div>
    </div>
  );
};

export default HomeDetails;
