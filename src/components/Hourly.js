import React from 'react'
import '../styles/hourly.css'

export default function HourlyWeather({ hourly,  }) {

    return (

        <div className='hourly-display-container'>
            <div>{ 'hhhh' }</div>
                {hourly.map((data, index, ) => (
                    <div key={index} style={{ height: '100%', width: '100%' }}>
                        <div className='hourly-display'>
                            <p id='text'> { data.dateHourlyInfo } is {data.tempurature} °f</p>
                            {/* <p id='text'> {  } </p> */}
    
                        </div>
                    </div>
                ))}
        </div>



    );
}

