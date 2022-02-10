import React, { useState } from 'react'
import './Banner.css'
import { Button } from '@mui/material';
import Search from './Search';
import {useHistory} from 'react-router-dom';


function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search />}

                <Button onClick = {() => setShowSearch(!showSearch)}
                className='banner__searchButton'
                variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className='banner__info'>
                <h1>
                    Rent whatever you like!
                </h1>
                <h5>
                    Want to rent a spaceship? 
                    We provide those too!
                </h5>
                <Button onClick={() => history.push('/search')}
                variant = 'outlined'>
                    Explore nearby
                </Button>
            </div>
        </div>
    )
}

export default Banner
