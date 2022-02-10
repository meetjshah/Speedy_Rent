// import React from "react";
// import Options from "./components/Options/Options";
class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }
   greet= () => {
       const message = this.createChatBotMessage("Hello friend");
       this.addMessageToState(message);
   };

   help= () => {
    const message = this.createChatBotMessage("1.We offer the best rates with discounts already deducted from the price. \n, 2.Apartments and services are offered by us. \n, 3.Type 'apartments' to search for apartments ");
    this.addMessageToState(message);
   };

   handleNoInput = () => {
       const message = this.createChatBotMessage("Sorry, it did not match any results");
       this.addMessageToState(message);
        
   };

handleApartments = () => {
    const message = this.createChatBotMessage("Fantastic. Here is your link.",
    {
        widget : "Apartments",
    })
    this.addMessageToState(message);
    }

   addMessageToState = (message) => {
       this.setState((prevState) => ({
           ...prevState, //Copying the previous data over. prevState is a given function in react.  
           messages : [...prevState.messages, message],
       }));
   };

 }
 
 export default ActionProvider;
