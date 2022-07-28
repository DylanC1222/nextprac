import ActorList from "../../components/actorList";
import ArticleList from "../../components/articleList";
import Container from "../../components/container";
import Header from "../../components/header";
import MovieCarousel from "../../components/movieCarousel";
import { fetchActors } from "../../fetch/actors";
import { fetchMovies } from "../../fetch/movies";

export default function Movies(props) {
  return (
    <div className="wrapper" style={{ margin: "0 0 5rem 0" }}>
      <Header />
      <MovieCarousel results={props.movies.results} />
      <div className="container">
        <ActorList results={props.actors.results} />
        <ArticleList />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  //   const articleData = await fetchArticles();
  const actorData = await fetchActors();
  const movieData = await fetchMovies();
  return { props: { movies: movieData, actors: actorData } };
}
