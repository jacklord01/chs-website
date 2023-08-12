import { ContactDetailInputDto } from "@services/common.dto";

export interface HeeWebRequestDto extends ContactDetailInputDto {
  verificationGuId: string;
  fkSchemeTypeId: number;
  fkHouseTypeId: number;
  fkHeeYearBuiltId: number;
  noOfStoreys: number;
  floorArea: number;
  fkPrimaryHeatSourceId: number;
  fkHeatSourceId: number;
  fkBerId: number;
  projectImageFileGuId?: string;
  interested: boolean;
  fkFinanceId?: number;
  interestedLoanAmount?: number;
  interestedLoanTerm?: number;
  upgradeOptions: UpgradeOption[];
}

export interface UpgradeOption {
  fkHeeVisitorsExplorationId: number;
  fkHeeMeasureId: number;
  measureCurrencyValue: number;
  measureTextValue: string;
}
