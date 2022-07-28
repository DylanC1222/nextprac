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
        <Row xs={2} md={5} className="g-4">
          {results.map((item, idx) => {
            return (
              <Col>
                <Card
                  key={idx}
                  className="shadow-sm"
                  style={{ margin: "0.5rem 0 0" }}
                >
                  <Card.Img
                    variant="top"
                    src="http://localhost:3000/images/actor_pic.jpg"
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "100%" }}>
                      {item.name}
                    </Card.Title>
                    <Card.Text style={{ fontSize: "70%" }}>
                      Some movies they've been in
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
