import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div class="centered" style={{ textAlign: "center" }}>
      <h1>Error 404</h1>
      <h3>Page not found!</h3>
      <Button as={Link} to="/">
        Home
      </Button>
    </div>
  );
}
