import React, { useState } from "react";
import dynamic from "next/dynamic";

import "slick-carousel/slick/slick.css";

const FollowUs = dynamic(() => import("../common/follow-us"));
const ContactDetails = dynamic(() => import("./contact-details"));
const FinanceOption = dynamic(() => import("./finance-options"));
const UpgradeOption = dynamic(() => import("./upgrade-options"));
const HomeDetails = dynamic(() => import("./home-details"));
const Complete = dynamic(() => import("./complete"));

import Started from "./started";

interface HeeCompomentProps {}

interface HeeTab {
  id: number;
  name: string;
  isCompleted: boolean;
}

const HeeComponent: React.FC<HeeCompomentProps> = () => {
  const [tabState, setTabState] = useState<number>(0);
  const [stepsState, setStepsState] = useState<HeeTab[]>(TabNavs);

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
            {stepsState.map((item) => (
              <li
                className={`basis-1/4 ${
                  item.isCompleted
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
      {tabState == 2 && <UpgradeOption changeTab={onTabChange} />}
      {/* {tabState == 3 && <FinanceOption changeTab={onTabChange} />} */}
      {tabState == 3 && <ContactDetails changeTab={onTabChange} />}
      {tabState == 4 && <Complete changeTab={onTabChange} />}

      <div className="lg:pt-[95px]">
        <FollowUs />
      </div>
    </div>
  );
};

export default HeeComponent;

const TabNavs: HeeTab[] = [
  { name: "Home Details", id: 1, isCompleted: false },
  { name: "UPGRADE OPTIONS", id: 2, isCompleted: false },
  // { name: "FINANCE OPTIONS", id: 3, isCompleted: false },
  { name: "CONTACT DETAILS", id: 3, isCompleted: false },
];
