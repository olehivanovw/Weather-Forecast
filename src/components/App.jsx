import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Form from "./Form.jsx";
import Weather from "./Weather";
import NotFound from "./NotFound.jsx";

export default function App() {
  const [city, setCity] = useState('')

  const onFormSubmit = (data) => {
    setCity(data)
  }

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Form onFormSubmit={onFormSubmit}/>}></Route>
          <Route path='/weather' element={<Weather formData={city}/>}></Route>
          <Route path='/*' element={<NotFound />}></Route>
        </Routes>
      </div>
    </>
  )
}
