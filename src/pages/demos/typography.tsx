import React from "react";

const TypoGraphy = () => {
	return (
		<div className="py-[100px] border-t">
			<div className="mx-auto max-w-container justify-center">
				<div className="app-typography">
					<h1>
						H1 = 40px <strong>H1 = 40px</strong>
					</h1>
					<h2>H2 = 32px</h2>
					<h3>H3 = 24px</h3>
					<h4>H4 = 21px</h4>
					<h5>H5 = 18px</h5>
					<h6>H6 = 16px</h6>
					<h6>
						<small>H6 -- small = 14px</small>
					</h6>
					<p>p = 16px</p>
					<p>
						<small>p -- small = 16px</small>
					</p>
				</div>
			</div>
		</div>
	);
};

export default TypoGraphy;
