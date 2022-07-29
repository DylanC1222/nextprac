import Carousel from "react-bootstrap/Carousel";

export default function MovieList({ results }) {
  return (
    <>
      <div
        className="movie-container"
        style={{
          boxSizing: "border-box",
          display: "block",
          margin: "0 0 4rem",
        }}
      >
        <Carousel>
          {results.map((item, idx) => {
            return (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100"
                  src={"http://localhost:3000/images/movie_placeholder.jpg"}
                />
                <Carousel.Caption>
                  <h2>{item.title}</h2>
                  <div className="score-block">
                    <h2 className="score">{item.vote_average}</h2>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
