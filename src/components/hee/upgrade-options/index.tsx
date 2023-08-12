import MeasureSkeleton from "@/components/common/loader/measure-skeleton";
import { DropDownDto } from "@services/common.dto";
import {
  HeeMeasureOutputDto,
  TemplateWithCategoryWisemesureOutput,
} from "@services/hee/dto/hee.measure.dto";
import { HomeDetailDto } from "@services/hee/dto/home-detail.input.dto";
import heeService, {
  _HeeEstimatedMeasureStoreKey,
  _HeeHomeDetailStoreKey,
} from "@services/hee/hee.service";
import { EncodeingUtil } from "@utils/encoading-util";
import { StoreUtil } from "@utils/store-util";
import React, { useCallback, useEffect, useState } from "react";
import ActionButtons from "../action-buttons";
import EstimatedSummary from "./esitated-summary";
import MultiSelectCategory from "./multi-select-category";
import SingleSelectCategory from "./single-select-category";
import { toast } from "react-toastify";
import { HouseTypeDto } from "@services/fuel-cost/dto/inti-data.output.dto";
import { Measure } from "@services/hee/dto/hee.measure.dto";
import Image from "next/image";
import AppConst from "@config/app.const";
import HouseTypeDropDown from "@/components/common/house-type-dropdown";

interface SavedUpgradeOptions {
  heeTemplate: TemplateWithCategoryWisemesureOutput;
  schemeTypeId: number;
}

interface UpgradeOptionProps {
  changeTab(nextStep: number): void;
}

const UpgradeOption: React.FC<UpgradeOptionProps> = ({
  changeTab,
}: UpgradeOptionProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [houseTypeDropdownState, setHouseTypeDropdownState] =
    useState<boolean>(false);
  //Scheme Type Dropdown Data
  const [schemeOptions, setSchemeOptions] = useState<Array<DropDownDto>>([]);
  //Hose Type Dropdown Data
  const [houseTypeChsList, setHouseTypeChsList] = useState<Array<HouseTypeDto>>(
    []
  );
  //Current VAR Rate State
  const [vatRate, setVatRate] = useState<number>(0);
  //Selected measures value. When user will select any measure, we will saved its measures, grants and incentives total state here
  const [estimateObject, setEstimateObject] = useState<{
    totalMeasure: number;
    totalGrant: number;
    totalIncentive: number;
  }>({
    totalMeasure: 0,
    totalGrant: 0,
    totalIncentive: 0,
  });

  // Selected house type and year built state in previous stage.
  const [selectedHouseAndYearBuilt, setSelectedHouseAndYearBuilt] = useState<{
    houseTypeId: number;
    houseTypeName: string;
    houseThumbnail?: string;
    yearBuiltId: number;
  }>({
    houseTypeId: 0,
    houseTypeName: "",
    yearBuiltId: 0,
  });

  //Entire template object state based on selected house type, year built and scheme type.
  const [heeTemplate, setHeeTemplate] =
    useState<TemplateWithCategoryWisemesureOutput | null>(null);
  //Selected Scheme Type State. We need this incase of user back here from next stage.
  const [schemeTypeState, setSchemeTypeState] = useState<number | undefined>();

  //As house Type Id and Year Built Id is already known to us from prevous stage, We are fetching its related data from API.
  const onSchemeChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const schemeTypeId = +event.currentTarget.value;
    clearSummary();
    //Saving selected Scheme Id to repopulate if user come back from Next Stage/ Just a  Small Change
    setSchemeTypeState(schemeTypeId);
    if (schemeTypeId > 0) {
      fetchUpgradeOptions(
        schemeTypeId,
        selectedHouseAndYearBuilt.houseTypeId,
        selectedHouseAndYearBuilt.yearBuiltId
      );
    }
  };

  const onHouseTypeChange = async (houseTypeId: number) => {
    setHouseTypeDropdownState(false);
    setSelectedHouseAndYearBuilt((prevState) => {
      const house = houseTypeChsList.find((x) => x.id == houseTypeId);
      return {
        ...prevState,
        houseTypeId: houseTypeId,
        houseTypeName: house?.houseTypeName || "",
        houseThumbnail: house?.thumbnailPath || "",
      };
    });

    //Saving selected Scheme Id to repopulate if user come back from Next Stage
    if (schemeTypeState) {
      //Reset Summary for new Template
      setEstimateObject({
        totalGrant: 0,
        totalIncentive: 0,
        totalMeasure: 0,
      });

      //Getting new options for selected house type
      fetchUpgradeOptions(
        schemeTypeState,
        houseTypeId,
        selectedHouseAndYearBuilt.yearBuiltId
      );
    }
  };

  const fetchUpgradeOptions = useCallback(
    async (schemeTypeId: number, houseTypeId: number, yearBuiltId: number) => {
      try {
        //Fetching measures template from API
        setLoading(true);
        const template = await heeService.getMeasures(
          schemeTypeId,
          houseTypeId,
          yearBuiltId
        );
        template.categoryWiseMeasure.forEach((c) =>
          c.measures.forEach((m) => (m.selected = false))
        );
        setHeeTemplate(template);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setHeeTemplate(null);
      }
    },
    []
  );

  useEffect(() => {
    const fetchSchemeOptions = async () => {
      //Fetching scheme types list and current VAT From API
      const data = await Promise.all([
        heeService.getSchemeType(),
        heeService.getCurrentVatRate(),
        heeService.getHouseTypes(),
      ]);

      if (data.length) {
        const [schemes, vatRate, houseTypes] = data;

        setSchemeOptions(schemes);
        setVatRate(vatRate);
        setHouseTypeChsList(houseTypes);

        const defaultSchemeId =
          schemes.find((x) => x.isDefault)?.id || schemes[0].id;
        setSchemeTypeState(defaultSchemeId);

        //Retriving Selected House Type Id, Name and year built Id form local store saved  in previous stote.
        if (StoreUtil.isExist(_HeeHomeDetailStoreKey)) {
          const homeDetails = JSON.parse(
            EncodeingUtil.decodeBase64(
              StoreUtil.getByKey(_HeeHomeDetailStoreKey) || ""
            )
          ) as HomeDetailDto;

          setSelectedHouseAndYearBuilt({
            houseTypeId: homeDetails.houseTypeId,
            houseTypeName: homeDetails.houseTypeName || "",
            houseThumbnail: homeDetails.houseThumbnail,
            yearBuiltId: homeDetails.yearBuiltId,
          });

          //If user come back from prevous stage, we are populating all selected options form local storage
          if (StoreUtil.isExist(_HeeEstimatedMeasureStoreKey)) {
            const estimatedSavedObject = JSON.parse(
              EncodeingUtil.decodeBase64(
                StoreUtil.getByKey(_HeeEstimatedMeasureStoreKey) || ""
              )
            ) as SavedUpgradeOptions;

            setHeeTemplate(estimatedSavedObject.heeTemplate);
            setSchemeTypeState(+estimatedSavedObject.schemeTypeId);
            calculateTotal(
              estimatedSavedObject.heeTemplate.categoryWiseMeasure
            );
          } else {
            fetchUpgradeOptions(
              defaultSchemeId,
              homeDetails.houseTypeId,
              homeDetails.yearBuiltId
            );
          }
        }
      }
    };

    fetchSchemeOptions();
  }, [fetchUpgradeOptions]);

  //On every Meassure (Radio or check button)selection we will update heetemplate state and calculate the Summary. We will pass event object for checkbox type control.
  const onItemSelected = (
    categoryId: number,
    measureId: number,
    e: any = null
  ) => {
    if (heeTemplate) {
      const templateObj = { ...heeTemplate };
      templateObj.categoryWiseMeasure.forEach((c) => {
        if (c.measureCategoryId === categoryId) {
          c.measures.forEach((m) => {
            if (!e) {
              //That means its a radio button type control
              m.selected = false; //Making all other measure unselected for this category first.
              if (m.fkHeeMeasureId === measureId) m.selected = true; // setting as selected only that particular radio control user clicked.
            } else if (e && m.fkHeeMeasureId === measureId)
              // That means it's a checkbox control. Changing selected measure items status based on current check boxs checked status.
              m.selected = e.target.checked;
          });
        }
      });
      //Updateting Heetemplate State
      setHeeTemplate(templateObj);
      //Recaalculating Summary based on updated template object.
      calculateTotal(templateObj.categoryWiseMeasure);
    }
  };

  const clearSelection = (categoryId: number) => {
    if (heeTemplate) {
      const templateObj = { ...heeTemplate };
      templateObj.categoryWiseMeasure.forEach((c) => {
        if (c.measureCategoryId === categoryId) {
          c.measures.forEach((m) => {
            m.selected = false;
          });
        }
      });
      //Updateting Heetemplate State
      setHeeTemplate(templateObj);
      //Recaalculating Summary based on updated template object.
      calculateTotal(templateObj.categoryWiseMeasure);
    }
  };

  const calculateTotal = (categoryWiseMeasure: Array<HeeMeasureOutputDto>) => {
    const totalObj = {
      totalMeasure: 0,
      totalGrant: 0,
      totalIncentive: 0,
    };
    categoryWiseMeasure.forEach((c) => {
      c.measures.forEach((m) => {
        if (m.selected) {
          totalObj.totalMeasure += m.totalMeasure;
          totalObj.totalGrant += m.totalGrant;
          totalObj.totalIncentive += m.totalIncentive;
        }
      });
    });
    setEstimateObject(totalObj);
  };

  const clearSummary = () => {
    const totalObj = {
      totalMeasure: 0,
      totalGrant: 0,
      totalIncentive: 0,
    };
    setEstimateObject(totalObj);
  };

  const onActionClicked = (nextIndex: number, actionType: string) => {
    const homeDetails = JSON.parse(
      EncodeingUtil.decodeBase64(
        StoreUtil.getByKey(_HeeHomeDetailStoreKey) || ""
      )
    ) as HomeDetailDto;

    StoreUtil.saveByKey(
      _HeeHomeDetailStoreKey,
      EncodeingUtil.encodeBase64String(
        JSON.stringify({
          ...homeDetails,
          houseTypeId: selectedHouseAndYearBuilt.houseTypeId,
          houseTypeName: selectedHouseAndYearBuilt.houseTypeName,
          houseThumbnail: selectedHouseAndYearBuilt.houseThumbnail,
        })
      )
    );

    if (actionType == "next") {
      //Saving Store information.
      toast.dismiss();
      if (schemeTypeState == 0) {
        toast.warning("Please, select a SEAI Grant Type.");
        return;
      }

      if (
        heeTemplate?.categoryWiseMeasure &&
        !checkAnyMeasureSelected(heeTemplate.categoryWiseMeasure)
      ) {
        toast.warning("Please, select measures you wish to upgrade.");
        return;
      }

      StoreUtil.saveByKey(
        _HeeEstimatedMeasureStoreKey,
        EncodeingUtil.encodeBase64String(
          JSON.stringify({
            schemeTypeId: schemeTypeState,
            heeTemplate: heeTemplate,
          })
        )
      );
    }

    changeTab(nextIndex);
  };

  const checkAnyMeasureSelected = (
    categoryWiseMeasure: Array<HeeMeasureOutputDto>
  ) => {
    const hasSelected = categoryWiseMeasure
      .reduce((measureList: Array<Measure>, cat) => {
        return [...measureList, ...cat.measures];
      }, [])
      .find((m) => !!m.selected);

    return !!hasSelected;
  };

  return (
    <div className="app-started overflow-hidden">
      <div className="container mx-auto px-[16px]">
        <div className="xl:flex flex-row md:mt-7 xl:space-x-7  xl:overflow-y-auto xl:max-h-[65vh] hide-scrollbar xl:elative">
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
                        {selectedHouseAndYearBuilt.houseThumbnail && (
                          <Image
                            src={
                              AppConst.imageBaseUrl +
                              selectedHouseAndYearBuilt.houseThumbnail
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
                        selectedHouseType={
                          selectedHouseAndYearBuilt.houseTypeName
                        }
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
                    <b>Selected Details</b>
                    <p>
                      Select SEAI Grant type that best suits your requirements
                    </p>
                  </label>
                  <div className="py-3">
                    <select
                      className="form-select !border-0 !font-bold"
                      name="schmeTypeId"
                      value={schemeTypeState}
                      onChange={onSchemeChange}
                    >
                      {schemeOptions.map((x) => (
                        <option key={x.id} value={x.id}>
                          {x.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {loading ? (
              <MeasureSkeleton />
            ) : (
              <>
                {heeTemplate && heeTemplate.categoryWiseMeasure.length ? (
                  <>
                    <h3 className="text-[#204971] pb-4">
                      Select the measures you wish to upgrade
                    </h3>
                    {heeTemplate.categoryWiseMeasure.map((category) =>
                      category.isAllowMultiSelect ? (
                        <MultiSelectCategory
                          key={category.measureCategoryId}
                          measureCategory={category}
                          onItemSelected={(
                            measureId: number,
                            e: React.ChangeEvent<HTMLInputElement>
                          ) =>
                            onItemSelected(
                              category.measureCategoryId,
                              measureId,
                              e
                            )
                          }
                        />
                      ) : (
                        <SingleSelectCategory
                          measureCategory={category}
                          key={category.measureCategoryId}
                          onItemSelected={(measureId: number) =>
                            onItemSelected(
                              category.measureCategoryId,
                              measureId
                            )
                          }
                          onClearSelection={() =>
                            clearSelection(category.measureCategoryId)
                          }
                        />
                      )
                    )}
                  </>
                ) : (
                  <>
                    <h3 className="text-[#204971] pb-4">
                      Sorry we have no services for the grant type, year built
                      range and house type selected.
                    </h3>
                  </>
                )}
              </>
            )}

            <div className="xl:block hidden">
              <ActionButtons
                currentStepIndex={2}
                label_1={"Back"}
                label_2={"Next"}
                showNext={
                  !!(heeTemplate && heeTemplate.categoryWiseMeasure.length)
                }
                showBack={true}
                onButtonClick={onActionClicked}
              />
            </div>
          </div>

          <div className="xl:basis-2/4 xl:sticky xl:top-[-35px]">
            <div className="total-summary relative">
              <EstimatedSummary
                vatRate={vatRate}
                totalMeasure={estimateObject.totalMeasure}
                totalGrant={estimateObject.totalGrant}
                totalIncentive={estimateObject.totalIncentive}
              />
            </div>
            <div className="block xl:hidden button-group">
              <ActionButtons
                currentStepIndex={2}
                label_1={"Back"}
                label_2={"Next"}
                showNext={
                  !!(heeTemplate && heeTemplate.categoryWiseMeasure.length)
                }
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

export default UpgradeOption;
