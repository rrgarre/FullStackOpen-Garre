import weather from "../services/weather"

const Weather = ({weatherInfo}) => {
  const iconUrl = 'https://openweathermap.org/img/wn/'
  const temperature = (weatherInfo.main.temp - 273).toFixed(1)
  return(
    <>
      <h2>Weather in {weatherInfo.name}</h2>
      <p>temperature {temperature} Celsius</p>
      <img 
        src={`${iconUrl}${weatherInfo.weather[0].icon}.png`}
        className="weather-icon"
      >  
      </img>
      <p>wind {weatherInfo.wind.speed} m/s</p>
    </>
  )
}

export default Weather