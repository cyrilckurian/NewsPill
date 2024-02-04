import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBar() {
  const brandStyle = {
    textDecoration: 'none',
    color: 'inherit', 
  };
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand >
          <Link to="/" style={brandStyle}>NewsPill</Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
export default NavBar;
