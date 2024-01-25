import {Routes, Route} from "react-router-dom";
// стандартний спосіб використання та підгруження компонентів
// import Form from "./Form.jsx";
// import Weather from "./Weather";
// import NotFound from "./NotFound.jsx";
import {lazy, Suspense} from 'react'
import Load from './Load.jsx'

// Використання lazy для підгрузки коли цей компонент буде рендеритися вперше.
const FormAsync = lazy(() => import('./Form.jsx'))
const WeatherAsync = lazy(() => import('./Weather.jsx'))
const NotFoundAsync = lazy(() => import('./NotFound.jsx'))

export default function App() {
  return (
    // Використання Suspense для відображання резервного варіанту, доки його дочірні елементи не завершать завантаження.
    <Suspense fallback={<Load />}>
      <Routes>
        <Route path='/' element={<FormAsync />}></Route>
        <Route path='/weather/:city' element={<WeatherAsync />}></Route>
        <Route path='/*' element={<NotFoundAsync />}></Route>
      </Routes>
    </Suspense>
  )
}