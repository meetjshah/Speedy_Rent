import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
// import LanguageIcon from '@mui/icons-material/Language';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import SpeechRecognition from 'react-speech-recognition';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import ForumIcon from '@mui/icons-material/Forum';
// import './GroupChat';

import "./Button.css";

function Header({placeholder, data}) {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase()); 
        });

        if (searchWord === ""){
            setFilteredData([]);
        }
        else {
            setFilteredData(newFilter);
        }
        
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    }


    return (
        <div className = 'header'>
            <Link to = '/'>
                <img
                    className="header__icon"
                    src = "speedy_rent_logo.png"
                    alt = " "
                    
                />
            </Link>
    
            <div className='header__center'>
                <input type = "text" placeholder = {placeholder} value = {wordEntered} onChange = {handleFilter}/>
                {filteredData.length === 0 ? <SearchIcon className='search_icon'/> : <CloseIcon className='search_icon' id = "clearBtn" onClick = {clearInput}/>}
                

            {filteredData.length !== 0 && 
            (    
                <div className = "dataResult">
                        {filteredData.slice(0, 15).map((value, key) => {
                            return (
                            <a className = "dataItem" href = {value.link} target = "_blank" id = "dataItemTag">
                                
                                <p>{value.title}</p>
                            </a> 
                            );
                        })}
                </div>
            )}
                
            </div>

            
            {/* className="button" type="button" style={{maxWidth:"280px",position:"fixed", top:15, right:650,display:"block"}} */}
            <div className='header__right'>
                <KeyboardVoiceIcon className='speak_button' onClick={SpeechRecognition.startListening}/>
                <Link className='chat_button' to="/groupchat" > <ForumIcon/> </Link>
                {/* <button type="button" class= "button" style={{maxWidth:"280px",position:"fixed", top:15, right:780,display:"block"}} onClick={SpeechRecognition.startListening}>Speak</button> */}
                {/* <p> Become an owner today!</p> */}
                {/* <LanguageIcon />
                <ExpandMoreIcon /> */}
                <Link className='avatar' to = '/signup'>
                    <Avatar/>
                </Link>
            </div>
        </div>
    )
}

export default Header
