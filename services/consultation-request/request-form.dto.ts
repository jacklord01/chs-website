export interface ConsultationRequestFormDto {
  fkConsultationServiceId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eirCode: string;
  address: string;
  county: string;
  city: string;
  fkCountryId: number;
  additionalDetail: string;
  gotErrInAddressSearch: boolean;
}
