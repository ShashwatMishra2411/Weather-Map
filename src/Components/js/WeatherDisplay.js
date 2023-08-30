import React,{useEffect} from 'react'
import '../css/Weather.css'
import clear from './weather/clear.jpg'
import clears from './clear.svg'
import cloudy from './weather/cloudy.jpg'
import fog from './weather/fog.jpg'
import drizzle from './weather/drizzle.jpg'
import rain from './weather/rain.jpg'
import snow from './weather/snow.jpg'
import rains from './weather/rains.jpg'
import snows from './weather/snows.jpg'
import thunderstorm from './weather/thunderstorm.jpg'
export default function WeatherDisplay({data}) {

    let c1style = {backgroundImage : "",
    backgroundRepeat : "no-repeat",
    backgroundSize : "105% 105%"}
    c1style.backgroundImage = "hello"
    let wstyle = {}
    let tstyle = {}
    let svg
    let weather
    let temperature = data.current_weather.temperature
            let latitude = data.latitude;
            let longitude = data.longitude;
            let maxt = data.daily.temperature_2m_max[0];
            let mint = data.daily.temperature_2m_min[0];
            let wins = data.current_weather.windspeed;
            let wind = data.current_weather.winddirection;
            let t = data.current_weather.time.split("T");
            let time = t[1]
            let date = t[0]
            let wc = data.current_weather.weathercode;
            let preci = data.daily.precipitation_sum[0];
            let rains = data.daily.rain_sum[0];
            let rise = data.daily.sunrise[0].split("T")[1];
            let set = data.daily.sunset[0].split("T")[1];
            if(wc===0||wc===1)
        {
            c1style = {backgroundImage : `url(${clear})`,
            backgroundRepeat : "no-repeat",
            backgroundSize : "105% 105%"}
            svg = <img src={clears} alt="Nope"/>
            weather = ("clear")
        }
        else if(wc===2||wc===3){
            c1style = {backgroundImage : `url(${cloudy})`,
            backgroundRepeat : "no-repeat",
            backgroundSize : "105% 105%"}
            svg = <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" className="bi bi-clouds" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M16 7.5a2.5 2.5 0 0 1-1.456 2.272 3.513 3.513 0 0 0-.65-.824 1.5 1.5 0 0 0-.789-2.896.5.5 0 0 1-.627-.421 3 3 0 0 0-5.22-1.625 5.587 5.587 0 0 0-1.276.088 4.002 4.002 0 0 1 7.392.91A2.5 2.5 0 0 1 16 7.5z" id="mainIconPathAttribute"></path> <path d="M7 5a4.5 4.5 0 0 1 4.473 4h.027a2.5 2.5 0 0 1 0 5H3a3 3 0 0 1-.247-5.99A4.502 4.502 0 0 1 7 5zm3.5 4.5a3.5 3.5 0 0 0-6.89-.873.5.5 0 0 1-.51.375A2 2 0 1 0 3 13h8.5a1.5 1.5 0 1 0-.376-2.953.5.5 0 0 1-.624-.492V9.5z" id="mainIconPathAttribute"></path> </svg>
            weather = ("cloudy")
        }
        else if(wc===45||wc===48){
            c1style = {backgroundImage : `url(${fog})`,
            backgroundRepeat : "no-repeat",
            backgroundSize : "105% 105%"}
            svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="IconChangeColor" height="200" width="200"> <g> <path fill="none" d="M0 0h24v24H0z" id="mainIconPathAttribute" filter="url(#shadow)"></path> <path d="M1.584 13.007a8 8 0 0 1 14.873-5.908 5.5 5.5 0 0 1 6.52 5.908h-2.013A3.5 3.5 0 0 0 15 10.05V10a6 6 0 1 0-11.193 3.007H1.584zM4 19h17v2H4v-2zm-2-4h21v2H2v-2z" id="mainIconPathAttribute"></path> </g> <filter id="shadow"><feDropShadow id="shadowValue" stdDeviation=".5" dx="0" dy="0" flood-color="black"></feDropShadow></filter></svg>
            weather = ("Fog")
        }
        else if(wc>50&&wc<58){
            c1style = {backgroundImage : `url(${drizzle})`,
            backgroundRepeat : "no-repeat",
            backgroundSize : "105% 105%"}
            svg = <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" className="bi bi-cloud-drizzle" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973zM8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 2z" id="mainIconPathAttribute" strokeWidth="0" stroke="#ff0000"></path> </svg>
            weather = ("Drizzle")
        }
        else if(wc>60&&wc<68){
            c1style = {backgroundImage : `url(${rain})`,
            backgroundRepeat : "no-repeat",
            backgroundSize : "105% 105%"}
            svg = <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" className="bi bi-cloud-rain-heavy" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M4.176 11.032a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 1 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 1 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 1 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 0 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm.229-7.005a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973zM8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1z" id="mainIconPathAttribute"></path> </svg>
            weather = ("Rain")
        }
        else if(wc>70&&wc<78){
            c1style = {backgroundImage : `url(${snow})`,
            backgroundRepeat : "no-repeat",
            backgroundSize : "105% 105%"}
            svg = <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" className="bi bi-cloud-snow" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M13.405 4.277a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10.25H13a3 3 0 0 0 .405-5.973zM8.5 1.25a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1-.001 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1.25zM2.625 11.5a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm2.75 2a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm5.5 0a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm-2.75-2a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm5.5 0a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25z" id="mainIconPathAttribute"></path> </svg>
            weather = ("Snowfall")
        }
        else if(wc>79&&wc<83){
            c1style = {backgroundImage : `url(${rains})`,
            backgroundRepeat : "no-repeat",
            backgroundSize : "105% 105%"}
            svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="IconChangeColor" height="200" width="200"><path d="M416 128c-.625 0-1.125 .25-1.625 .25C415.5 123 416 117.6 416 112c0-44.25-35.75-80-79.1-80c-24.62 0-46.25 11.25-60.1 28.75C256.4 24.75 219.3 0 176 0C114.3 0 64 50.13 64 112c0 7.25 .7512 14.25 2.126 21.25C27.76 145.8 .0054 181.5 .0054 224c0 53 42.1 96 95.1 96h319.1C469 320 512 277 512 224S469 128 416 128zM198.8 353.9c-12.17-5.219-26.3 .4062-31.52 12.59l-47.1 112c-5.219 12.19 .4219 26.31 12.61 31.53C134.1 511.4 138.2 512 141.3 512c9.312 0 18.17-5.438 22.08-14.53l47.1-112C216.6 373.3 210.1 359.2 198.8 353.9zM81.46 353.9c-12.19-5.219-26.3 .4062-31.52 12.59l-47.1 112C-3.276 490.7 2.365 504.8 14.55 510.1C17.63 511.4 20.83 512 23.99 512c9.312 0 18.17-5.438 22.08-14.53l47.1-112C99.29 373.3 93.64 359.2 81.46 353.9zM316.1 353.9c-12.19-5.219-26.3 .4062-31.52 12.59l-47.1 112c-5.219 12.19 .4219 26.31 12.61 31.53C252.3 511.4 255.5 512 258.7 512c9.312 0 18.17-5.438 22.08-14.53l47.1-112C333.1 373.3 328.3 359.2 316.1 353.9zM433.5 353.9c-12.17-5.219-26.28 .4062-31.52 12.59l-47.1 112c-5.219 12.19 .4219 26.31 12.61 31.53C369.6 511.4 372.8 512 375.1 512c9.312 0 18.17-5.438 22.08-14.53l47.1-112C451.3 373.3 445.6 359.2 433.5 353.9z" id="mainIconPathAttribute" stroke-width="2" stroke="#ffffff"></path></svg>
            weather = ("Rain Showers")
            wstyle.color = "white"
            tstyle.color = "white"
        }
        else if(wc>84&&wc<87){
            c1style = {backgroundImage : `url(${snows})`,
            backgroundRepeat : "no-repeat",
            backgroundSize : "105% 105%"}
            svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="200" width="200"><rect width="256" height="256" fill="none"></rect><path d="M88,92a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" id="mainIconPathAttribute"></path><circle cx="76" cy="196" r="10"></circle><circle cx="116" cy="212" r="10"></circle><circle cx="164" cy="196" r="10"></circle><circle cx="68" cy="236" r="10"></circle><circle cx="156" cy="236" r="10"></circle></svg>
            weather = ("Snow Showers")
        }
        else{
            c1style = {backgroundImage : `url(${thunderstorm})`,
            backgroundRepeat : "no-repeat",
            backgroundSize : "105% 105%"}
            svg = <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 512 512" id="IconChangeColor"><title>ionicons-v5-k</title><line x1="120" y1="352" x2="96" y2="400" style={{fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></line><line x1="136" y1="432" x2="120" y2="464" style={{fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></line><line x1="400" y1="352" x2="376" y2="400" style={{fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></line><line x1="416" y1="432" x2="400" y2="464" style={{fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></line><polyline points="208 304 192 400 240 400 240 480 320 368 272 368 288 304" style={{fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></polyline><path d="M404.33,152.89H392.2C384.71,84.85,326.14,32,256,32a136.39,136.39,0,0,0-128.63,90.67H122.8c-49.94,0-90.8,40.8-90.8,90.66h0C32,263.2,72.86,304,122.8,304H404.33C446,304,480,270,480,228.44h0C480,186.89,446,152.89,404.33,152.89Z" style={{fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}} id="mainIconPathAttribute"></path></svg>
            weather = ("Thunderstorm")
        }
  return (
    <div className='wdis'>
    <div className="head">
<h1 id = "header">Weather ForeCast</h1>
</div>
<div id="details">
      <div id="card1" style={c1style}>
    <div id="current">
        <div className="left">
    <div id="lati">Latitude:  {latitude}</div>
    <div id="long">Longitude {longitude}</div>
    <div id="ti">Last Updated (Local Time): {time}</div>
</div>
<div className="right">
    <div id="temp" style={tstyle}>{temperature}°C</div>
</div>
</div>
<div id="daily">
    <div id="dates">Date: {date}</div>
    <div id="max">Maximum Temperature: {maxt}°C</div>
    <div id="min">Minimum Temperature: {mint}°C</div>
</div>
<div id="pics">
    <div id="svg">{svg}</div>
    <div id="weather" style={wstyle}>{weather}</div>
</div>
</div>
<div id="card2">
    <div id="wind">
        <div id="windspeed">Wind Speed: {wins}</div>
        <div id="w"><svg id="wsvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{transform :`rotate(${wind}deg)`}}><path d="m18.707 12.707-3 3a1 1 0 0 1-1.414-1.414L15.586 13H6a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414z" style={{fill:"#f97c4b"}} data-name="Right"/></svg></div>
        <div id="winddirection">Wind Direction: {wind}°</div>
    </div>
    <div id="water">
        <div id="precipitation">Precipitation: {preci} mm</div>
        <div id="rain">Rain: {rains} mm</div>
    </div>
    <div id="sun">
        <div id="riset">Sunrise: {rise} a.m</div>
        <div id="sett">Sunset: {set} p.m</div>
    </div>
</div>
</div>
</div>
  )
}
