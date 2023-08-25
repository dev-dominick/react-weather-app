import React from 'react'
import './HourlyWeather.css'

export default function HourlyWeather({ hourly,  }) {

    return (

        <div className='hourly-display-container'>
            <div className='hourlyHeader' >{ 'Hourly Weather' }</div>
                {hourly.map((data, index, ) => (
                    <div key={index} style={{ height: '100%', width: '100%' }}>
                        <div className='hourly-display'>
                            <p className='hourlyTitle'> { data.dateHourlyInfo } </p>
                            <p className='hourlyText' >{data.tempurature} °f</p>
                            {/* <p id='text'> {  } </p> */}
    
                        </div>
                    </div>
                ))}
        </div>



    );
}

