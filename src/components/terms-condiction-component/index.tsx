import React, { useEffect, useRef, useState } from "react";

import "slick-carousel/slick/slick.css";
import AppConst from "@config/app.const";
import AppBannerTwo from "../common/banner-two";
import TermsConditionContent from "./children";
import FollowUs from "../common/follow-us";
import ConsultationModal from "../common/consultation-modal";

interface TermsConditionProps {}

const TermsConditionComponent: React.FC<TermsConditionProps> = () => {
	const childRef = useRef<{ handleClick: () => void } | null>(null);
	return (
		<div className="app-home">
			<ConsultationModal ref={childRef} />
			<AppBannerTwo
				bannerImage={
					AppConst.assetsBaseUrl + "terms-condition/terms-condition-new.webp"
				}
				title="Terms & Conditions"
			/>
			<TermsConditionContent />
			<FollowUs />
		</div>
	);
};

export default TermsConditionComponent;
