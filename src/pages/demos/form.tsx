import React from "react";
const Form = () => {
	return (
		<div className="py-[100px] border-t">
			<div className="mx-auto max-w-container justify-center">
				<div className="app-form">
					<form action="#">
						<div className="flex flex-row mb-3">
							<div className="form-group basis-1/4 px-[15px]">
								<label className="form-label" htmlFor="firstName">
									First Name<span className="text-danger">*</span>
								</label>
								<input
									className="form-control"
									type="text"
									id="firstName"
									name="firstName"
									placeholder="Enter your first name"
								/>
							</div>
							<div className="form-group basis-1/4 px-[15px]">
								<label className="form-label" htmlFor="firstName">
									First Name
								</label>
								<select className="form-select">
									<option> Semi-Detached</option>
									<option> Semi-Detached</option>
								</select>
							</div>
							<div className="form-group basis-1/4 px-[15px]">
								<label className="form-label" htmlFor="firstName">
									First Name
								</label>
								<input
									className="form-control"
									type="text"
									id="firstName"
									name="firstName"
									placeholder="Enter your first name"
								/>
							</div>
							<div className="form-group basis-1/4 px-[15px]">
								<label className="form-label" htmlFor="firstName">
									First Name
								</label>
								<div className="relative">
									<input
										type="text"
										placeholder="Type here"
										className="form-control pr-[45px]"
									/>
									<span className="text-[#204970] absolute top-[12px] right-[16px]">
										m<sup>2</sup>
									</span>
								</div>
							</div>
						</div>
						<div
							className="flex flex-row py-[15px]"
							style={{ background: "#000" }}
						>
							<div className="form-group basis-1/4 px-[15px]">
								<label className="form-label text-white" htmlFor="firstName">
									First Name<span className="text-danger">*</span>
								</label>
								<input
									className="form-control white"
									type="text"
									id="firstName"
									name="firstName"
									placeholder="Enter your first name"
								/>
							</div>
							<div className="form-group basis-1/4 px-[15px]">
								<label className="form-label text-white" htmlFor="firstName">
									First Name<span className="text-danger">*</span>
								</label>
								<div className="relative">
									<input
										type="text"
										placeholder="Type here"
										className="form-control white pr-[45px]"
									/>
									<span className="text-white absolute top-[12px] right-[16px]">
										m<sup>2</sup>
									</span>
								</div>
							</div>
							<div className="form-group basis-1/4 px-[15px]">
								<label className="form-label" htmlFor="firstName">
									First Name
								</label>
								<input
									className="form-control"
									type="text"
									id="firstName"
									name="firstName"
									placeholder="Enter your first name"
								/>
							</div>
							<div className="form-group basis-1/4 px-[15px]">
								<label className="form-label" htmlFor="firstName">
									First Name
								</label>

								<div className="relative">
									<input
										type="text"
										placeholder="Type here"
										className="form-control pr-[45px]"
									/>
									<span className="text-[#204970] absolute top-[12px] right-[16px]">
										m<sup>2</sup>
									</span>
								</div>
							</div>
							<div className="form-group basis-1/4 px-[15px]">
								<label className="form-label" htmlFor="firstName">
									First Name
								</label>

								<select className="form-select white">
									<option> Semi-Detached</option>
									<option> Semi-Detached</option>
								</select>
							</div>
						</div>
						<div className="flex flex-row py-[15px] bg-[#013285] mt-4">
							<div className="form-group basis-1/4 px-[15px]">
								<label htmlFor="search" className="form-label text-white">
									Search Your Area
								</label>
								<div className="with-icon">
									<input
										type="text"
										className="form-control white"
										placeholder="Search By Eircode"
									/>
									<span className="icon">
										<svg
											width="12"
											height="13"
											viewBox="0 0 12 13"
											fill="currentColor"
										>
											<use href="/images/sprite.svg#svg-search"></use>
										</svg>
									</span>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Form;
