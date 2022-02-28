import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Link } from "react-router-dom";
// import { color } from '@mui/system';

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    return (
        <Link to="/login_1" style={{ textDecoration: 'none', color: 'black'}}>
        <div className='searchResult'>
            <img src={img} alt="" />
            <FavoriteBorderIcon
            className="searchResult__heart" />

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                    <p>{price}</p>
                    <p>{total}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarRateIcon className="searchResult__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
            </div>
            </div>
            <Link to = '/map'>
                Show on map
        </Link>
        </div>

        </Link>
    )
}

export default SearchResult
