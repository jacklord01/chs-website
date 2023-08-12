import { TemplateTotalTypeEnum } from "../enum/template-total-type.enum";

export interface TemplateWithCategoryWisemesureOutput {
  templateTotalType: TemplateTotalTypeEnum;
  textTypeTotalValue: string;
  categoryWiseMeasure: Array<HeeMeasureOutputDto>;
}

export interface HeeMeasureOutputDto {
  measureCategoryId: number;
  measureCategoryName: string;
  categoryTooltipMessage: string;
  isAllowMultiSelect: boolean;
  measures: Measure[];
}

export interface Measure {
  fkHeeMeasureId: number;
  measureName: string;
  textTotalValue?: string;
  totalMeasure: number;
  totalGrant: number;
  totalIncentive: number;
  selected: boolean;
}
