import { HouseTypeDto } from "@services/fuel-cost/dto/inti-data.output.dto";
import { HeaHomeDetailDto } from "@services/hea/dto/hea-home-detail.dto";
import {
  _HeaHomeDetailStoreKey,
  _HeaSurveyOptionStoreKey,
} from "@services/hea/hea.service";
import { _HeeHomeDetailStoreKey } from "@services/hee/hee.service";
import utilService from "@services/utility/util.service";
import { EncodeingUtil } from "@utils/encoading-util";
import { StoreUtil } from "@utils/store-util";
import React, { useEffect, useState } from "react";
import HeaHouseDetailForm from "./home-detail.form";

interface HomeDetailsProps {
  changeTab(nextStep: number): void;
}

const HomeDetails: React.FC<HomeDetailsProps> = ({
  changeTab,
}: HomeDetailsProps) => {
  const [houseTypes, setHouseTypes] = useState<Array<HouseTypeDto>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchHouseTypeList = async () => {
      setLoading(true);
      const output = await utilService.getHouseTypes();
      setLoading(false);
      if (output.length) {
        setHouseTypes(output);
      }
    };
    fetchHouseTypeList();
  }, []);

  const handleHomeDetailSubmission = (data: HeaHomeDetailDto) => {
    const houseInfo = houseTypes.find((x) => x.id == data.houseTypeId);
    StoreUtil.saveByKey(
      _HeaHomeDetailStoreKey,
      EncodeingUtil.encodeBase64String(
        JSON.stringify({
          ...data,
          houseTypeName: houseInfo?.houseTypeName,
          houseThumbnail: houseInfo?.thumbnailPath,
        })
      )
    );
    changeTab(2);
  };

  return (
    <div className="app-started overflow-hidden">
      <div className="container mx-auto px-[16px]">
        <h3 className="text-[#204971] pb-[16px]">What is the house type?</h3>
        <p onClick={() => changeTab(0)}>
          Select your house type and number of floors / storeys.
        </p>
        <HeaHouseDetailForm
          houseTypeChsList={houseTypes}
          isLoading={loading}
          onSubmitDetailForm={handleHomeDetailSubmission}
          onBackClick={() => changeTab(0)}
        />
      </div>
    </div>
  );
};

export default HomeDetails;
