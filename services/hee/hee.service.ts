import { ContactDetailInputDto, DropDownDto } from "@services/common.dto";
import { HouseTypeDto } from "@services/fuel-cost/dto/inti-data.output.dto";
import http from "@services/http.service";
import http2 from "@services/http2.service";
import { EncodeingUtil } from "@utils/encoading-util";
import { StoreUtil } from "@utils/store-util";
import { AvailavedLoanInfo } from "./dto/availed-loan.info";
import { FinancialOptionOutputDto } from "./dto/financial-option.output.dto";
import { HeeWebRequestDto, UpgradeOption } from "./dto/hee-input.dto";
import {
  Measure,
  TemplateWithCategoryWisemesureOutput,
} from "./dto/hee.measure.dto";
import { HomeDetailDto } from "./dto/home-detail.input.dto";
import { YearBuiltOutputDto } from "./dto/year-built.output";

export const _HeeHomeDetailStoreKey = "hmDtl";
export const _HeeEstimatedMeasureStoreKey = "estMsrCstDtl";
export const _HeeFinanceStoreKey = "estFncDtl";
export const _HeeContactDetailStoreKey = "heeCntcDtl";

class HeeService {
  private readonly heeWeb = "web/hee/";

  getYearBuilt = async (): Promise<Array<YearBuiltOutputDto>> => {
    const result = await http.get(this.heeWeb + "hee-year-built");
    return result.data.data;
  };

  getSchemeType = async (): Promise<Array<DropDownDto>> => {
    const result = await http.get(this.heeWeb + "scheme-type");
    return result.data.data;
  };

  getHouseTypes = async (): Promise<Array<HouseTypeDto>> => {
    const result = await http.get(this.heeWeb + "house-types");
    return result.data.data;
  };

  getCurrentVatRate = async (): Promise<number> => {
    const result = await http.get(this.heeWeb + "vat-rate");
    return result.data.data;
  };

  getMeasures = async (
    schemeTypeId: number,
    houseTypeId: number,
    yearBuiltId: number
  ): Promise<TemplateWithCategoryWisemesureOutput> => {
    const result = await http.get(
      `${this.heeWeb}measures?schemeTypeId=${schemeTypeId}&houseTypeId=${houseTypeId}&yearBuiltId=${yearBuiltId}`
    );
    return result.data.data;
  };

  getFinancialOption = async (): Promise<Array<FinancialOptionOutputDto>> => {
    const result = await http.get(`${this.heeWeb}available-finances`);
    return result.data.data;
  };

  submitHeeInformation = async (
    contactData: ContactDetailInputDto,
    verificationGuId: string
  ) => {
    const homeDetail = JSON.parse(
      EncodeingUtil.decodeBase64(
        StoreUtil.getByKey(_HeeHomeDetailStoreKey) || ""
      )
    ) as HomeDetailDto;

    const upgradeOptions = JSON.parse(
      EncodeingUtil.decodeBase64(
        StoreUtil.getByKey(_HeeEstimatedMeasureStoreKey) || ""
      )
    ) as {
      schemeTypeId: number;
      heeTemplate: TemplateWithCategoryWisemesureOutput;
    };

    // const financeInfo = JSON.parse(
    //   EncodeingUtil.decodeBase64(StoreUtil.getByKey(_HeeFinanceStoreKey) || "")
    // ) as AvailavedLoanInfo;

    const heeData: HeeWebRequestDto = {
      ...contactData,
      verificationGuId,
      floorArea: Number(homeDetail.floorArea.toFixed(2)),
      fkHouseTypeId: homeDetail.houseTypeId,
      fkHeeYearBuiltId: +homeDetail.yearBuiltId,
      fkPrimaryHeatSourceId: +homeDetail.primaryHeatSourceId,
      fkHeatSourceId: +homeDetail.heatSourceId,
      fkBerId: +homeDetail.berId,
      projectImageFileGuId: homeDetail.selectedImageGuId,
      noOfStoreys: +homeDetail.noOfStoreys,
      interested: false,
      // fkFinanceId: financeInfo.selectedOption?.id,
      // interestedLoanAmount: financeInfo.interestedLoanAmount,
      // interestedLoanTerm: financeInfo.interestedLoanTerm,
      fkSchemeTypeId: upgradeOptions.schemeTypeId,
      upgradeOptions: upgradeOptions.heeTemplate.categoryWiseMeasure
        .reduce((measureList: Array<Measure>, cat) => {
          return [...measureList, ...cat.measures];
        }, [])
        .filter((m) => m.selected)
        .map((x) => {
          return {
            fkHeeMeasureId: x.fkHeeMeasureId,
            measureTextValue:
              x.textTotalValue && x.textTotalValue != ""
                ? x.textTotalValue
                : null,
            measureCurrencyValue:
              x.textTotalValue && x.textTotalValue != ""
                ? 0
                : x.totalMeasure - (x.totalGrant + x.totalIncentive),
          } as UpgradeOption;
        }),
    };
    const submissionStatus = await this.submitHeeData(heeData);
    if (submissionStatus) {
      StoreUtil.clearStore();
    }
    return true;
  };

  submitHeeData = async (data: HeeWebRequestDto): Promise<boolean> => {
    const result = await http2.post(`${this.heeWeb}web-request`, data);
    return result.data.data;
  };
}

export default new HeeService();
