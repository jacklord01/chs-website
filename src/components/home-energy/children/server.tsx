import AppConst from "@config/app.const";
import Image from "next/image";
import React from "react";

interface ServerProps {}

const Server: React.FC<ServerProps> = () => {
	return (
		<div className="app-server lg:pt-[50px] pt-[150px] sm:pt-[90px]">
			<div className="container mx-auto px-[16px]">
				<div className="app-server-inner bg-white">
					<div className="lg:grid lg:grid-cols-12">
						<div className="lg:col-span-4 lg:order-last">
							<div className="app-server-img lg:ml-auto mx-auto lg:mr-0">
								<Image
									src={
										AppConst.assetsBaseUrl +
										"home-energy/server.webp"
									}
									className="w-[310px] h-auto lg:mt-[-100px]"
									alt="House Type"
									loading="lazy"
									width={310}
									height={0}
								/>
							</div>
						</div>
						<div className="lg:col-span-8 items-center lg:flex">
							<div className="app-server-text lg:pl-[60px] pl-[12px] lg:py-[55px] py-[24px] lg:pr-[0px] pr-[12px]">
								<p>
									Upgrading your home&#39;s energy efficiency
									can often be an expensive and daunting
									prospect. You want to ensure you invest your
									money in the right way that will deliver the
									best results but often you end up speaking
									to multiple professionals who sometimes can
									provide conflicting advice. Our Home Energy
									Assessment Report is designed to take a
									holistic review of your home&#39;s energy
									efficiency and provide you with a sensible
									step-by-step roadmap to an energy-efficient
									home.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="app-server-details text-center mt-[50px]">
					<p>
						Our Home Energy Assessment Report will clearly explain
						the best way to approach your retrofit and how to
						understand your current BER, including estimating the
						annual energy costs for your home. The report will set
						out a cost-effective fabric and ventilation upgrade plan
						to achieve a minimum B2 BER while also future-proofing
						your home by making it Heat Pump Ready for when the time
						comes to upgrade your heating system. We will also
						include options to include Solar PV to reduce your
						residual electricity costs.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Server;
