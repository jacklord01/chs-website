import heaService, {
  _HeaSurveyOptionStoreKey,
} from "@services/hea/hea.service";
import { EncodeingUtil } from "@utils/encoading-util";
import { StoreUtil } from "@utils/store-util";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ActionButtons from "../action-buttons";
import SelectService from "./select-service";
import { SurveyOptionOutputDto } from "@services/hea/dto/survey-option-output.dto";

interface StartedProps {
  changeTab(nextStep: number): void;
}

const Started: React.FC<StartedProps> = ({ changeTab }: StartedProps) => {
  const [surveyOptionId, setSurveyOptionId] = useState<number>(0);

  const [surveyOptions, setSurveyOptions] = useState<
    Array<SurveyOptionOutputDto>
  >([]);

  useEffect(() => {
    const fetchSurveyOptions = async () => {
      const output = await heaService.getSurveyOptions();
      if (output.length) {
        setSurveyOptions(output);

        if (StoreUtil.isExist(_HeaSurveyOptionStoreKey)) {
          const option = EncodeingUtil.decodeBase64(
            StoreUtil.getByKey(_HeaSurveyOptionStoreKey) || ""
          );
          if (option && !isNaN(+option) && +option > 0) {
            setSurveyOptionId(+option);
          }
        } else {
          const defaultOption = output.find((x) => x.isDefault);
          if (defaultOption) {
            setSurveyOptionId(defaultOption.id);
            StoreUtil.saveByKey(
              _HeaSurveyOptionStoreKey,
              EncodeingUtil.encodeBase64String(defaultOption.id.toString())
            );
          }
        }
      }
    };
    fetchSurveyOptions();
  }, []);

  const startAssessment = (nextStepIndex: number) => {
    toast.dismiss();
    if (surveyOptionId) {
      StoreUtil.saveByKey(
        _HeaSurveyOptionStoreKey,
        EncodeingUtil.encodeBase64String(surveyOptionId.toString())
      );
      changeTab(nextStepIndex);
    } else {
      toast.warn("Please, select a survey option.");
    }
  };

  return (
    <div className="app-started">
      <div className="container mx-auto px-[16px]">
        <h1 className="text-[#204971] pb-[10px] sm:pb-[30px]">
          Select your Service
        </h1>
        <p className="mb-10">
          A quick and simple estimate can give you all the information you need
          to help you plan your retrofit journey at the early stages. It will
          give you approximate costs for the works based on your house type and
          details of grants, incentives & finance that will make it more
          affordable for you. <br /> <br />
          We will send you a detailed Estimate Report that will outline all of
          the details along with giving you a call to answer any further
          questions or queries you may have.
        </p>
        <SelectService
          surveyOptions={surveyOptions}
          currentOption={surveyOptionId}
          selectedOption={(id: number) => {
            setSurveyOptionId(id)
          }}
        />
        <div className="w-[220px] m-auto">
          <ActionButtons
            currentStepIndex={0}
            label_2={"Start"}
            showNext={true}
            showBack={false}
            onButtonClick={startAssessment}
          />
        </div>
      </div>
    </div>
  );
};

export default Started;
