import React, { useState } from "react";
import { MenuItem, Menus } from "./Menus";
import Link from "next/link";

interface NavSmProps {
	showMenu: boolean;
	closeMenu?(): void;
}

const NavSm: React.FC<NavSmProps> = ({ showMenu, closeMenu }: NavSmProps) => {
	const [menus, setMenusState] = useState<Array<MenuItem>>(Menus);

	const collapseFirst = (i: number, state: string) => {
		setMenusState(
			[...menus].map((x, y) => {
				x.selected = !!(i == y) && !!(state == "open");
				return x;
			})
		);
	};

	const collapseSecond = (i: number, j: number, state: string) => {
		setMenusState(
			[...menus].map((m, index) => {
				if (index == i) {
					m.children = m.children?.map((x, y) => {
						x.selected = !!(j == y) && !!(state == "open");
						return x;
					});
				}
				return m;
			})
		);
	};

	const collapseThird = (i: number, j: number, k: number, state: string) => {
		setMenusState(
			[...menus].map((a, x) => {
				if (x == i) {
					a.children = a.children?.map((b, y) => {
						if (j == y) {
							b.children = b.children?.map((c, z) => {
								c.selected = !!(z == k) && !!(state == "open");
								return c;
							});
						}
						return b;
					});
				}
				return a;
			})
		);
	};

	const collapseForth = (
		i: number,
		j: number,
		k: number,
		l: number,
		state: string
	) => {
		setMenusState(
			[...menus].map((a, x) => {
				if (x == i) {
					a.children = a.children?.map((b, y) => {
						if (j == y) {
							b.children = b.children?.map((c, z) => {
								if (z == k) {
									c.children = c.children?.map((d, q) => {
										d.selected =
											!!(l == q) && !!(state == "open");
										return d;
									});
								}
								return c;
							});
						}
						return b;
					});
				}
				return a;
			})
		);
	};

	const checkShouldMenuClose = (menu: MenuItem) => {
		if (menu.url?.length) {
			closeMenu && closeMenu();
		}
	};

	return (
		<div className={`mobile-menu ${showMenu ? "open" : ""}`}>
			<ul className="menu-inner">
				{/* First menu */}
				{menus.map((item, i) => (
					<li className="menu-list" key={"first_" + i}>
						<Link
							href={item.url}
							className="nav-link"
							onClick={() =>
								item.children?.length
									? collapseFirst(i, "open")
									: checkShouldMenuClose(item)
							}
						>
							{item.name}
							{item.children?.length && (
								<span className="icon">
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
						{/* Second Child */}
						<ul
							className={`sm-sub-menu ${item.selected ? "open" : ""
								}`}
						>
							<li className="back-button">
								<Link
									href={item.url}
									className="flex items-center"
									onClick={() => collapseFirst(i, "close")}
								>
									{item.name}
									<span className="icon">
										<svg
											width="8"
											viewBox="0 0 6 10"
											fill="currentColor"
										>
											<use href="/images/sprite.svg#svg-chevron-right"></use>
										</svg>
									</span>
								</Link>
							</li>
							{item.children?.map((child, j) => (
								<li key={"second_" + i + "_" + j}>
									<Link
										href={child.url}
										className="nav-link"
										onClick={() =>
											child.children?.length
												? collapseSecond(i, j, "open")
												: checkShouldMenuClose(child)
										}
									>
										{child.name}
										{child.children?.length && (
											<span className="icon">
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
									{/* 3rd menu  */}
									<ul
										className={`sm-sub-menu ${child.selected ? "open" : ""
											}`}
									>
										<li className="back-button">
											<Link
												href={child.url}
												className="flex items-center"
												onClick={() =>
													collapseSecond(
														i,
														j,
														"close"
													)
												}
											>
												{child.name}
												<span className="icon">
													<svg
														width="8"
														viewBox="0 0 6 10"
														fill="currentColor"
													>
														<use href="/images/sprite.svg#svg-chevron-right"></use>
													</svg>
												</span>
											</Link>
										</li>
										{child.children?.map(
											(thirdChild, k) => (
												<li
													key={
														"third_" +
														i +
														"_" +
														j +
														"_" +
														k
													}
												>
													<Link
														href={thirdChild.url}
														className="nav-link"
														onClick={() =>
															thirdChild.children
																?.length
																? collapseThird(
																	i,
																	j,
																	k,
																	"open"
																)
																: checkShouldMenuClose(
																	thirdChild
																)
														}
													>
														{thirdChild.name}
														{thirdChild.children
															?.length && (
																<span className="icon">
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

													{/* Forth Child */}
													<ul
														className={`sm-sub-menu ${thirdChild.selected
																? "open"
																: ""
															}`}
													>
														<li className="back-button">
															<Link
																href={
																	thirdChild.url
																}
																className="flex items-center"
																onClick={() =>
																	collapseThird(
																		i,
																		j,
																		k,
																		"close"
																	)
																}
															>
																{
																	thirdChild.name
																}
																<span className="icon">
																	<svg
																		width="8"
																		viewBox="0 0 6 10"
																		fill="currentColor"
																	>
																		<use href="/images/sprite.svg#svg-chevron-right"></use>
																	</svg>
																</span>
															</Link>
														</li>
														{thirdChild.children?.map(
															(
																fourthChild,
																l
															) => (
																<li
																	key={
																		"forth_" +
																		i +
																		"_" +
																		j +
																		"_" +
																		k +
																		"_" +
																		l +
																		"_"
																	}
																>
																	<Link
																		href={
																			fourthChild.url
																		}
																		className="nav-link"
																		onClick={() =>
																			fourthChild
																				.children
																				?.length
																				? collapseForth(
																					i,
																					j,
																					k,
																					l,
																					"open"
																				)
																				: checkShouldMenuClose(
																					fourthChild
																				)
																		}
																	>
																		{
																			fourthChild.name
																		}
																		{fourthChild
																			.children
																			?.length && (
																				<span className="icon">
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
																	{/* Fifth Child */}
																	<ul
																		className={`sm-sub-menu ${fourthChild.selected
																				? "open"
																				: ""
																			}`}
																	>
																		<li className="back-button z-50">
																			<Link
																				href={
																					fourthChild.url
																				}
																				className="flex items-center"
																				onClick={() =>
																					collapseForth(
																						i,
																						j,
																						k,
																						l,
																						"close"
																					)
																				}
																			>
																				{/* Back To Forth */}
																				{
																					fourthChild.name
																				}
																				<span className="icon">
																					<svg
																						width="8"
																						viewBox="0 0 6 10"
																						fill="currentColor"
																					>
																						<use href="/images/sprite.svg#svg-chevron-right"></use>
																					</svg>
																				</span>
																			</Link>
																		</li>
																		{fourthChild.children?.map(
																			(
																				fifthChild,
																				m
																			) => (
																				<li
																					key={
																						"fifth_" +
																						i +
																						"_" +
																						j +
																						"_" +
																						k +
																						"_" +
																						l +
																						"_" +
																						m
																					}
																				>
																					<Link
																						href={
																							fifthChild.url
																						}
																						className="nav-link"
																						onClick={() =>
																							checkShouldMenuClose(
																								fifthChild
																							)
																						}
																					>
																						{
																							fifthChild.name
																						}
																					</Link>
																				</li>
																			)
																		)}
																	</ul>
																</li>
															)
														)}
													</ul>
												</li>
											)
										)}
									</ul>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NavSm;
