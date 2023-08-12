import { ContactDetailInputDto } from "@services/common.dto";
import { _HeaContactDetailStoreKey } from "@services/hea/hea.service";
import { _HeeContactDetailStoreKey } from "@services/hee/hee.service";
import { EncodeingUtil } from "@utils/encoading-util";
import { StoreUtil } from "@utils/store-util";
import { useFormikContext } from "formik";
import { useEffect } from "react";

interface RestoreDetailProps {
    restoreFor: string
}

const RestoreDetail = ({ restoreFor }: RestoreDetailProps) => {
    const { setFieldValue } = useFormikContext();
    useEffect(() => {
        let stoteKey = restoreFor == 'hee' ? _HeeContactDetailStoreKey : _HeaContactDetailStoreKey;
        if (StoreUtil.isExist(stoteKey)) {
            const savedData = JSON.parse(
                EncodeingUtil.decodeBase64(
                    StoreUtil.getByKey(stoteKey) || ""
                )
            ) as ContactDetailInputDto;

            Object.keys(savedData).forEach(key => {
                setFieldValue(key, savedData[key as keyof ContactDetailInputDto]);
            })
        }
    }, [setFieldValue, restoreFor]);

    return null;
}

export default RestoreDetail;