import { useState } from "react";
import { MenuItem, Menus } from "./Menus";
import Link from "next/link";

interface NavProps {
	showMenu: boolean;
	closeMenu?(): void;
}

const NavLarge: React.FC<NavProps> = ({ showMenu, closeMenu }: NavProps) => {
	const [menus, setMenus] = useState<Array<MenuItem>>(Menus);
	const [thirdLevelMenu, setThirdLevelMenu] = useState<Array<MenuItem>>([]);
	const [forthLevelMenu, setForthLevelMenu] = useState<Array<MenuItem>>([]);
	const [fifthLevelMenu, setFifthLevelMenu] = useState<Array<MenuItem>>([]);

	const closeMainMenu = (mainMenuid: number) => {
		setMenus(
			[...menus].map((m, index) => {
				if (mainMenuid == index) {
					m.selected = false;
				}
				return m;
			})
		);
	};

	return (
		<div className="navbar-collapse">
			<ul className="main-menu navbar-nav flex items-center">
				{menus.map((item, i) => (
					<li
						key={"first_" + i}
						className={`dropdown md:py-[33px] py-[15px] ${item.selected ? "active" : ""
							}`}
					>
						<Link
							href={item.url ? item.url : "#!"}
							onClick={() => {
								setMenus(
									[...menus].map((m, index) => {
										if (i === index) m.selected = !m.selected;
										else m.selected = false;
										return m;
									})
								);
								setThirdLevelMenu([]);
								setForthLevelMenu([]);
								setFifthLevelMenu([]);
							}}
						>
							{item.name}
							{!item.url && (
								<span className="icon ml-2 first-arrow">
									<svg
										className="inline-block"
										width="10"
										viewBox="0 0 10 6"
										fill="currentColor"
									>
										<use href="/images/sprite.svg#svg-chevron-down"></use>
									</svg>
								</span>
							)}
						</Link>
						<div
							className={`sub-menu ${item.selected ? "show-menu-dropdown" : ""
								}`}
							onMouseLeave={() => closeMainMenu(i)}
						>
							<div className="max-w-container mx-auto px-[16px]">
								<div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 bg-white">
									{item.children && (
										<ul className="sub-menu-list bg-[#204971]">
											{item.children.map((menu, j) => (
												<li
													key={"key_" + i + j}
													className={menu.selected ? "active" : ""}
													onClick={() => {
														setThirdLevelMenu(menu.children || []);
														setForthLevelMenu([]);
														setFifthLevelMenu([]);

														if (menu.children) {
															setMenus(
																[...menus].map((m, index) => {
																	if (index == i) {
																		m.children = m.children?.map((x, y) => {
																			if (j === y) x.selected = !x.selected;
																			return x;
																		});
																	}
																	return m;
																})
															);
														} else {
															closeMainMenu(i);
														}
													}}
												>
													<Link
														href={menu.url ? menu.url : "#!"}
														className="flex items-center"
													>
														{menu.name}
														{menu.children && (
															<span className="icon ml-[10px]">
																<svg
																	width="6"
																	viewBox="0 0 6 10"
																	fill="currentColor"
																>
																	<use href="/images/sprite.svg#svg-chevron-right"></use>
																</svg>
															</span>
														)}
													</Link>
												</li>
											))}
										</ul>
									)}
									{!!thirdLevelMenu.length && (
										<ul className="sub-menu-second">
											{thirdLevelMenu.map((menu, k) => (
												<li
													// className={menu.selected ? "active" : ""}
													key={"third_" + k}
													onClick={() => {
														setForthLevelMenu(menu.children || []);
														setFifthLevelMenu([]);
														setThirdLevelMenu(
															[...thirdLevelMenu].map((x, y) => {
																if (y === k) {
																	x.selected = true;
																	if (!x.children) {
																		closeMainMenu(i);
																	}
																}
																return x;
															})
														);
													}}
												>
													<Link
														className="flex items-center"
														href={menu.url ? menu.url : "#!"}
													>
														{menu.name}
														{menu.children && (
															<span className="icon ml-[10px]">
																<svg
																	width="6"
																	viewBox="0 0 6 10"
																	fill="currentColor"
																>
																	<use href="/images/sprite.svg#svg-chevron-right"></use>
																</svg>
															</span>
														)}
													</Link>
												</li>
											))}
										</ul>
									)}
									{!!forthLevelMenu.length && (
										<ul className="sub-menu-third">
											{forthLevelMenu.map((menu, l) => (
												<li
													// className={menu.selected ? "active" : ""}
													key={"forth_" + l}
													onClick={() => {
														setFifthLevelMenu(menu.children || []);

														setForthLevelMenu(
															[...forthLevelMenu].map((x, y) => {
																if (y === l) {
																	x.selected = true;
																	if (!x.children) {
																		closeMainMenu(i);
																	}
																}
																return x;
															})
														);
													}}
												>
													<Link
														className="flex items-center"
														href={menu.url ? menu.url : "#!"}
													>
														{menu.name}
														{menu.children && (
															<span className="icon ml-[10px]">
																<svg
																	width="6"
																	viewBox="0 0 6 10"
																	fill="currentColor"
																>
																	<use href="/images/sprite.svg#svg-chevron-right"></use>
																</svg>
															</span>
														)}
													</Link>
												</li>
											))}
										</ul>
									)}
									{!!fifthLevelMenu.length && (
										<ul className="sub-menu-four">
											{fifthLevelMenu.map((menu, m) => (
												<li key={"fifth_" + m}>
													<Link className="flex items-center" href={menu.url}>
														{menu.name}
													</Link>
												</li>
											))}
										</ul>
									)}
								</div>
							</div>
						</div>
					</li>
				))}
				<li className="xl:!ml-[40px]">
					<Link
						className="btn btn-primary small !min-w-[180px]"
						href="./home-energy-estimate"
						target="_blank"
					>
						GET AN ESTIMATE
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavLarge;
