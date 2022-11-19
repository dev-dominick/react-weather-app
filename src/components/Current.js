import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CurrentWeather({ today, time }) {
    return (
        <>
            <Box sx={{ minWidth: 275, display: 'flex', justifyContent: 'center', paddingBottom: '.5rem' }}>
                <Card variant="outlined" sx={{ width: '75vw', height: '40vh', display: 'flex', justifyContent: 'center', }}>
                    <CardContent
                    sx={{
                        margin: '0',
                        padding: '0',
                        // marginRight: '1rem',
                        // marginLeft: '1rem',
                        color: 'black',
                        width: '100%'
                    }}
                    >
                        
                        <Typography variant="p" component="div" sx={{
                            backgroundColor: 'lightgray',
                            marginBottom: 'auto',
                            marginTop: 'auto',
                            height: '4rem',
                            
                        }} >
                            {today.city}, {today.state}, {today.country} as of {time}
                        </Typography>

                        <Typography variant="p" component="div" gutterBottom>
                            {today.tempurature}°f
                        </Typography>

                        <Typography sx={{ mb: 1.5 }} gutterBottom>
                            Real Feel is {today.realFeel}°f
                        </Typography>

                        <Typography sx={{ mb: 1.5 }} gutterBottom>
                            {today.main}
                        </Typography>

                        <Typography variant="body2" gutterBottom>
                            {today.weatherDescription}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Sunrise at {today.sunrise} today
                        </Typography>
                        <Typography variant="body2" gutterBottom>
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
