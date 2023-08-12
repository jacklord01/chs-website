import { ContactDetailInputDto } from "@services/common.dto";
import http from "@services/http.service";
import http2 from "@services/http2.service";
import { EncodeingUtil } from "@utils/encoading-util";
import { StoreUtil } from "@utils/store-util";
import { HeaHomeDetailDto } from "./dto/hea-home-detail.dto";
import { HeaWebRequestDto } from "./dto/hea-input.dto";
import { SurveyOptionOutputDto } from "./dto/survey-option-output.dto";
import { SurveyTemplateOutputDto } from "./dto/survey-template.output.dto";

export const _HeaSurveyOptionStoreKey = "heaSrvOp";
export const _HeaHomeDetailStoreKey = "heaHmDtl";
export const _HeaContactDetailStoreKey = "heaCntDtl";

class HeaService {
  private readonly heaBasePath = "web/hea/";

  getSurveyOptions = async (): Promise<Array<SurveyOptionOutputDto>> => {
    const result = await http.get(this.heaBasePath + "survey-options");
    return result.data.data;
  };

  getSurveyQuotationTemplate = async (
    surveyOptionId: number,
    houseTypeId: number
  ): Promise<SurveyTemplateOutputDto> => {
    const result = await http.get(
      this.heaBasePath +
      `survey-measures?surveyOptionId=${surveyOptionId}&houseTypeId=${houseTypeId}`
    );
    return result.data.data;
  };

  submitHeaInformation = (data: ContactDetailInputDto, verificationGuId: string) => {
    const homeDetail = JSON.parse(
      EncodeingUtil.decodeBase64(
        StoreUtil.getByKey(_HeaHomeDetailStoreKey) || ""
      )
    ) as HeaHomeDetailDto;

    const surveyOptionId = EncodeingUtil.decodeBase64(
      StoreUtil.getByKey(_HeaSurveyOptionStoreKey) || ""
    );

    const inputData: HeaWebRequestDto = {
      ...data,
      verificationGuId,
      fkHouseTypeId: homeDetail.houseTypeId,
      fkSurveyOptionId: +surveyOptionId,
      hasExtention: !!Number(homeDetail.hasExtention),
      hasAtticConversion: !!Number(homeDetail.hasAtticConversion),
      noOfStoreys: +homeDetail.noOfStoreys,
      projectImageFileGuId: homeDetail.selectedImageGuId,
    };

    return this.sendHeaWebRequest(inputData);
  };

  sendHeaWebRequest = async (data: HeaWebRequestDto): Promise<boolean> => {
    const result = await http2.post(
      `${this.heaBasePath}web-request`,
      data
    );
    return result.data.data;
  };

}

export default new HeaService();
