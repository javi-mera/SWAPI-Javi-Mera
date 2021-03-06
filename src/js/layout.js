import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import "../styles/home.scss";

import { Home } from "./views/home";
//import { People } from "./views/demo";
//import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Content } from "./views/content";
import { Planets } from "./views/planets";
import { People } from "./views/people";
import { Navbar } from "./component/navbar";
//import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="ppal">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<Navbar />
							<Home />
						</Route>

						<Route exact path="/content">
							<Content />
						</Route>
						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route exact path="/people">
							<People />
						</Route>
						<Route>
							<h1>Not hello!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
