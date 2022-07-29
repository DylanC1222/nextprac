import ActorListComponent from "./actorListComponent";

export default function ActorList({ results }) {
  return (
    <div className="actor-container">
      <div className="actor-header header shadow-sm">
        <h2>Popular Actors</h2>
      </div>
      <ActorListComponent results={results} />
    </div>
  );
}
