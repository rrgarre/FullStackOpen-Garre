import axios from 'axios'

const apiKey = import.meta.env.VITE_SOME_KEY

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'

const getCountryInfo = (capital) => {
  return axios
    .get(`${baseUrl}q=${capital}&APPID=${apiKey}`)
    .then(response => response.data)
}

export default {
  getCountryInfo
}