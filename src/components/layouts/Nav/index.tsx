import AppConst from "@config/app.const";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLarge from "./NavLarge";
import NavSm from "./NavSm";

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
	const [isShowing, setIsShowing] = useState(false);
	return (
		<header className="app-header">
			<div className="app-header-top py-[10px]">
				<div className="mx-auto max-w-container justify-center px-[16px]">
					<div className="w-full">
						<div className="contact-info flex sm:justify-end justify-between">
							<a
								className="flex justify-end items-center sm:mr-[50px]"
								href="mailto:info@churchfieldhomeservices.ie"
							>
								<span className="sm:mr-[10px] mr-[5px] icon">
									<svg width="15" viewBox="0 0 13 9" fill="currentColor">
										<use href="/images/sprite.svg#svg-envelope-outline"></use>
									</svg>
								</span>
								info@churchfieldhomeservices.ie
							</a>
							<a
								className="flex justify-end items-center"
								href="tel:+8801941091733"
							>
								<span className="sm:mr-[10px] mr-[5px] icon">
									<svg width="14" viewBox="0 0 12 13" fill="currentColor">
										<use href="/images/sprite.svg#svg-phone-outline"></use>
									</svg>
								</span>
								01 253 0502
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="app-header-menu bg-[#F8F8F8] py-4 xl:py-0">
				<div className="mx-auto max-w-container justify-center px-[16px]">
					<nav className="w-full flex justify-between items-center">
						<div className="nabbar-brand">
							<div className="flex items-center">
								<Link
									className="sm:mr-[35px] mr-[12px] sm:w-[182px] w-[135px]"
									href="/"
								>
									<Image
										src={AppConst.assetsBaseUrl + "logo.webp"}
										alt="CHS-Website"
										width={0}
										height={0}
										className="w-full h-auto"
										sizes="100vw"
									></Image>
								</Link>
								<div className="customer">
									<p className="flex items-center">
										<span className="icon mr-2">
											<svg
												className="inline-block"
												width="8"
												viewBox="0 0 8 7"
												fill="currentColor"
											>
												<use href="/images/sprite.svg#svg-check"></use>
											</svg>
										</span>
										<small>
											We’ve helped
											<span> 4,950</span> customers
										</small>
									</p>
								</div>
							</div>
							<div className="flex">
								<Link
									className="btn btn-primary small !min-w-[180px] mr-6 !hidden sm:!block tablet-button"
									href="./home-energy-estimate"
									target="_blank"
								>
									GET AN ESTIMATE
								</Link>

								<button
									type="button"
									role="button"
									aria-label="Toggle-button"
									className="toggle-button"
									onClick={() => setIsShowing(!isShowing)}
								>
									{isShowing ? (
										<svg width="26" viewBox="0 0 26 27" fill="#0F2F54">
											<use href="/images/sprite.svg#svg-close"></use>
										</svg>
									) : (
										<svg width="32" viewBox="0 0 32 22" fill="none">
											<use href="/images/sprite.svg#svg-union"></use>
										</svg>
									)}
								</button>
							</div>
						</div>
						<NavLarge
							showMenu={isShowing}
							closeMenu={() => setIsShowing(false)}
						/>
						{/* Desktop Menus */}
						<NavSm showMenu={isShowing} closeMenu={() => setIsShowing(false)} />
						{/* Mobile Device Menus */}
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Nav;
