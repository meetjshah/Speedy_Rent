import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
 import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
// import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import "./Button.css";
import GroupChat from './GroupChat';

function Header() {
   
    return (
        <div className = 'header'>
            <Link to = '/'>
                <img
                    className="header__icon"
                    src = "speedy_rent_logo.png"
                    // https://image.shutterstock.com/image-vector/house-home-roof-mortgage-real-260nw-1158370987.jpg
                    alt = " "
                    
                />
            </Link>
    
            <div className='header__center'>
                <input type = "text" />
                <SearchIcon />
                <Link to="/groupchat"  className="button" type="button" style={{maxWidth:"280px",position:"fixed", top:15, right:650,display:"block"}} >Group Chat</Link>
            <button type="button" class= "button" style={{maxWidth:"280px",position:"fixed", top:15, right:780,display:"block"}} onClick={SpeechRecognition.startListening}>Speak</button>
                
            </div>

           

            <div className='header__right'>
                <p>Become an owner today!</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Link to = '/login_1'>
                    <Avatar/>
                </Link>
            </div>
        </div>
    )
}

export default Header
