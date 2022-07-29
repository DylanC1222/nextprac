import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <>
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand className="navbar-logo" href="/movies">
            <img
              className="logo"
              height={30}
              src="/images/kinolights_logo.png"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="navbar-text">
              locals like Korean Drama, Show & Movie
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
