import { Container, Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "../src/components/Books";
import Users from "../src/components/Users";

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React + FakerAPI</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/books">Books</Nav.Link>
            </Nav>
          </Navbar.Collapse>
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
