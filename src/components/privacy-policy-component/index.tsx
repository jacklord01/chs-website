import React, { useEffect, useRef, useState } from "react";

import "slick-carousel/slick/slick.css";
import AppConst from "@config/app.const";
import PrivacyPolicyContent from "./children/privacy-policy-content";
import AppBannerTwo from "../common/banner-two";
import FollowUs from "../common/follow-us";
import ConsultationModal from "../common/consultation-modal";

interface PrivacyPolicyProps {}

const PrivacyPolicyComponent: React.FC<PrivacyPolicyProps> = () => {
	const childRef = useRef<{ handleClick: () => void } | null>(null);
	return (
		<div className="app-home">
			<ConsultationModal ref={childRef} />
			<AppBannerTwo
				bannerImage={
					AppConst.assetsBaseUrl + "privacy-policy/privacy-policy-new.webp"
				}
				title="Privacy Policy"
			/>
			<PrivacyPolicyContent />

			<FollowUs />
		</div>
	);
};

export default PrivacyPolicyComponent;
