import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function ActorList({ results }) {
  return (
    <div className="actor-container">
      <div
        className="actorHeader shadow-sm"
        style={{
          padding: "10px 20px 5px 20px",
          margin: "1rem 0 1rem",
          backgroundColor: "#F2F2F2",
          border: "1.5px outset gray",
        }}
      >
        <h2>Popular Actors</h2>
      </div>
      <div className="actor-list">
        <Row xs={2} md={4} className="g-4">
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
                        if (movie.title) return movie.title + " ";
                        return movie.name + " ";
                      })}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
