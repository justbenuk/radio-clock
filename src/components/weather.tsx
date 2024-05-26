'use client'
import { getWeather } from "@/app/actions/weather.js"
import { useState, useEffect } from "react"

export default function Weather() {
  const [weather, setWeather] = useState({
    location: {
      name: '',
      region: ''
    },
    current: {
      temp_c: '',
      feelslike_c: '',
      wind_dir: '',
      humidity: '',
      wind_mph: '',
      condition: {
        text: '',
      },
    },
  })


  useEffect(() => {

    // TODO: this will reload every 5 mins, but we need to look at use callbak to stop memory leaks

    async function fetchweather() {
      const result = await getWeather()
      setWeather(result)
    }

    fetchweather()

    //running the api call every one minute
    const interval = setInterval(() => {
      fetchweather()
      console.log('Wether fetched')
    }, 300000);
    return () => clearInterval(interval);

  }, [clearInterval])
  return (
    <div className="card w-full h-full bg-secondary text-secondary-content shadow-xl">
      <div className="card-body w-full">
        <h2 className="card-title text-center text-xl">The Weather Conditions For {weather.location.name}, {weather.location.region}</h2>
        <table className="table table-zebra w-full">
          <tbody>
            <tr className="font-semibold">
              <th>
                <p className="text-center p-0">The Current Weather Conditions are</p>
                <br />
                <p className="text-center font-semibold text-3xl">{weather.current.condition.text}</p>
              </th>
              <td>
                <img className="w-32" src='http://cdn.weatherapi.com/weather/64x64/night/116.png' alt={weather.current.condition.text} />
              </td>
            </tr>
            <tr className="font-semibold text-neutral-content">
              <th>Current Tempriture</th>
              <td>{weather.current.temp_c}&#8451;</td>
            </tr>
            <tr className="font-semibold">
              <th>Feels Like</th>
              <td>{weather.current.feelslike_c}&#8451;</td>
            </tr>
            <tr className="font-semibold text-neutral-content">
              <th>Wind Direction:</th>
              <td>{weather.current.wind_dir}</td>
            </tr>
            <tr className="font-semibold">
              <th>Humidity</th>
              <td>{weather.current.humidity}</td>
            </tr>
            <tr className="font-semibold text-neutral-content">
              <th>Wind Speed</th>
              <td>{weather.current.wind_mph}mph</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
