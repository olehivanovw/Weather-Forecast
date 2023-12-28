import {Link, useNavigate} from "react-router-dom";

export default function Form({onFormSubmit}) {
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()

    const data = e.target.inpWeather.value.trim()

    onFormSubmit(data)

    navigate('/weather')
  }

  return (
    <div>
      <h1>FORM</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name='inpWeather'/>
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}
