import {Link} from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <h1>404</h1>
      <Link to='/'>
        <button>BACK TO SEARCH</button>
      </Link>
    </div>
  )
}
