import * as React from 'react';
import * as api from '../components/FetchWeather'
import '../styles/input.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';



export default function InputSearch() {
    const [whereIAm, setWhereIAm] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(true)
    const [weatherData, setWeatherData] = React.useState([]);
    const [hourlyWeather, setHourlyWeather] = React.useState([]);
    

    async function getLocation(event) {
        event.preventDefault();
        try {
            let userInput = api.getInput();
            const gettingCoords = api.buildGeoApi(userInput);
            const coords = await api.getCoordinates(gettingCoords);
            const gettingWeather = api.buildWeatherAPI(coords);
            const weather = await api.getWeatherData(gettingWeather);
            if (weather) {
                setWhereIAm(userInput)
                setIsLoading(false)
                setWeatherData(weather)
                // let storage = [];

                for (let i = 1; i < 13; i++) {
                    let storage = [weather.hourly[i].temp];
                    console.log(storage);
                    setHourlyWeather((e) => e.concat([...storage]))
                    
                    if (hourlyWeather > 12) {
                        return
                    }

                }

                console.log(weather);
                console.log(weatherData);
                console.log(hourlyWeather);
            } else {
                console.log('error');
            }
        } catch {
            throw console.error('error');
            // setIsLoading(false)
        }
    }


    console.log(hourlyWeather);

    const data = isLoading ? <div></div> : <div>Weather is: {weatherData.current.temp} in {whereIAm}</div>
    // const hourly = isLoading ? <div></div> : {storage.map}    



    return (
        <div className='fetching-weather'>
            
            <div className='input-search'>
            <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    <TextField id="filled-basic" label="Filled" variant="filled" /> */}
                    <TextField id="cityInput" label="Search Your City" variant="standard" />
                    <button onClick={getLocation} >click me</button>
                </Box>
                {/* <textarea id='cityInput'></textarea>
                <button onClick={getLocation} >click me</button> */}
            </div>

            <div className='weatherGreeting'>{data}</div>
            <div>
                <div className='hourly-weather-container'>
                    {hourlyWeather.map((e) => (
                        <Box sx={{ width: '10rem', }}>
                            <Card variant='outlined'>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Today's Weather Is:
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        {e}
                                    </Typography>

                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </div>
            </div>
        </div>
    );
}
