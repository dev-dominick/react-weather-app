import React, { useState, } from 'react';
import * as api from '../apiScript/weatherAPI';
import SearchField from './SearchField';
import '../styles/input.css'
import CurrentWeather from './Current';
import HourlyWeather from './Hourly';

export default function FetchWeather() {

    const [state, setState] = useState({
        value: '',
        location: '',
        current: {},
        hourlyWeather: [],
        weeklyWeather: [],
        loading: false,
        error: false,
    })

    const handleInputChange = e => {
        setState({
            ...state,
            value: e.target.value
        })
    }

    async function showMeTheWeather(userInput) {

            const gettingCoords = api.buildGeoApi(userInput);
            const coords = await api.getCoordinates(gettingCoords);
            console.log(coords);
            console.log(coords.name);
            const gettingWeather = api.buildWeatherAPI(coords);
            const weather = await api.getWeatherData(gettingWeather);
            console.log(weather);
            
            
            const locationData = coords;
            const weatherData = weather;
            const hourlyData = weather.hourly;

            const current = {
                city: locationData.name,
                state: locationData.state,
                country: locationData.country,
                tempurature: weatherData.current.temp,
                realFeel: weatherData.current.feels_like,
                weatherDescription: weatherData.current.weather[0].description,
                icon: weatherData.current.weather[0].icon,
                uvIndex: weatherData.current.uvi
                };
            
            console.log(current);

            

            const hourlyWeather = hourlyData.map((data, index) => {
                return{
                    key: index,
                    tempurature: data.temp,
                    realFeel: data.feels_like,
                    description: data.weather[0].description,
                    icon: data.weather[0].icon

                }
            } )
            console.log(hourlyWeather);

            setState({
                ...state,
                current,
                hourlyWeather,
                loading: false,
                error: false
            })
    }


    const handleInputSubmit = e => {
        console.log('you submitted me');

        e.preventDefault();

        setState({
            ...state,
            location: e.target.value,
            loading: true
        })

        console.log(state.value);

        showMeTheWeather(state.value)

    }



    // const data = state.loading ? <div>I am loading</div> : <div>Is it currently {state.current.tempurature} degrees in {state.current.city}</div>
    // const hourly = isLoading ? <div></div> : {storage.map}    



    return (
        <div className='fetching-weather'>

            <div className='input-search'>
                < SearchField
                    value={state.value}
                    data={state}
                    change={handleInputChange}
                    submit={handleInputSubmit}
                />
            </div>

            {/* <div className='weatherGreeting'>{data}</div> */}
            <div>
                < CurrentWeather 
                today={state.current} 
                />
            </div>
            <div>
                < HourlyWeather 
                // today={state.current} 
                hourly={state.hourlyWeather} 
                />
            </div>
        </div>
    );
}
