import React from 'react'
import '../styles/weekly.css'


export default function WeeklyWeather({ weekly, day }) {
    return (

        <div className='weekly-display-container'>
            Hi
            {weekly.map((data, index) => (
                <div key={index} style={{ height: '100%', width: '100%' }}>
                    <div className='weekly-display'>
                        <p>today is { data.dateWeekDay }</p>
                        <p id='text'>Weather today high of {data.highTemp} °f</p>
                        <p id='text'>Weather today low of {data.lowTemp} °f</p>
                    </div>
                </div>
            ))}
        </div>



    );
}

