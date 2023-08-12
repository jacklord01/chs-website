import React, { Fragment } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<Fragment>
			<Nav />
			{children}
			<Footer />
		</Fragment>
	);
};

export default Layout;
