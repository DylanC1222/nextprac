import Card from "react-bootstrap/Card";

export default function ActorList({ results }) {
  return (
    <div className="actor-container">
      <div
        className="actorHeader shadow-sm"
        style={{
          padding: "10px 20px 5px 20px",
          backgroundColor: "#F2F2F2",
          border: "1.5px outset gray",
        }}
      >
        <h2>Popular Actors</h2>
      </div>
      <div className="actor-list">
        {results.map((item, idx) => {
          return (
            <Card key={idx} style={{ width: "25%", margin: "1% 0%" }}>
              <Card.Img
                variant="top"
                src="http://localhost:3000/images/actor_pic.jpg"
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  <p>Some movies they've been in</p>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
