import axios from 'axios'

export const useGetAxios = (city) => {
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5d0af8fa4adf0b3712075e399123d075&units=metric`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err.message)
      if (err.response) {
        // Коли стан запросу виходить за рамки 2ХХ
        console.error(err.response.status)
      } else if (err.request) {
        // Коли відповідь не прийшла після надіслання запросу
        console.error(err.request)
      } else {
        // Помилка
        console.error(err.request)
      }
    })
}