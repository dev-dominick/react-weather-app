import React, { useState, } from 'react';
import * as api from '../apiScript/weatherAPI';
import '../styles/fetchWeather.css'
import SearchField from './SearchField';
import DisplayOptions from '../components/DisplayOptions'

export default function FetchWeather() {
    const [state, setState] = useState({
        value: '',
        location: '',
        current: {},
        hourlyWeather: [],
        weeklyWeather: [],
        loading: false,
        error: false,
    });



    const handleInputChange = e => {
        setState({
            ...state,
            value: e.target.value
        })
    };

    async function showMeTheWeather(userInput) {

        const builingCoordsAPIFromInput = api.buildGeoApi(userInput);
        const userInputAndCoords = await api.getCoordinates(builingCoordsAPIFromInput);
        console.log(userInputAndCoords);
        const buildingWeatherAPIFromCoords = api.buildWeatherAPI(userInputAndCoords);
        const inputsWeather = await api.getWeatherData(buildingWeatherAPIFromCoords);
        console.log(inputsWeather);

        const currentData = inputsWeather.current
        const hourlyData = inputsWeather.hourly;
        const weeklyData = inputsWeather.daily

        const current = {
            city: userInputAndCoords.name,
            state: userInputAndCoords.state,
            country: userInputAndCoords.country,
            tempurature: currentData.temp,
            realFeel: currentData.feels_like,
            main: currentData.weather[0].main,
            weatherDescription: currentData.weather[0].description,
            icon: currentData.weather[0].icon,
        };

        console.log(current);

        const hourlyWeather = hourlyData.map((data, index) => {
            return {
                key: index,
                tempurature: data.temp,
                realFeel: data.feels_like,
                main: data.weather[0].main,
                description: data.weather[0].description,
                icon: data.weather[0].icon

            }
        })

        console.log(hourlyWeather);

        // todo get all weekly weather data, set dates and times to display, get morning, evening, max, min, and night temps,
        // round temps so theyre not decimals, set a f or c changer
        // render weather display on nav click
        const weeklyWeather = weeklyData.map((data, index) => {
            return {
                key: index,
                highTemp: data.temp.max,
                lowTemp: data.temp.min,
                main: data.weather[0].main,
                description: data.weather[0].description,
                icon: data.weather[0].icon

            }
        })

        console.log(weeklyWeather);


        setState({
            ...state,
            current,
            hourlyWeather,
            weeklyWeather,
            loading: false,
            error: false
        })
    };


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

    };

    return (
        <div className='fetching-weather'>

            <div className='input-search'>
                < SearchField
                    value={state.value}
                    data={state}
                    change={handleInputChange}
                    submit={handleInputSubmit}
                />

                < DisplayOptions
                    today={state.current}
                    hourly={state.hourlyWeather}
                    weekly={state.weeklyWeather}
                />
            </div>
        </div>
    );
};
