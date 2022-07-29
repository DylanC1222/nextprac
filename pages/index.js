import ActorList from "../components/actorList/actorList";
import ArticleList from "../components/articleList/articleList";
import Header from "../components/header";
import MovieCarousel from "../components/movieCarousel/movieCarousel";
import { fetchActors } from "../fetch/actors";
import { fetchArticles } from "../fetch/articles";
import { fetchMovies } from "../fetch/movies";

export default function Movies(props) {
  return (
    <div className="wrapper">
      <Header />
      <MovieCarousel results={props.movies.results} />
      <div className="container">
        <ActorList results={props.actors.results} />
        <ArticleList results={props.articles.results} />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const articleData = await fetchArticles();
  const actorData = await fetchActors();
  const movieData = await fetchMovies();
  return {
    props: { movies: movieData, actors: actorData, articles: articleData },
  };
}
