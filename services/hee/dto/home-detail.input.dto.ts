export interface HomeDetailDto {
  houseTypeId: number;
  yearBuiltId: number;
  noOfStoreys: number;
  floorArea: number;
  primaryHeatSourceId: number;
  heatSourceId: number;
  berId: number;
  selectedImageGuId?: string;
  noPhotoChecked: boolean;
  imageFileUrl?: string;
  houseTypeName?: string;
  houseThumbnail?: string;
}
