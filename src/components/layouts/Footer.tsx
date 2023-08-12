import React from "react";
import Image from "next/image";
import Link from "next/link";

import AppConst from "@config/app.const";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
	return (
		<footer className="app-footer">
			<div className="app-footer-widgets pt-[50px] sm:pb-[100px] pb-[26px]">
				<div className="container mx-auto px-[15px]">
					<div className="sm:flex flex-wrap mx-[-15px]">
						<div className="lg:w-1/5 md:w-1/3 mb-[24px] px-[15px]">
							<div className="app-footer-widget text-center sm:text-left link-list">
								<h2 className="f-widgets-title mb-[10px]">Services</h2>
								<ul className="navbar-nav">
									<li>
										<Link href="/home-energy-assessment">
											Home Energy Assessment
										</Link>
									</li>
									<li>
										<Link href="/one-stop-shop">One Stop Shop Service</Link>
									</li>
									<li>
										<Link href={AppConst.wpSiteUrl + "solar-pv-thermal-panels"}>
											Solar PV Installation
										</Link>
									</li>
									<li>
										<Link href={AppConst.wpSiteUrl + "heat-pumps"}>
											Renewable Heating
										</Link>
									</li>
									<li>
										<Link href="/survey-quotation-calculate">
											Survey Quotation Calculator
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="lg:w-1/6  md:w-1/3 mb-[24px] px-[15px]">
							<div className="app-footer-widget  text-center sm:text-left link-list">
								<h2 className="f-widgets-title mb-[10px]">Company</h2>
								<ul className="navbar-nav">
									<li>
										<Link href={AppConst.wpSiteUrl + "our-company"}>
											About Us
										</Link>
									</li>
									<li>
										<Link href={AppConst.wpSiteUrl + "recent-works"}>
											Our Experience
										</Link>
									</li>
									<li>
										<Link href={AppConst.wpSiteUrl + "accreditation/"}>
											Accreditation
										</Link>
									</li>
									<li>
										<Link href={AppConst.wpSiteUrl + "contact-us/"}>
											Contact Us
										</Link>
									</li>
									<li>
										<Link href={AppConst.wpSiteUrl + "faq/"}>FAQ</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="lg:w-1/4  md:w-1/3 mb-[24px] px-[15px]">
							<div className="app-footer-widget  text-center sm:text-left link-list">
								<h2 className="f-widgets-title mb-[10px]">Grants & Finance</h2>
								<ul className="navbar-nav">
									<li>
										<Link href="/seai-better-energy-home-scheme">
											Individual Energy Upgrade Grants
										</Link>
									</li>
									<li>
										<Link href="/seai-better-energy-home-scheme">
											One Stop Shop Service
										</Link>
									</li>
									<li>
										<Link href="/seai-better-energy-home-scheme">
											Fully Funded Energy Upgrade
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="lg:w-1/5 md:w-1/3  mb-[24px] px-[15px]">
							<div className="app-footer-widget  text-center sm:text-left link-list">
								<h2 className="f-widgets-title mb-[10px]">More</h2>
								<ul className="navbar-nav">
									<li>
										<Link href="/terms-conditions">Terms & Conditions</Link>
									</li>
									<li>
										<Link href="/privacy-policy">Privacy Policy & Cookies</Link>
									</li>
									<li>
										<Link href="/payment-policy/">Payment Policy</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="lg:w-1/6 md:w-1/2 mb-[24px] px-[15px]">
							<div className="app-footer-widget  text-center sm:text-left link-image">
								<h2 className="f-widgets-title mb-[10px]">Follow Us</h2>
								<ul className="navbar-nav mr-auto flex flex-row justify-center sm:justify-start">
									<li>
										<Link href="https://www.facebook.com/ChurchfieldHomeServices">
											<Image
												src={AppConst.assetsBaseUrl + "social/facebook.webp"}
												alt="Facebook"
												width={30}
												height={30}
												loading="lazy"
											></Image>
										</Link>
									</li>
									<li>
										<Link href="https://www.linkedin.com/company/churchfield-home-services/">
											<Image
												src={AppConst.assetsBaseUrl + "social/linkedin.webp"}
												alt="Linkedin"
												width={30}
												height={30}
												loading="lazy"
											></Image>
										</Link>
									</li>
									<li>
										<Link href="https://instagram.com/churchfieldhomeservices">
											<Image
												src={AppConst.assetsBaseUrl + "social/instagram.webp"}
												alt="Instagram"
												width={30}
												height={30}
												loading="lazy"
											></Image>
										</Link>
									</li>
									<li>
										<Link href="https://twitter.com/cf_homeservices">
											<Image
												src={AppConst.assetsBaseUrl + "social/twitter.webp"}
												alt="Twitter"
												width={30}
												height={30}
												loading="lazy"
											></Image>
										</Link>
									</li>
									<li>
										<Link href="https://www.youtube.com/@churchfieldhomeservices8712">
											<Image
												src={AppConst.assetsBaseUrl + "social/youtube.webp"}
												alt="Youtube"
												width={30}
												height={30}
												loading="lazy"
											></Image>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="app-footer-copyright py-[14px]">
				<div className="container mx-auto text-center">
					<p>© {new Date().getFullYear()} | Churchfield Home Services </p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
