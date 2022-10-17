import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CurrentWeather({  today  }) {
    return (
        <div>
            <Box sx={{ minWidth: 275, display: 'flex', justifyContent: 'center', paddingBottom: '3rem' }}>
                <Card variant="outlined" sx={{width: '50vw', display: 'flex', justifyContent: 'center'}}>
                    <CardContent>

                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Today in {today.city}, {today.state}, {today.country}
                        </Typography>

                        <Typography variant="h5" component="div">
                            Current Weather is {today.tempurature}°f
                        </Typography>

                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Real Feel is {today.realFeel}°f
                        </Typography>

                        <Typography variant="body2">
                            {today.weatherDescription}
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
        </div>
    )
}
