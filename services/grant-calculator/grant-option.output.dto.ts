export interface GrantItemsDto {
  maximumAvailableGrantValueType: number;
  maximumAvailableGrantValue: string;
  grantGroups: Array<GrantGroup>;
}

export interface GrantGroup {
  groupId: 0;
  groupName: string;
  groupDescription: string;
  itemCount: 0;
  grantItems: Array<GrantItems>;
}

export interface GrantItems {
  itemId: number;
  itemName: string;
  itemValueType: number;
  itemValue: string;
  isDefault: boolean;
}

export interface FilterParamDto {
  grantOptionId: number;
  houseTypeId: number;
  yearBuiltRange: number;
}
