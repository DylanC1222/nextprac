import ArticleListComponent from "./articleListComponent";

export default function ArticleList({ results }) {
  return (
    <div className="article-list">
      <div className="article-header header shadow-sm">
        <h2>Korean Movie, Drama & Entertainment News</h2>
      </div>
      <ArticleListComponent results={results} />
    </div>
  );
}
