import { EnumRequestOrigin } from "../types/request-origin.enum";

export interface OTPInputDto {
    phone: string;
    requestOrigin: EnumRequestOrigin
}

export interface OTPVerificationInputDto {
    verificationGuId: string;
    otp: string
}