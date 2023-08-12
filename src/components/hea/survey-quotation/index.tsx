import { HeaHomeDetailDto } from "@services/hea/dto/hea-home-detail.dto";
import { SurveyOptionOutputDto } from "@services/hea/dto/survey-option-output.dto";
import { SurveyTemplateOutputDto } from "@services/hea/dto/survey-template.output.dto";
import heaService, {
  _HeaHomeDetailStoreKey,
  _HeaSurveyOptionStoreKey,
} from "@services/hea/hea.service";

import { EncodeingUtil } from "@utils/encoading-util";
import { StoreUtil } from "@utils/store-util";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ActionButtons from "../action-buttons";
import QuotationSummary from "./quotation-summary";
import SurveyTable from "./survey-table";
import { HouseTypeDto } from "@services/fuel-cost/dto/inti-data.output.dto";
import heeService from "@services/hee/hee.service";
import { ProjectCategoryTypeEnum } from "@/types/project-category-type.enum";
import Image from "next/image";
import AppConst from "@config/app.const";
import HouseTypeDropDown from "@/components/common/house-type-dropdown";

interface SurveyQuotationProps {
  changeTab(nextStep: number): void;
}

const SurveyQuotation: React.FC<SurveyQuotationProps> = ({
  changeTab,
}: SurveyQuotationProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [houseTypeDropdownState, setHouseTypeDropdownState] =
    useState<boolean>(false);

  //Hose Type Dropdown Data
  const [houseTypeChsList, setHouseTypeChsList] = useState<Array<HouseTypeDto>>(
    []
  );
  //Survey Options Type Dropdown Data
  const [surveyOptions, setSurveyOptions] = useState<
    Array<SurveyOptionOutputDto>
  >([]);
  const [selectedSurveyType, setSelectedSurveyType] = useState<number>(0);

  // Selected house type in previous stage.
  const [houseType, setHouseType] = useState<{
    houseTypeId: number;
    houseTypeName: string;
    houseThumbnail?: string;
  }>({
    houseTypeId: 0,
    houseTypeName: "",
  });

  //Entire template object state based on selected house type, year built and scheme type.
  const [heaTemplate, setHeaTemplate] =
    useState<SurveyTemplateOutputDto | null>(null);

  useEffect(() => {
    const fetchSchemeOptions = async () => {
      //Fetching scheme types list and current VAT From API
      const output = await heaService.getSurveyOptions();
      output.length && setSurveyOptions(output);

      const houseTypes = await heeService.getHouseTypes();
      houseTypes.length && setHouseTypeChsList(houseTypes);

      //Retriving Selected House Type Id, Name and year built Id form local store saved  in previous stote.
      if (
        StoreUtil.isExist(_HeaHomeDetailStoreKey) &&
        StoreUtil.isExist(_HeaSurveyOptionStoreKey)
      ) {
        const homeDetails = JSON.parse(
          EncodeingUtil.decodeBase64(
            StoreUtil.getByKey(_HeaHomeDetailStoreKey) || ""
          )
        ) as HeaHomeDetailDto;

        const surveyOptionId = +EncodeingUtil.decodeBase64(
          StoreUtil.getByKey(_HeaSurveyOptionStoreKey) || ""
        );

        setHouseType({
          houseTypeId: homeDetails.houseTypeId,
          houseTypeName: homeDetails.houseTypeName || "",
          houseThumbnail: homeDetails.houseThumbnail,
        });

        setSelectedSurveyType(surveyOptionId);

        getSurveyQuote(surveyOptionId, homeDetails.houseTypeId);
      }
    };

    fetchSchemeOptions();
  }, []);

  //As house Type Id and Year Built Id is already known to us from prevous stage, We are fetching its related data from API.
  const onSurveyChanged = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const id = +event.currentTarget.value;
    //Saving selected Scheme Id to repopulate if user come back from Next Stage
    setSelectedSurveyType(id);
    getSurveyQuote(id, houseType.houseTypeId);
  };

  const getSurveyQuote = async (
    surveyOptionId: number,
    houseTypeId: number
  ) => {
    toast.dismiss();
    try {
      setLoading(true);
      setHeaTemplate(null);
      const surveyQuoteOutput = await heaService.getSurveyQuotationTemplate(
        surveyOptionId,
        houseTypeId
      );
      setLoading(false);

      if (surveyQuoteOutput.valueList.length) setHeaTemplate(surveyQuoteOutput);
      else
        toast.warning(
          "There is no survey for the house type and survey option selected."
        );
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong. Please, try after sometime.");
    }
  };

  const onActionClicked = (nextIndex: number, actionType: string) => {
    //Saving Store information.
    StoreUtil.saveByKey(
      _HeaSurveyOptionStoreKey,
      EncodeingUtil.encodeBase64String(selectedSurveyType.toString())
    );

    if (actionType == "back") {
      const homeDetails = JSON.parse(
        EncodeingUtil.decodeBase64(
          StoreUtil.getByKey(_HeaHomeDetailStoreKey) || ""
        )
      ) as HeaHomeDetailDto;

      StoreUtil.saveByKey(
        _HeaHomeDetailStoreKey,
        EncodeingUtil.encodeBase64String(
          JSON.stringify({
            ...homeDetails,
            houseTypeId: houseType.houseTypeId,
            houseTypeName: houseType.houseTypeName,
            houseThumbnail: houseType.houseThumbnail,
          })
        )
      );
    }
    changeTab(nextIndex);
  };

  const onHouseTypeChange = async (houseTypeId: number) => {
    setHouseTypeDropdownState(false);
    setHouseType((prevState) => {
      const house = houseTypeChsList.find((x) => x.id == houseTypeId);
      return {
        ...prevState,
        houseTypeId: houseTypeId,
        houseTypeName: house?.houseTypeName || "",
        houseThumbnail: house?.thumbnailPath || "",
      };
    });

    getSurveyQuote(selectedSurveyType, houseTypeId);
  };

  return (
    <div className="app-started overflow-hidden ">
      <div className="container mx-auto px-[16px]">
        <div className="xl:flex flex-row md:mt-7 xl:space-x-7 xl:overflow-y-auto xl:max-h-[65vh] hide-scrollbar xl:elative">
          <div className="xl:basis-3/4">
            <div className="form-group mb-6">
              <label className="form-label form-label-lg">
                Selected Details
              </label>
              <div className="md:flex md:items-start">
                <div className="checkbox-item checkbox-single  single-checkbox md:w-[162px] md:mr-[24px] mb-6 md:mb-0">
                  <div className="custom-checkbox !w-full md:!w-[162px] !bg-[#204971]">
                    <span className="checkbox-content">
                      <span className="w-[128px] h-[58px] m-auto mb-3 block overflow-hidden">
                        {houseType.houseThumbnail && (
                          <Image
                            src={
                              AppConst.imageBaseUrl + houseType.houseThumbnail
                            }
                            className="!w-full !h-full"
                            alt="House Type"
                            loading="lazy"
                            width="100"
                            height="100"
                          />
                        )}
                      </span>
                      <HouseTypeDropDown
                        houseTypeList={houseTypeChsList}
                        selectedHouseType={houseType.houseTypeName}
                        onSelectedHouse={onHouseTypeChange}
                      />
                    </span>
                  </div>
                  <span className="check-icon">
                    <svg width="12" viewBox="0 0 8 7" fill="currentColor">
                      <use href="/images/sprite.svg#svg-check"></use>
                    </svg>
                  </span>
                </div>
                <div className="border border-[#204971] w-full bg-white">
                  <label className="form-label p-[15px] !mb-0 bg-[#E7E7E7]">
                    <b>Survey Type</b>
                    <p>Select Survey type that best suits your requirements</p>
                    {/* {(heaTemplate && heaTemplate.valueList.length) ? "True" : "False"} */}
                  </label>
                  <div className="py-3">
                    <select
                      className="form-select !border-0 !font-bold"
                      name="schmeTypeId"
                      value={selectedSurveyType}
                      onChange={onSurveyChanged}
                    >
                      {surveyOptions.map((x) => (
                        <option key={x.id} value={x.id}>
                          {x.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <SurveyTable values={heaTemplate?.valueList} loading={loading} />
            <div className="xl:block hidden">
              <ActionButtons
                currentStepIndex={2}
                label_1={"Back"}
                label_2={"Next"}
                showNext={!!heaTemplate}
                showBack={true}
                onButtonClick={onActionClicked}
              />
            </div>
          </div>

          <div className="xl:basis-2/4 xl:sticky xl:top-[-35px]">
            <div className="total-summary relative">
              {heaTemplate && (
                <QuotationSummary
                  vatRate={heaTemplate.vatRate}
                  totalCost={heaTemplate.valueList
                    .filter(
                      (x) => x.categoryType === ProjectCategoryTypeEnum.Standard
                    )
                    .reduce((total, val) => total + val.qty * val.unitPrice, 0)}
                  totalGrant={heaTemplate.valueList
                    .filter(
                      (x) => x.categoryType === ProjectCategoryTypeEnum.Grant
                    )
                    .reduce(
                      (total, val) => total + val.qty * (0 - val.unitPrice),
                      0
                    )}
                  totalIncentive={heaTemplate.valueList
                    .filter(
                      (x) =>
                        x.categoryType === ProjectCategoryTypeEnum.Incentive
                    )
                    .reduce(
                      (total, val) => total + val.qty * (0 - val.unitPrice),
                      0
                    )}
                />
              )}
            </div>
            <div className="block xl:hidden button-group">
              <ActionButtons
                currentStepIndex={2}
                label_1={"Back"}
                label_2={"Next"}
                showNext={!!heaTemplate}
                showBack={true}
                onButtonClick={onActionClicked}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyQuotation;
