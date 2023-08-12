import { EnumRequestOrigin } from "@services/utility/types/request-origin.enum";
import utilService from "@services/utility/util.service";
import React, { useEffect, useState } from "react";

interface MobileVerificationProps {
	phone: string;
	requestOrigin: EnumRequestOrigin;
	onOtpVerified(guId: string): void
}

const MobileVerification: React.FC<MobileVerificationProps> = ({ phone, requestOrigin, onOtpVerified }: MobileVerificationProps) => {

	const [submittingState, setSubmittingState] = useState<boolean>(false);
	const [verificationGuId, setVerificationGuId] = useState<string | null>(null);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [otp, setOtp] = useState<string>('');
	const [resendCountdown, setResendCountdown] = useState(60);

	useEffect(() => {
		const sendOtp = async () => {
			try {
				const output = await utilService.sendOtp({ phone, requestOrigin });
				setVerificationGuId(output);
			} catch (error) {
				console.log("OTP send Error", error);
			}
		}
		sendOtp();
	}, [phone, requestOrigin]);

	useEffect(() => {
		let timer: any = null;

		if (resendCountdown > 0) {
			timer = setInterval(() => {
				setResendCountdown((prevCountdown) => prevCountdown - 1);
			}, 1000);
		}

		return () => {
			clearInterval(timer);
		};
	}, [resendCountdown]);

	const onOtpSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (verificationGuId && otp && otp.length) {
			try {
				setSubmittingState(true);
				setErrorMessage(null);

				const output = await utilService.verifyOtp({ verificationGuId, otp });
				if (output) {
					onOtpVerified(verificationGuId);
				}
			} catch (error: any) {
				error?.message && setErrorMessage(error.message);
			} finally {
				setSubmittingState(false);
			}
		}
	}

	const resendCode = async () => {
		if (verificationGuId && resendCountdown == 0) {
			try {
				setSubmittingState(true);
				setErrorMessage(null);
				setOtp('');

				const output = await utilService.resendOtp(verificationGuId);
				if (output) {
					setResendCountdown(60);
				}
			} catch (error: any) {
				error?.message && setErrorMessage(error.message);
			} finally {
				setSubmittingState(false);
			}
		}
	}

	return (
		<div className="app-mobile-verification">
			<p className="m-auto max-w-[500px] mb-7">
				A code has been sent to the mobile number entered. Please enter this in
				the box below to complete your submission
			</p>
			<form className="form-group m-auto max-w-[390px] mb-3 flex items-center justify-center" onSubmit={onOtpSubmit}>
				<label className="form-label !m-0 !font-bold">OTP</label>
				<input className="form-control mx-4" type="text" max={6} placeholder="-" value={otp} name="otp" onChange={(event: React.FormEvent<HTMLInputElement>) => setOtp(event.currentTarget.value)} />
				<button disabled={submittingState} type="submit" className="btn btn-primary !min-w-[115px]">{submittingState ? "Verifying..." : "Submit"}</button>
			</form>
			{/* For Resend */}
			<div className="resend">
				{errorMessage && <p>{errorMessage}</p>}
				{resendCountdown > 0 ? <p> Please wait for {resendCountdown} seconds before requesting the code again.</p> : <button onClick={resendCode} className="btn btn-primary !min-w-[115px] mt-5">Resend</button>}
			</div>
		</div>
	);
};

export default MobileVerification;
