import ActorList from "../../components/actorList";
import Container from "../../components/container";
import Header from "../../components/header";
import MovieCarousel from "../../components/movieCarousel";
import { fetchActors } from "../../fetch/actors";
import { fetchMovies } from "../../fetch/movies";

export default function Movies(props) {
  return (
    <Container>
      <Header />
      <MovieCarousel results={props.movies.results} />
      <ActorList results={props.actors.results} />
    </Container>
  );
}

export async function getServerSideProps(context) {
  const actorData = await fetchActors();
  const movieData = await fetchMovies();
  return { props: { movies: movieData, actors: actorData } };
}
