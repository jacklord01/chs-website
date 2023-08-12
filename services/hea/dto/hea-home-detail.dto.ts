export interface HeaHomeDetailDto {
  houseTypeId: number;
  houseTypeName?: string;
  houseThumbnail?: string;
  noOfStoreys: number;
  hasExtention: number;
  hasAtticConversion: number;
  selectedImageGuId?: string;
  noPhotoChecked: boolean;
  imageFileUrl?: string;
}
