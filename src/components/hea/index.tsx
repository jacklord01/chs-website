import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Started from "./started";
import Complete from "./complete";

const HomeDetails = dynamic(() => import('./home-details'));
const SurveyQuotation = dynamic(() => import('./survey-quotation'));
const ContactDetails = dynamic(() => import('./contact-details'));
const FollowUs = dynamic(() => import("../common/follow-us"));

import "slick-carousel/slick/slick.css";

interface HeaCompomentProps { }

interface HeaTab {
	id: number;
	name: string;
	isCompleted: boolean;
}

const HeaComponent: React.FC<HeaCompomentProps> = () => {
	const [tabState, setTabState] = useState<number>(0);
	const [stepsState, setStepsState] = useState<HeaTab[]>(TabNavs);

	const onTabChange = (stepIndex: number) => {
		setTabState(stepIndex);
		setStepsState(
			[...stepsState].map((step, index) => {
				step.isCompleted = index < stepIndex - 1;
				return step;
			})
		);
	};

	return (
		<div className="app-hee bg-[#f3f3f3] pt-[50px]">
			<div className="container mx-auto px-[16px]">
				<div className="tab-step mb-[40px]" aria-hidden="true">
					<ul className="tab-step-list flex flex-row justify-center">
						{stepsState.map(item => (
							<li
								className={`basis-1/4 ${item.isCompleted
									? "done"
									: item.id == tabState
										? "active"
										: ""
									}`}
								key={item.id}
							>
								<span>{item.id}</span> {item.name}
							</li>
						))}
					</ul>
				</div>
			</div>
			{tabState == 0 && <Started changeTab={onTabChange} />}
			{tabState == 1 && <HomeDetails changeTab={onTabChange} />}
			{tabState == 2 && <SurveyQuotation changeTab={onTabChange} />}
			{tabState == 3 && <ContactDetails changeTab={onTabChange} />}
			{tabState == 4 && <Complete changeTab={onTabChange} />}

			<div className="lg:pt-[95px]">
				<FollowUs />
			</div>
		</div>
	);
};

export default HeaComponent;

const TabNavs: HeaTab[] = [
	{ name: "Home Details", id: 1, isCompleted: false },
	{ name: "Survey Quotation", id: 2, isCompleted: false },
	{ name: "CONTACT DETAILS", id: 3, isCompleted: false },
];
