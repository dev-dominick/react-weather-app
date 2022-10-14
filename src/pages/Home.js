import React from 'react'
import '../styles/home.css'
import InputSearch from '../components/input'
// import * as api from '../components/FetchWeather'

export default function Home() {
    return (
        <div className='home'>
            <h1>Fetch Weather</h1>
            < InputSearch />
        </div>
    )
}

