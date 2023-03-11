import React, { useState, } from 'react';
import * as api from '../apiScript/weatherAPI';
import '../styles/fetchWeather.css'
import SearchField from './SearchField';
import DisplayOptions from '../components/DisplayOptions'

const HH_MM = {hour: '2-digit', minute: '2-digit' }
const HH = {hour: '2-digit' }

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const currentDate = new Date()
const date = `${days[currentDate.getDay()]}, ${months[currentDate.getMonth()]
} ${currentDate.getDate()} `;



export default function FetchWeather() {
    const [state, setState] = useState({
        value: '',
        current: {},
        hourlyWeather: [],
        weeklyWeather: [],
        loading: false,
        error: false,
    });

    const [tab, setTab] = React.useState('')

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


        const sunset = new Date(currentData.sunset * 1000).toLocaleTimeString('en-US', HH_MM)
        const sunrise = new Date(currentData.sunrise * 1000).toLocaleTimeString('en-US', HH_MM)

    

        const current = {
            city: userInputAndCoords.name,
            state: userInputAndCoords.state,
            country: userInputAndCoords.country,
            tempurature: currentData.temp,
            realFeel: currentData.feels_like,
            main: currentData.weather[0].main,
            weatherDescription: currentData.weather[0].description,
            icon: currentData.weather[0].icon,
            sunrise,
            sunset
        };


        const hourlyWeather = hourlyData.map((data, index) => {
            const dateHourlyInfo = new Date(data.dt * 1000).toLocaleTimeString('en-US', HH)
            return {
                key: index,
                dateHourlyInfo,
                tempurature: data.temp,
                realFeel: data.feels_like,
                main: data.weather[0].main,
                description: data.weather[0].description,
                icon: data.weather[0].icon

            }

        })

        console.log(hourlyWeather);

        const weeklyWeather = weeklyData.map((data, index) => {
            const dateWeekInfo = new Date(data.dt * 1000);
            const dateWeekDay = `${days[dateWeekInfo.getDay()]}, ${months[dateWeekInfo.getMonth()]
            } ${dateWeekInfo.getDate()} `;
            return {
                key: index,
                dateWeekDay,
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
            error: false,
        })
        setTab("Current Forecast")
    };




    const onSubmitForm = (e) => {
      e.preventDefault();
      console.log("you submitted me");

      setState({
        ...state,
        loading: true,
      });

      setTab("Loading");

      console.log(state.value);
      console.log(tab);
      showMeTheWeather(state.value);
    };





    return (
      <div className="fetching-weather">
        {date}
        <div className="input-search">
          <SearchField
            value={state.value}
            data={state}
            change={handleInputChange}
            submit={onSubmitForm}
            onClick={() => setState(state.displayPage === "Current Forecast")}
          />

          <DisplayOptions
            today={state.current}
            time={date}
            hourly={state.hourlyWeather}
            weekly={state.weeklyWeather}
            tabState={tab}
            tabSetState={setTab}
          />
        </div>
      </div>
    );
};
