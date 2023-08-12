import { StoreUtil } from "@utils/store-util";
import React from "react";
import ActionButtons from "./action-buttons";

interface StartedProps {
	changeTab(nextStep: number): void;
}

const Started: React.FC<StartedProps> = ({ changeTab }: StartedProps) => {
	const startEstimate = (nextStepIndex: number) => {
		StoreUtil.clearStore();
		changeTab(nextStepIndex);
	};
	return (
		<div className="app-started">
			<div className="container mx-auto px-[16px]">
				<h1 className="text-[#204971] pb-[10px] sm:pb-[30px]">
					Estimate Your Cost
				</h1>
				<p>
					A quick and simple estimate can give you all the information you need
					to help you plan your retrofit journey at the early stages. It will
					give you approximate costs for the works based on your house type and
					details of grants, incentives & finance that will make it more
					affordable for you. <br /> <br />
					We will send you a detailed Estimate Report that will outline all of
					the details along with giving you a call to answer any further
					questions or queries you may have.
				</p>
				<div className="w-[220px] m-auto">
					<ActionButtons
						currentStepIndex={0}
						label_2={"Start"}
						showNext={true}
						showBack={false}
						onButtonClick={startEstimate}
					/>
				</div>
			</div>
		</div>
	);
};

export default Started;
