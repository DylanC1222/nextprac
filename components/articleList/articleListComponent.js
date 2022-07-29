import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function ArticleListComponent({ results }) {
  return (
    <div className="articles" style={{ margin: "2rem 0 0" }}>
      <Row xs={1} md={2} className="g-4">
        {results.map((item, idx) => {
          return (
            <Col key={idx}>
              <a href="/" className="text-decoration-none text-primary">
                <Card style={{ width: "100%" }}>
                  <div className={"d-flex flex-row"}>
                    <img
                      style={{ width: "75%", height: "auto" }}
                      src={item.image_path}
                    />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text className="text-dark">
                        {item.description}
                      </Card.Text>
                    </Card.Body>
                  </div>
                </Card>
              </a>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}