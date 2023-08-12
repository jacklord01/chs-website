export interface DropDownDto {
  id: number;
  name: string;
  isDefault: boolean;
}

export interface ContactDetailInputDto {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eirCode: string;
  address: string;
  city: string;
  county: string;
  fkCountryId: number;
  agreedPrivacyPolicy?: boolean;
}