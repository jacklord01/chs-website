export interface InitDataOutputDto {
  houseTypeChsList: HouseTypeDto[];
  berChsList: BERObject[];
  primaryHeatSourcList: PrimaryHeatSource[];
}

export interface PrimaryHeatSource {
  id: number;
  name: string;
  isDefault: boolean;
  centralHeatingTypeId: number;
  heatSources: HeatSource[];
}

export interface HeatSource {
  id: number;
  isDefault: boolean;
  name: string;
}

export interface BERObject {
  id: number;
  isDefault: boolean;
  berName: string;
  medianBerValue: number;
}

export interface HouseTypeDto {
  id: number;
  houseTypeName: string;
  isDefault: boolean;
  floorArea: number;
  thumbnailPath: string;
}
