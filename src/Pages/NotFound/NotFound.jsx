import { Link } from "react-router-dom";
import "./NotFound.css";



export default function NotFound() {
  return (
    <div className="Not-Found">
      <div className="container not-found-container">
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <Link to={'/'} className="btn btn-border">Go To Home</Link>
      </div>
    </div>
  )
}
