import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Books from "../src/components/Books";
import Products from "../src/components/Products";
import Users from "../src/components/Users";

function App() {
	return (
		<Router>
			<div className="nav-css">
				<a href="/">ROOFTOP API</a>
			</div>
			<Switch>
				<Route path="/books">
					<Books />
				</Route>
				<Route path="/products">
					<Products />
				</Route>
				<Route path="/">
					<Users />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
