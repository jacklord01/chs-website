import React from "react";

import "react-toastify/dist/ReactToastify.css";
import ConsultationForm from "../consultation-form";

interface ConsultationRequestProps {}

const ConsultationRequest: React.FC<ConsultationRequestProps> = () => {
	return (
		<>
			<div className="app-request-form bg-[#fff] py-[50px] lg:py-0">
				<div className="container mx-auto px-[16px]  relative">
					<div className="lg:flex flex-row  lg:items-center">
						<div className="lg:basis-1/2 lg:pb-0 pb-[50px]">
							<div className="app-form-text">
								<h2>Take Your First Step</h2>
								<h1>
									Request a <br /> Free No-Obligation <br />{" "}
									Consultation Today!
								</h1>
							</div>
						</div>
						<div className="lg:basis-1/2">
							<div className="form-box lg:relative py-[48px] px-[16px] sm:px-[40px] bg-[#013285] lg:mt-[-60px]">
								<ConsultationForm />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default ConsultationRequest;
