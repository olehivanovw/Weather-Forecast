import {Routes, Route} from "react-router-dom";
import Form from "./Form.jsx";
import Weather from "./Weather";
import NotFound from "./NotFound.jsx";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Form />}></Route>
        <Route path='/weather/:city' element={<Weather />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
    </div>
  )
}
