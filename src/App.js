import './App.css';
import React, {useState} from 'react';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage';
import LoginPage from './LoginPage';
import { BrowserRouter as Router, Switch, Route, Redirect, Link} from "react-router-dom";
import { Container } from 'react-bootstrap';
import { AuthProvider } from './AuthContext'; 
import SignUp from './SignUp';
import Login from './Login';
import UserView from './UserView';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import GroupChat from './GroupChat';

import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import config from "./config"
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import "./Button.css";
import Hello from './Hello';
import Trial from './Trial';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import ServiceBook from './ServiceBook';
import Checkout from './Checkout';
import Booked from './Booked';
import CheckoutLogin from './CheckoutLogin';
import MapApp1 from './MapApp1';
import AdminPage from './AdminPage';
import "./firebase.js"
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const auth = firebase.auth();

function App() {
  
  const [mode, setmode] = useState('none');
  
  const toggleView = ()=>{
    if (mode === 'none') {
      setmode('fixed');
  }
  else{
    setmode('none');
  }
}

const commands = [
  {
  command : ["Go to *", "Open *"],
  callback : (redirectPage) => setRedirectUrl(redirectPage),
   },
];

const {transcript} = useSpeechRecognition({commands});

const [redirectUrl, setRedirectUrl] = useState("");
const pages = ["hello","search","home"];
const urls = {
  hello : "/hello",
  search : "/search",
  home : "/"
};

if(!SpeechRecognition.browserSupportsSpeechRecognition){
  return null;
}

let redirect = "";
if (redirectUrl) {
  if(pages.includes(redirectUrl)){
      redirect = <Redirect to={urls[redirectUrl]} />
  }else{
      redirect = <p>Could not find page :{redirectUrl}</p>;
  }
}

  return (
    <div className="app">
      <Router> 
      
        <Header />
        <AuthProvider>
        
        
        <Switch>
          <Route exact path = "/login">
            <LoginPage/>
          </Route>
          {/* <div className="setting_container"> */}
            <Route path = "/admin_page">
              <AdminPage/>
            </Route>
          {/* </div> */}
          <Route exact path = "/search">
            <SearchPage/>
          </Route>

          <Route exact path = "/groupchat">
            <GroupChat/>
            </Route> 
          
          <Route path = "/signup">
          
              <Container 
              className="d-flex align-items-center justify-content-center" 
              style = {{minHeight: "100vh"}}>
                <div 
                className = "w-100"
                style = {{maxWidth: "400px"}}>
                  <SignUp/>
                </div>
              </Container>

          </Route>

          <Route path = "/login_1">

              <Container 
              className="d-flex align-items-center justify-content-center" 
              style = {{minHeight: "100vh"}}>
                <div 
                className = "w-100"
                style = {{maxWidth: "400px"}}>
                  <Login/>
                </div>
              </Container>

          </Route>

          <Route path = "/clogin">
            <CheckoutLogin/>
            </Route>

          <Route path = "/map">
            <MapApp1/>
            </Route>


          <PrivateRoute exact path = "/userview" component = {UserView}/>
          <PrivateRoute path = "/updateprofile" component = {UpdateProfile}/>
          <PrivateRoute path = "/checkoutpage" component = {Checkout}/>
          <PrivateRoute path = "/cleaningservice" component = {ServiceBook}/>
          <PrivateRoute path = "/booked" component = {Booked}/>

          <Route path = "/forgotpassword" component = {ForgotPassword} />




          {/* Better to have the default page at the bottom, if the switch does
          not match anything, it will fall back to this */}
          
          <Route exact path = "/">
            <Home />
           
          </Route>
         
          <Route exact path = "/hello">
            <Hello />
          </Route>

          <Route exact path = "/trial">
            <Trial />
          </Route>
         
      
        
        </Switch>
        </AuthProvider>
        
        <Footer />
        {redirect}   
      </Router>
      <button type="button" class= "button" style={{maxWidth:"300px", position:"fixed",bottom:20, right:100}} onClick={toggleView}>Chat</button>
            <div style={{maxWidth:"500px", position:"fixed",bottom:80, right:10,display:`${mode === 'none' ? 'block' : 'none'}` }}>
              <Chatbot
                config={config}
                 messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            </div>
      
      <p id="transcript">Transcript : {transcript}</p>
      
      {/* Home */}

          {/* Header */}

          {/* Banner */}
            {/* Search */}

          {/* Cards */}

          {/* Footer */}

      {/* Search Page */}
    </div>
  );
}

export default App;
