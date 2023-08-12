import { HeaHomeDetailDto } from "@services/hea/dto/hea-home-detail.dto";
import { _HeaHomeDetailStoreKey } from "@services/hea/hea.service";
import { EncodeingUtil } from "@utils/encoading-util";
import { StoreUtil } from "@utils/store-util";
import { useFormikContext } from "formik";
import { useEffect } from "react";

const PopulateHeaHomeDetailStoreValue = () => {
    const { setFieldValue } = useFormikContext();
    useEffect(() => {
        if (StoreUtil.isExist(_HeaHomeDetailStoreKey)) {
            const homeDetails = JSON.parse(
                EncodeingUtil.decodeBase64(
                    StoreUtil.getByKey(_HeaHomeDetailStoreKey) || ""
                )
            ) as HeaHomeDetailDto;

            Object.keys(homeDetails).forEach(key => {
                setFieldValue(key, homeDetails[key as keyof HeaHomeDetailDto]);
            })
        }
    }, [setFieldValue]);


    return null;
}

export default PopulateHeaHomeDetailStoreValue;