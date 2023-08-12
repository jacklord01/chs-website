import { HomeDetailDto } from "@services/hee/dto/home-detail.input.dto";
import { _HeeHomeDetailStoreKey } from "@services/hee/hee.service";
import { EncodeingUtil } from "@utils/encoading-util";
import { StoreUtil } from "@utils/store-util";
import { useFormikContext } from "formik";
import { useEffect } from "react";

const PopulateStoreValue = () => {
  const { setFieldValue } = useFormikContext();
  useEffect(() => {
    if (StoreUtil.isExist(_HeeHomeDetailStoreKey)) {
      const homeDetails = JSON.parse(
        EncodeingUtil.decodeBase64(
          StoreUtil.getByKey(_HeeHomeDetailStoreKey) || ""
        )
      ) as HomeDetailDto;

      Object.keys(homeDetails).forEach((key) => {
        setFieldValue(key, homeDetails[key as keyof HomeDetailDto]);
      });
    }
  }, [setFieldValue]);

  return null;
};

export default PopulateStoreValue;
