import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CurrentWeather({ today, time }) {
    return (
        <>
            <Box sx={{ minWidth: 275, display: 'flex', justifyContent: 'center', paddingBottom: '3rem' }}>
                <Card variant="outlined" sx={{ width: '50vw', display: 'flex', justifyContent: 'center' }}>
                    <CardContent>
                        
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Weather in {today.city}, {today.state}, {today.country}
                            <br></br>as of {time}
                        </Typography>

                        <Typography variant="p" component="div">
                            Current Weather is {today.tempurature}°f
                        </Typography>

                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Real Feel is {today.realFeel}°f
                        </Typography>

                        <Typography variant="body2">
                            {today.weatherDescription}
                        </Typography>
                        <Typography variant="body2">
                            Sunrise at {today.sunrise} today
                        </Typography>
                        <Typography variant="body2">
                            Sunset at {today.sunset} today
                        </Typography>

                    </CardContent>

                </Card>
            </Box>



            {/* <div>
                < HourlyWeather 
                // today={state.current} 
                hourlyData={hourly} 
                />
            </div> */}
        </>
    )
}
