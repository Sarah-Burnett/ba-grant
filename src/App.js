import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/app.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/nav/Footer";
import Login from "./components/auth/Login";
import Slides from "./components/slides/Slides";
import routes from "./utilities/routes";

const App = () => {
	const [isAuth, setIsAuth] = useState(true);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		if (sessionStorage.getItem("baAuth")) setIsAuth(true);
		setIsLoading(false);
	}, []);
	return (
		<div className="app">
			<Nav isAuth={isAuth} setIsAuth={setIsAuth} />
			{!isAuth && !isLoading && (
				<Login className="fade" setIsAuth={setIsAuth} />
			)}
			{isAuth && (
				<div style={{ minHeight: "79vh" }}>
					<Router>
						{routes.map(
							({
								path,
								Component,
								url,
								redirectMsg,
								redirectUrl,
								progress,
							}) => (
								<Route key={path} exact path={path}>
									{Component ? (
										<Component />
									) : (
										<Slides
											url={url}
											progress={progress}
											redirectMsg={redirectMsg}
											redirectUrl={redirectUrl}
										/>
									)}
								</Route>
							)
						)}
					</Router>
				</div>
			)}
			<Footer />
		</div>
	);
};

export default App;
