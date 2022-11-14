import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CurrentWeather from './Current';
import HourlyWeather from './Hourly';
import WeeklyWeather from './Weekly';


const pages = ['Current Forecast', 'Hourly Forecast', 'Weekly Forecast'];

const DisplayOptions = ({ today, hourly, weekly, tabState, tabSetState, time, day }) => {

    // const [tab, setTab] = React.useState('')

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-around' }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={() => tabSetState(`${page}`)}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <div >
                {tabState === '' && <div>enter your city</div>}
                {tabState === 'Loading' && <div>Loading</div>}
                {tabState === 'Current Forecast' && < CurrentWeather today={today} time={time} />}
                {tabState === 'Hourly Forecast' && < HourlyWeather hourly={hourly} />}
                {tabState === 'Weekly Forecast' && < WeeklyWeather weekly={weekly} day={day} />}

            </div>
        </>
    );
};
export default DisplayOptions;
