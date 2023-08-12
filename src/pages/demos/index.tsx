import React, { useState } from "react";

const buttonCode = `
  <ul className="flex flex-wrap">
    <li className="mr-2">
      <button className="btn btn-primary">Read More</button>
    </li>
    <li className="mr-2">
      <button className="btn btn-white secondary-hover">Read More</button>
    </li>
    <li className="mr-2">
      <button className="btn btn-dark secondary-hover">Read More</button>
    </li>
    <li>
      <button className="btn btn-dark outline secondary-hover">Read More</button>
    </li>
    <li className="mr-2">
      <button className="btn btn-secondary secondary-hover uppercase">Read More</button>
      <br />
      <div className="mt-1">btn btn-dark outline secondary-hover</div>
    </li>
    <li>
      <button className="btn btn-secondary secondary-hover uppercase small">Read More</button>
      <br />
      <div className="mt-1">btn btn-secondary secondary-hover uppercase small</div>
    </li>
  </ul>
`;

const Button = () => {
	const [TabMenu, setTabMenu] = useState<number>(1);
	return (
		<div className="py-[100px] border-t">
			<div className="mx-auto max-w-container justify-center">
				<ul className=" demo-tab-menu navbar-nav flex">
					{TopTabMenu.map(item => (
						<li
							className={`nav-item ${TabMenu == item.id ? "active" : ""}`}
							key={item.id}
							onClick={() => setTabMenu(item.id)}
						>
							{item.name}
						</li>
					))}
				</ul>

				{TabMenu == 1 && (
					<div className="buttons mt-2">
						<ul className="flex flex-wrap">
							<li className="mr-2">
								<button className="btn btn-primary">Read More</button>
								<br />
								<div className="mt-1">btn btn-primary</div>
							</li>
							<li className="mr-2">
								<button className="btn btn-white secondary-hover">
									Read More
								</button>
								<br />
								<div className="mt-1">btn btn-white secondary-hover</div>
							</li>
							<li className="mr-2">
								<button className="btn btn-white outline secondary-hover">
									Read More
								</button>
								<br />
								<div className="mt-1">btn btn-white secondary-hover</div>
							</li>
							<li className="mr-2">
								<button className="btn btn-dark secondary-hover">
									Read More
								</button>
								<br />
								<div className="mt-1">btn btn-dark secondary-hover</div>
							</li>
							<li className="mr-2">
								<button className="btn btn-dark outline secondary-hover">
									Read More
								</button>
								<br />
								<div className="mt-1">
									btn btn-dark outline <br /> secondary-hover
								</div>
							</li>
							<li className="mr-2">
								<button className="btn btn-secondary secondary-hover uppercase">
									Read More
								</button>
								<br />
								<div className="mt-1">
									btn btn-dark outline <br /> secondary-hover
								</div>
							</li>
							<li>
								<button className="btn btn-secondary secondary-hover uppercase small">
									Read More
								</button>
								<br />
								<div className="mt-1">
									btn btn-secondary <br /> secondary-hover uppercase small
								</div>
							</li>
						</ul>
					</div>
				)}
				{TabMenu == 2 && (
					<pre className="preClass">
						<React.Fragment>{buttonCode}</React.Fragment>
					</pre>
				)}
			</div>
		</div>
	);
};

export default Button;

const TopTabMenu: Array<any> = [
	{ name: "View", id: 1 },
	{ name: "Edit", id: 2 },
];
