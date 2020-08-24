import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/app.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/nav/Footer";
import Login from "./components/auth/Login";
import Slides from "./components/slides/Slides";
import routes from "./utilities/routes";
import { loadProgress } from "./redux/actions/progressActions";
import { useDispatch } from "react-redux";

const App = () => {
	const [isAuth, setIsAuth] = useState(true);
	const [isLoading, setIsLoading] = useState(true);
	const dispatch = useDispatch();
	useEffect(() => {
		if (sessionStorage.baAuth) setIsAuth(true);
		setIsLoading(false);
	}, []);
	useEffect(() => {
		if (localStorage.progress) {
			const progress = JSON.parse(localStorage.progress);
			dispatch(loadProgress(progress));
		}
	}, []);
	return (
		<div className="app">
			<Nav isAuth={isAuth} setIsAuth={setIsAuth} />
			{!isAuth && !isLoading (
				<Login className="fade" setIsAuth={setIsAuth} />
			)}
			{isAuth && (
				<div style={{ minHeight: "79vh" }}>
					<Router>
						<Switch>
						{routes.map(
							({
								path,
								Component,
								url,
								redirectMsg,
								redirectUrl,
								progress,
							}) => (
									<Route key={path} path={path}>
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
						</Switch>
					</Router>
				</div>
			)}
			<Footer />
		</div>
	);
};

export default App;
