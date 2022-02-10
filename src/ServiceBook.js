import "./ServiceBook.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Link} from "react-router-dom";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

function ServiceBook() {

    const [value, setValue] = React.useState(new Date());

    return (
        <Box
        component="form"
        sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <div className='all_div'>

            <p className='text_header'> Please fill the following to complete this service booking </p>

            <TextField
            required
            id="outlined-required"
            label="Name"
            defaultValue=""
            />
            <br/>
            <TextField
            required
            id="outlined-required"
            label="Phone Number"
            defaultValue=""
            />
            <br/>
            <TextField
            required
            id="outlined-required"
            label="Email"
            defaultValue=""
            />
            <br/>
            <TextField
            required
            id="outlined-required"
            label="Adress"
            defaultValue=""
            />
            <br/>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="DateTimePicker"
                    value={value}
                    onChange={(newValue) => {
                    setValue(newValue);
                    }}
                />
            </LocalizationProvider>
            <br/>
            <br/>
            <Link className='submit_button' to = '/'>
                Submit
            </Link>
      </div>
    </Box>
    )
}

export default ServiceBook