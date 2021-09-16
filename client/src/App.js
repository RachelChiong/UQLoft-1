import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import './_global.scss';

export default function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route exact path="/">
					<Homepage />
				</Route>
				<Route exact path="/about">
					<Aboutpage />
				</Route>
				<Route exact path="/courses"></Route>
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}