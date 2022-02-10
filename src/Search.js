import React, { useState } from 'react';
import './Search.css';
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Button } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import {useHistory} from 'react-router-dom';

//Date Picker Component 
function Search() {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='search'>
            <DateRangePicker ranges = {[selectionRange]}
            onChange = {handleSelect} />
            <h2>
                Number of renters
                <GroupIcon />
            </h2>
            <input min={0}
            defaultValue={2}
            type="number" />
            <Button onClick = {() => history.push('/search')}>
                Search SpeedyRent
            </Button>

            
        </div>
    )
}

export default Search
