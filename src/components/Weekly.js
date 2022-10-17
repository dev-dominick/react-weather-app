import React from 'react'
import '../styles/weekly.css'


export default function WeeklyWeather({ weekly }) {
    return (

        <div className='weekly-display-container'>
            Hi
            {weekly.map((data, index) => (
                <div key={index} style={{ height: '100%', width: '100%' }}>
                    <div className='weekly-display'>
                        <p id='text'>Weather today is {data.tempurature} °f</p>
                    </div>
                </div>
            ))}
        </div>



    );
}

