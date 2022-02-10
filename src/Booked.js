import "./Booked.css"
import * as React from 'react';
import {Link} from "react-router-dom";

function Booked() {
    return (
        <div className='all_div'>
            <p className='text'> The service has booked! </p>
            <Link className='finish_button' to = '/'>
                Finish
            </Link>
        </div>
    )
}

export default Booked