import React from 'react'
import './SearchPage.css'
import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Link} from "react-router-dom";
import Rating from '@mui/material/Rating';
function SearchPage() {

    const [value, setValue] = React.useState(4);
    
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

            <Link className='searchResult_link' to = '/clogin'>
                <div className='searchResult'>
                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"} alt="" />
                    <FavoriteBorderIcon
                    className="searchResult__heart" />
                    <div className='searchResult__info'>
                        <div className="searchResult__infoTop">
                            <h3>{"Bloomington Unity Apartment"}</h3>
                            <p>{"2 guest · 2 bedroom · 1 shared bathroom · Wifi · Kitchen · Free parking · Washing machine"}</p>
                            <p>{"625 E Koop St, Bloomington, IN"}</p>
                            
                        </div>
                        <div className="searchResult__infoBottom">
                            <div className="text_cost">
                                <h4>$ 900 / Month</h4>
                            </div>
                            <div className="searchResult__stars">
                                <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                setValue(newValue);
                                }}
                                />
                            </div>
                        </div>
                    </div>
                    
                    <Link to = '/map_app1'>
                        Show on map
                    </Link>
                    
                </div>
            </Link>

            <Link className='searchResult_link' to = '/clogin'>
                <div className='searchResult'>
                    <img src={"https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"} alt="" />
                    <FavoriteBorderIcon
                    className="searchResult__heart" />
                    <div className='searchResult__info'>
                        <div className="searchResult__infoTop">
                            <h3>{"Bloomington Roll Fields House"}</h3>
                            <p>{"3 guest · 3 bedroom · 2 bathroom · Wifi · Kitchen · Own garage · Washing machine"}</p>
                            <p>{"878 W Houd St, Bloomington, IN"}</p>
                        </div>
                        <div className="searchResult__infoBottom">
                            <div className="text_cost">
                                <h4>$ 1300 / Month</h4>
                            </div>
                            <div className="searchResult__stars">
                                <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                setValue(newValue);
                                }}
                                />
                            </div>
                        </div>
                    </div>
                    <Link to = '/map_app2'>
                        Show on map
                    </Link>
                </div>
            </Link>

            <Link className='searchResult_link' to = '/clogin'>
                <div className='searchResult'>
                    <img src={"https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/dn9JmbyHvw0DTUWlpE8V9Z0K4lU=/1660x934/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/S4ZX2DV7BZDW5HW54OMMISE4Y4.jpg"} alt="" />
                    <FavoriteBorderIcon
                    className="searchResult__heart" />
                    <div className='searchResult__info'>
                        <div className="searchResult__infoTop">
                            <h3>{"Bloomington Downtown Apartment"}</h3>
                            <p>{"1 guest · 1 bedroom · 1 bathroom · Wifi · Kitchen · Street free parking · Washing machine"}</p>
                            <p>{"786 S Naul St, Bloomington, IN"}</p>
                        </div>
                        <div className="searchResult__infoBottom">
                            <div className="text_cost">
                                <h4>$ 800 / Month</h4>
                            </div>
                            <div className="searchResult__stars">
                                <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                setValue(newValue);
                                }}
                                />
                            </div>
                        </div>
                    </div>
                    <Link to = '/map_app3'>
                        Show on map
                    </Link>
                </div>
            </Link>
        </div>
    )
}

export default SearchPage
