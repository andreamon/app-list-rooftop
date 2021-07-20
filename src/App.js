import { Container, Navbar, Nav } from "react-bootstrap";
// import User from "./User.js";
import Books from "../src/components/Books";
import Users from "../src/components/Users";

function App() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React + FakerAPI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Books />
    <Users />
    </>
  );
}

export default App;
