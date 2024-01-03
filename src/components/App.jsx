import {Routes, Route} from "react-router-dom";
import Form from "./Form.jsx";
import Weather from "./Weather";
import NotFound from "./NotFound.jsx";
import {Container} from "@mui/material";

export default function App() {
  return (
      <Container maxWidth="md" sx={
        {
          minHeight: '100vh',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }
      }>
        <Routes>
          <Route path='/' element={<Form />}></Route>
          <Route path='/weather/:city' element={<Weather />}></Route>
          <Route path='/*' element={<NotFound />}></Route>
        </Routes>
      </Container>
  )
}