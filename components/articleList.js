import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function ArticleList({ results }) {
  const articles = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="article-list">
      <div
        className="articleHeader shadow-sm"
        style={{
          padding: "10px 20px 5px 20px",
          margin: "3rem 0 1rem",
          backgroundColor: "#F2F2F2",
          border: "1.5px outset gray",
        }}
      >
        <h2>Korean Movie, Drama & Entertainment News</h2>
      </div>
      <div className="articles" style={{ margin: "2rem 0 0" }}>
        <Row xs={1} md={2} className="g-4">
          {articles.map((item, idx) => {
            return (
              <Col key={idx}>
                <Card style={{ width: "100%" }}>
                  <div className={"d-flex flex-row"}>
                    <img src="http://localhost:3000/images/article_pic.jpg" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
