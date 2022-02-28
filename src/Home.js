import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';
import { Link } from 'react-router-dom';
// import './SearchPage';

function Home() {
    return (
        <div>
            <Banner />

            <div className='home__section'>
                <Link to = '/search' style={{ textDecoration: 'none', color: 'black'}}>
                    <Card src = "https://www.aveliving.com/AVE/media/Property_Images/Florham%20Park/hero/flor-apt-living-(2)-hero.jpg?ext=.jpg"
                        title = "Rent entire homes"
                        description = "Comfortable private places, with room for friends or family."/>
                </Link>

                <Link to = '/cleaning_service' style={{ textDecoration: 'none', color: 'black'}}> 
                    <Card src = "https://nextdaycleaning.com/wp-content/uploads/2019/10/carpet-cleaning-hero-imageres2-1024x805.jpg"
                        title = "Cleaning services"
                        description = "Our state-of-the-art equipment, high-quality cleaning products and attention to detail will help your business look good and extend the life of your hardwood, tile and carpet for years."/>
                </Link>
            </div>
            <div className='home_about_section'>
                <p className='home_about_section_text'>
                    <h2> About us </h2>
                    <h8> This is a rental web site which allows you to rent home from here or rent your home to others. </h8>
                </p>
            </div>
        </div>
    )
}

export default Home
