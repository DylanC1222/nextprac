import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <>
      <Navbar style={{ padding: "1rem 0", margin: "1rem 0" }}>
        <Container>
          <Navbar.Brand style={{ fontSize: "2rem" }} href="/movies">
            Global Squad
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text style={{ fontSize: "1.5rem" }}>
              locals like Korean Drama, Show & Movie
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
