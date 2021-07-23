import { Container, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "../src/components/Books";
import Users from "../src/components/Users";

function App() {
	return (
		<Router>
			<Navbar expand="lg" className="navbar-css">
				<Container>
					<Navbar.Brand href="/" className="navbar-title">
						ROOFTOP API
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					{/* <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/books">Books</Nav.Link>
            </Nav>
          </Navbar.Collapse> */}
				</Container>
			</Navbar>
			<Switch>
				<Route path="/books">
					<Books />
				</Route>
				<Route path="/">
					<Users />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
