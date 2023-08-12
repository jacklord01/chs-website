import React from "react";

interface PlanProps {}

const Plan: React.FC<PlanProps> = () => {
	return (
		<div className="app-service pb-[95px]">
			<div className="container mx-auto px-[16px]">
				<div className="bg-white py-[60px] px-[50px] m-auto max-w-[1100px]">
					<h2 className="text-[#0D0D0D] text-[21px]">
						Our upgrade plans include recommendations that take into
						consideration items such as:
					</h2>
					<ul className="plan-list">
						<li>Both the current and future needs of the occupants.</li>
						<li>
							Costs of the interventions, future monetary savings and other
							benefits such as improved comfort and environmental impacts.{" "}
						</li>
						<li>
							Future improvement opportunities such as future planned heating
							upgrades and planned extension and renovation works.{" "}
						</li>
						<li>
							Identifying opportunities for integrating energy measures with
							other building work as required.
						</li>
						<li>
							Taking into account of any adverse effects as a result of
							incorporating retrofit measures such as improved airtightness in
							the absence of enhanced ventilation.
						</li>
						<li>
							Considering the likely level of disruption involved in carrying
							out the works.
						</li>
						<li>
							Most of all, our recommendations take into account the value for
							money for the homeowner as a result of completing the works.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Plan;
