import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function ActorListComponent({ results }) {
  return (
    <div className="actor-list">
      <Row xs={2} md={4} lg={5} className="g-4">
        {results.map((item, idx) => {
          return (
            <Col key={idx}>
              <Card
                key={idx}
                className="shadow-sm"
                style={{ margin: "0.5rem 0 0" }}
              >
                <Card.Img
                  className="img-responsive"
                  variant="top"
                  src="http://localhost:3000/images/actor_pic.jpg"
                />
                <Card.Body>
                  <Card.Title
                    className="text-truncate"
                    style={{ fontSize: "120%" }}
                  >
                    {item.name}
                  </Card.Title>
                  <Card.Text
                    className="text-truncate"
                    style={{
                      fontSize: "100%",
                    }}
                  >
                    {item.known_for.map((movie, idx) => {
                      if (movie.title) return movie.title + ", ";
                      return movie.name + ", ";
                    })}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
