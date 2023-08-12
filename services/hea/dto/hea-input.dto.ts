import { ContactDetailInputDto } from "@services/common.dto";

export interface HeaWebRequestDto extends ContactDetailInputDto {
  verificationGuId: string;
  fkHouseTypeId: number;
  fkSurveyOptionId: number;
  hasExtention: boolean;
  hasAtticConversion: boolean;
  noOfStoreys: number;
  projectImageFileGuId?: string;
}
