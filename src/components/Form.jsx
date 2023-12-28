import {Link} from "react-router-dom";

export default function Form() {
  return (
    <div>
      <h1>FORM</h1>
      <form>
        <input type="text"/>
        <Link to='/weather'>
          <button type='submit'>Search</button>
        </Link>
      </form>
    </div>
  )
}
