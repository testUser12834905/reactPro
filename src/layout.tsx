import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";

const RootLayout = () => {
	return (
		<header className="App-header">
			<Navbar />
			<Outlet />
		</header>
	);
};

export default RootLayout;
