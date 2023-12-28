import {Link} from "react-router-dom";

export default function Weather() {
  return (
    <div>
      <h1>WEATHER</h1>
      <p>discription about weather</p>
      <Link to='/'>
        <button>BACK TO SEARCH</button>
      </Link>
    </div>
  )
}
