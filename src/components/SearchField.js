import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function SearchField({ value, data, change, submit }) {
    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' }, display: 'flex', flexDirection: 'column'
                }}
                noValidate
                autoComplete="off"
            >
                {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    <TextField id="filled-basic" label="Filled" variant="filled" /> */}
                <TextField
                    sx={{color: 'yellow !important'}}
                    id="cityInput"
                    label="Search Your City"
                    variant="standard"
                    onSubmit={submit}
                    value={value}
                    onChange={change}
                />
                <Button type='submit' variant="contained" onClick={submit}>Search</Button>
                {/* <button
                    //  onClick={getLocation}
                    onClick={submit}

                >
                    click me
                </button> */}
            </Box>
            {/* <textarea id='cityInput'></textarea>
                <button onClick={getLocation} >click me</button> */}
        </div>
    )
}
