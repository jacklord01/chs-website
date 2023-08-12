import { FinancialOptionOutputDto } from "./financial-option.output.dto";

export interface AvailavedLoanInfo {
  interested?: boolean;
  selectedOption?: FinancialOptionOutputDto;
  interestedLoanAmount: number;
  interestedLoanTerm: number;
}
