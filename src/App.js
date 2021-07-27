import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../src/components/Header";
import Books from "../src/components/Books";
import Products from "../src/components/Products";
import Users from "../src/components/Users";

function App() {
	return (
		<Router>
			<Header />
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
