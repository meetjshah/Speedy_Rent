import './App.css';
import React, {useState} from 'react';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage';
import LoginPage from './LoginPage';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { Container } from 'react-bootstrap';
import { AuthProvider } from './AuthContext'; 
import SignUp from './SignUp';
import Login from './Login';
import UserView from './UserView';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import AdminPage from './AdminPage';
import OwnerPage from './OwnerPage';
import UserPage from './UserPage';
import MapApp1 from './MapApp1';
import MapApp2 from './MapApp2';
import MapApp3 from './MapApp3';
import RentData from './Data.json';
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import config from "./config"
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import "./Button.css";
// import Hello from './Hello';
// import Trial from './Trial';
// import './GroupChat';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import Checkout from './Checkout';
import Booked from './Booked';
import GroupChat from './GroupChat';
import CleanServicePage from './CleanServicePage';
import CheckoutLogin from './CheckoutLogin';
import AdminLogin from './AdminLogin';
import OwnerLogin from './OwnerLogin';

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
      
        <Header placeholder = "Search for things to rent..." data = {RentData}/>
        <AuthProvider>
        
        
        <Switch>
          <Route exact path = "/login">
            <LoginPage/>
          </Route>

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

          <Route path="/clogin">
            <CheckoutLogin/>
          </Route>

          <PrivateRoute exact path = "/userview" component = {UserView}/>
          <PrivateRoute path = "/updateprofile" component = {UpdateProfile}/>
          <PrivateRoute path = "/checkoutpage" component = {Checkout}/>
          {/* <PrivateRoute path = "/booked" component = {Booked}/> */}
          <Route path = "/forgotpassword" component = {ForgotPassword} />

          <Route path = "/cleaning_service">
            <CleanServicePage/>
          </Route>

          <Route path = "/booked">
            <Booked/>
          </Route>

          
          


          {/* Better to have the default page at the bottom, if the switch does
          not match anything, it will fall back to this */}
          
          <Route exact path = "/">
            <Home />
           
          </Route>

          <Route path= '/map_app1'>
              <MapApp1/>
            </Route>
            <Route path= "/map_app2">
              <MapApp2/>
            </Route>
            <Route path= "/map_app3">
              <MapApp3/>
            </Route>
         
          {/* <Route exact path = "/hello">
            <Hello />
          </Route>

          <Route exact path = "/trial">
            <Trial />
          </Route> */}
         <Route path="/alogin">
            <AdminLogin/>
          </Route>

          <Route path="/ologin">
            <OwnerLogin/>
          </Route>
          <div className="setting_container">
          <PrivateRoute exact path = "/admin_page" component = {AdminPage}/>

          <PrivateRoute path = "/owner_page" component = {OwnerPage}/>
    
            <Route path = "/user_page">
              <UserPage/>
            </Route>
          </div>
            
      
        
        </Switch>
        </AuthProvider>
        
        <Footer />
        {redirect}   
      </Router>
      <button type="button" class= "button" style={{maxWidth:"300px", position:"fixed",bottom:20, right:20}} onClick={toggleView}>
        Chat
      </button>
            <div style={{maxWidth:"500px", position:"fixed",bottom:80, right:23,display:`${mode === 'none' ? 'block' : 'none'}` }}>
              <Chatbot
                config={config}
                 messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            </div>
      
      {/* <p id="transcript">Transcript : {transcript}</p> */}
      
    </div>
  );
}

export default App;
