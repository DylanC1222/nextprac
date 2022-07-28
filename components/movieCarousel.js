import Carousel from "react-bootstrap/Carousel";

export default function MovieCarousel({ results }) {
  return (
    <>
      <div
        className="movie-container"
        style={{ padding: "0 2rem", boxSizing: "border-box", display: "block" }}
      >
        <Carousel
          variant="dark"
          controls="false"
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
              <Carousel.Item key={idx}>
                <div className="d-flex justify-content-center">
                  <img
                    style={{ width: "90%", margin: "auto", height: "auto" }}
                    src={"http://localhost:3000/movie_placeholder.jpg"}
                  />
                </div>
                <Carousel.Caption style={{ color: "white" }}>
                  <h3>{item.title}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
