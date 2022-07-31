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
                      return idx + 1 !== item.known_for.length
                        ? movie.title
                          ? movie.title + ", "
                          : movie.name + ", "
                        : movie.title
                        ? movie.title
                        : movie.name;
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
