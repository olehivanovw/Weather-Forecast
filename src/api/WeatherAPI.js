export default class WeatherAPI {
  static API = 'https://api.openweathermap.org/data/2.5/'
  static APIkey = '&appid=5d0af8fa4adf0b3712075e399123d075&units=metric'

  static request(url = '', method = '', body, errorMessage) {
    return fetch(WeatherAPI.API + url + WeatherAPI.APIkey, {
      method,
      body: body ? JSON.stringify(body) : undefined,
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        throw new Error(errorMessage)
      })
  }

  static getDataWeather(cityName) {
    return WeatherAPI.request(`weather?q=${cityName}`,'GET','','Can not retrieve from server')
  }
}