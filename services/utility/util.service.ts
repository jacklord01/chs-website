import { SEOData } from "@/types/seo-data.interface";
import { DropDownDto } from "@services/common.dto";
import { HouseTypeDto } from "@services/fuel-cost/dto/inti-data.output.dto";
import http from "@services/http.service";
import http2 from "@services/http2.service";
import {
  OTPInputDto,
  OTPVerificationInputDto,
} from "./dto/phone-verification.dto";
import { WebConstraintOutputDto } from "./web-constraints.output.dto";
import AppConst from "@config/app.const";
import {
  AddressBuild,
  AddressIdentification,
  AddressSuggestion,
} from "@/components/common/address-search/address-types";

class UtilService {
  getSEOContentByPageUrl = async (
    pageUrl: string = "home"
  ): Promise<SEOData | null> => {
    const result = await http.get(
      `seo-contents/by-page-url?pageUrl=${pageUrl}`
    );
    return result.data.data;
  };

  getCountries = async (): Promise<Array<DropDownDto>> => {
    const result = await http.get(`country/country-ddl`);
    return result.data.data;
  };

  getHouseTypes = async (): Promise<Array<HouseTypeDto>> => {
    const result = await http.get(`web/hee/house-types`);
    return result.data.data;
  };

  getWebConstraints = async (): Promise<WebConstraintOutputDto> => {
    const result = await http.get(`seo-contents/constraint/data`);
    return result.data.data;
  };

  sendOtp = async (data: OTPInputDto): Promise<string> => {
    const result = await http2.post(`web/otp/send`, data);
    return result.data.data;
  };

  resendOtp = async (guId: string): Promise<boolean> => {
    const result = await http2.get(`web/otp/resend?verificationGuId=${guId}`);
    return result.data.data;
  };

  verifyOtp = async (data: OTPVerificationInputDto): Promise<boolean> => {
    const result = await http2.post(`web/otp/verify`, data);
    return result.data.data;
  };

  sendReq = async (searchText: string) => {
    const response = await fetch(`${AppConst.geoAddressUrl}search-address`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AppConst.geoAddressToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        q: searchText,
      }),
    });

    return response.json();
  };

  indentifyAddress = async (id: string) => {
    const response = await fetch(
      `${AppConst.geoAddressUrl}search-identification`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AppConst.geoAddressToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identification: id,
        }),
      }
    );

    return response.json();
  };

  buildAddress = (
    address: AddressIdentification | AddressSuggestion
  ): AddressBuild => {
    const addrs: string[] = Object.keys(address)
      .filter((key) => key.indexOf("addr_") !== -1)
      .map((key) => (address as any)[key])
      .filter(Boolean);

    const id = address.identification;
    const eirCode = address?.eircode || "";
    const country = "Ireland";
    const county = addrs[addrs.length - 1] || "";
    const town = addrs[addrs.length - 2] || "";
    addrs.length = addrs.length - 2; // removing last 2 items;
    const addressLine = addrs.join(", ");
    const fullAddress = [addressLine, town, county].filter(Boolean).join(", ");

    return {
      id,
      town,
      county,
      country,
      fullAddress,
      eirCode,
      address: addressLine,
    } as AddressBuild;
  };
}

export default new UtilService();
