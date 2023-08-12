import { ContactDetailInputDto } from "@services/common.dto";
import heeService, {
  _HeeContactDetailStoreKey,
} from "@services/hee/hee.service";
import { EnumRequestOrigin } from "@services/utility/types/request-origin.enum";
import { EncodeingUtil } from "@utils/encoading-util";
import { StoreUtil } from "@utils/store-util";
import React, { useState } from "react";
import MobileVerification from "../common/mobile-verification";
import ActionButtons from "./action-buttons";

interface CompleteProps {
  changeTab(nextStep: number): void;
}

const Complete: React.FC<CompleteProps> = ({ changeTab }: CompleteProps) => {
  const contactDetails = JSON.parse(
    EncodeingUtil.decodeBase64(
      StoreUtil.getByKey(_HeeContactDetailStoreKey) || ""
    )
  ) as ContactDetailInputDto;

  const [phone, setPhone] = useState<string>(contactDetails.phone);
  const [completed, setCompleted] = useState<boolean>(false);

  const submitHeaRequest = async (verificationGuId: string) => {
    setCompleted(true);
    await heeService.submitHeeInformation(contactDetails, verificationGuId);
  };

  return (
    <div className="app-started md:pt-[100px] pt-[70px]">
      <div className="container mx-auto px-[16px] text-center">
        {!completed ? (
          <>
            <MobileVerification
              phone={phone}
              requestOrigin={EnumRequestOrigin.Hee}
              onOtpVerified={submitHeaRequest}
            />
            <div className="xl:block button-group">
              <ActionButtons
                currentStepIndex={4}
                label_1={"Back"}
                label_2={"Next"}
                showNext={false}
                showBack={true}
                onButtonClick={() => {
                  changeTab(3);
                }}
              />
            </div>
          </>
        ) : (
          <>
            <h1 className="text-[#204971] pb-[30px]">
              Thank you for your enquiry
            </h1>
            <p>We will be in touch shortly</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Complete;
