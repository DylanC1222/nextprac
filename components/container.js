export default function Container({ children }) {
  return (
    <div
      className="container"
      style={{ padding: "0 2rem", boxSizing: "border-box", display: "block" }}
    >
      {children}
    </div>
  );
}
