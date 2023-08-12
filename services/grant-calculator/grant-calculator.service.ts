import { DropDownDto } from "@services/common.dto";
import { Utils } from "@utils/index";
import http from "../http.service";
import { FilterParamDto, GrantItemsDto } from "./grant-option.output.dto";

export class GrantCalculatorService {
  getGrantOptions = async (): Promise<DropDownDto[]> => {
    let result = await http.get(`grant-calculating/grant-options`);
    return result.data.data;
  };

  getHouseTypes = async (): Promise<DropDownDto[]> => {
    let result = await http.get(`grant-calculating/grant-house-type`);
    return result.data.data;
  };

  getGrantItems = async (params: FilterParamDto): Promise<GrantItemsDto> => {
    let result = await http.get(
      `grant-calculating/grant-items?${Utils.objToQueryString(params)}`
    );
    return result.data.data;
  };
}

export default new GrantCalculatorService();
