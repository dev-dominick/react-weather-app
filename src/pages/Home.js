import React from 'react'
import '../styles/home.css'
import FetchWeather from '../components/FetchWeather'
// import * as api from '../components/FetchWeather'

export default function Home() {
    return (
        <div className='home'>
            <h1>Weather App</h1>
            < FetchWeather />

        </div>
    )
}

