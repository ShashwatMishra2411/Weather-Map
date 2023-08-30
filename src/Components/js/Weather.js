import React,{useState, useEffect} from 'react'
import WeatherDisplay from './WeatherDisplay'

export default function Weather(prop) {
  let lat = prop.coords[0]
  let lon = prop.coords[1]
  console.log(prop.coords[0], prop.coords[1])
  const [data,setdata] = useState(null)
  useEffect(() => 
  {
    async function fetchData()
    {
    let p = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum&current_weather=true&forecast_days=1&timezone=auto`);
    let response = await p.json()
    setdata(response)
    }

    if(lat !== undefined)
    fetchData()
    },[prop.coords])
    console.log("data")
    console.log(data)
  return (
    (data === null)?"enter":<WeatherDisplay data = {data}></WeatherDisplay>
  )
}
