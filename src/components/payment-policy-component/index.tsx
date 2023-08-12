import React, { useEffect, useRef, useState } from "react";

import "slick-carousel/slick/slick.css";
import AppConst from "@config/app.const";
import AppBannerTwo from "../common/banner-two";
import PaymentPolicyContent from "./children/payment-policy-content";
import FollowUs from "../common/follow-us";
import ConsultationModal from "../common/consultation-modal";

interface PaymentPolicyProps {}

const PaymentPolicyComponent: React.FC<PaymentPolicyProps> = () => {
	const childRef = useRef<{ handleClick: () => void } | null>(null);
	return (
		<div className="app-home">
			<ConsultationModal ref={childRef} />
			<AppBannerTwo
				bannerImage={
					AppConst.assetsBaseUrl + "payment-policy/payment-policy-new.webp"
				}
				title="Payment Policy"
			/>
			<PaymentPolicyContent />
			<FollowUs />
		</div>
	);
};

export default PaymentPolicyComponent;
