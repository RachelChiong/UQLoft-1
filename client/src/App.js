import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepage';

export default function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route exact path="/">
					<Homepage />
				</Route>
				<Route exact path="/about">
				</Route>
				<Route exact path="/courses"></Route>
			</Switch>
		</BrowserRouter>
	);
}