export interface Address {
  address: string;
  town: string;
  county: string;
  eirCode: string;
  country: string;
}

export interface AddressSuggestion {
  identification: string;
  addr_1: string;
  addr_2: string;
  addr_3: string;
  addr_4: string;
  addr_5: string;
  addr_6: string;
  addr_7: string;
  addr_8: string;
  addr_9: string;
  addr_10: string;
  eircode?: string;
}

export interface AddressIdentification extends AddressSuggestion {
  location: string;
  itm_location: string;
  nace_code: string;
  nace_code_description: string;
  small_area: string;
  unique: string;
}

export interface AddressBuild extends Address {
  id: string;
  fullAddress: string;
}
