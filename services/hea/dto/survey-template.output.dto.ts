export interface SurveyTemplateOutputDto {
  vatRate: number;
  valueList: FieldValue[];
}

export interface FieldValue {
  projectCategoryId: number;
  categoryType: number;
  qty: number;
  unitPrice: number;
  fieldName: string;
  valueName: string;
  valueDescription: string;
}
