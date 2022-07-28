import { fetchMovies } from "../../fetch/movies";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

export default function Movies({ results }) {
  return (
    <>
      <div
        className="movie-container"
        style={{ padding: "0 2rem", boxSizing: "border-box", display: "block" }}
      >
        <Carousel
          variant="dark"
          style={{
            padding: "4rem 0",
            display: "flex",
            flex: "1 1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {results.map((item, idx) => {
            return (
              <Carousel.Item
                style={
                  {
                    //   position: "absolute",
                    //   margin: "0",
                    //   left: "50%",
                    //   top: "50%",
                  }
                }
              >
                {/* <div className="movie-item"> */}
                <Card key={idx} style={{ width: "50%" }}>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text
                      style={{
                        overflow: "hidden",
                        overflowX: "hidden",
                        overflowY: "auto",
                        height: "20vh",
                        maxHeight: "20vh",
                      }}
                    >
                      {item.overview}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                {/* </div> */}
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  return { props: fetchMovies() };
}
