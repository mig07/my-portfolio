import { Link } from "react-router-dom";
import { useTheme } from "styled-components";

export default function NotFound() {
  const theme = useTheme().name;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Error 404</h1>
      <h3>Page not found!</h3>
      <a as={Link} href="/">
        <button className={`btn btn-${theme}`}>Home</button>
      </a>
    </div>
  );
}
