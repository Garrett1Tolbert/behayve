import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Feed from './components/organisms/Feed';
import Login from './components/organisms/Login';
import db from './config';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/feed'>
					<Feed />
				</Route>
				<Route path='/'>
					<Login />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
