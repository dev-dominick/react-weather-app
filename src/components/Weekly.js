import React from 'react'
import '../styles/weekly.css'


export default function WeeklyWeather({ weekly }) {
    return (

        <div className='weekly-display-container'>
            <div className='weeklyHeader'>{'Weekly Weather'}</div>

            {weekly.map((data, index) => (
                <div key={index} style={{ height: '100%', width: '100%' }}>
                    <div className='weekly-display'>
                        <p className='weeklyTitle'>{data.dateWeekDay}</p>
                        <p className='weeklyText' >High of {data.highTemp} °f</p>
                        <p className='weeklyText' >Low of {data.lowTemp} °f</p>
                    </div>
                </div>
            ))}
        </div>



    );
}

