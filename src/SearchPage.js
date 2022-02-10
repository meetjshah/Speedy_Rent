import React from 'react'
import './SearchPage.css'
import { Button } from '@mui/material';
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>62 rentals · 26 august to 30 august · 2 speedys</p>
                <h1>Availability nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of rental</Button>
                <Button variant="outlined">Price</Button>
                {/* <Button variant="outlined">Rooms and beds</Button> */}
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
            location="Private room in center of London"
            title="Stay at this spacious Edwardian House"
            description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
            star={4.73}
            price="£30 / night"
            total="£117 total"
            />


            <SearchResult
                img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
                location="Private room in center of London"
                title="Spacious Peaceful Modern Bedroom"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
                star={5.0}
                price="£60 / night"
                total="£450 total"
            />

            <SearchResult
                img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
                location="Private room in center of London"
                title="5 Star Luxury Apartment"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={3.85}
                price="£90 / night"
                total="£650 total"
            />
            

        </div>
    )
}

export default SearchPage

