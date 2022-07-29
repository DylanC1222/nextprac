import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function ArticleListComponent({ results }) {
  return (
    <div className="articles" style={{ margin: "2rem 0 0" }}>
      <Row md={1} lg={2} className="g-4">
        {results.map((item, idx) => {
          return (
            <Col key={idx}>
              <a
                href={"/article/" + (idx + 1)}
                className="text-decoration-none text-primary"
              >
                <Card
                  className={"d-flex flex-row border-0"}
                  style={{ width: "100%" }}
                >
                  <Card.Img
                    style={{ minWidth: "40%", maxWidth: "40%", height: "auto" }}
                    src={item.image_path}
                  />
                  <Card.Body
                    style={{
                      maxWidth: "60%",
                      minWidth: "60%",
                      minHeight: "100%",
                      maxHeight: "100%",
                    }}
                  >
                    <Card.Title style={{ fontSize: "150%" }}>
                      {item.title}
                    </Card.Title>
                    <Card.Text className="text-dark">{item.date}</Card.Text>
                  </Card.Body>
                </Card>
              </a>
              <hr />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
