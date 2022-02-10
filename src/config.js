// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./components/Options/Options";
import Quiz from "./components/Quiz/Quiz";
const config = {
    botName : "SpeedyRentBot",
  initialMessages: [createChatBotMessage(`Hello, How can I help you?`, {
      widget : "options",
  })],
  widgets : [
      {
          widgetName : "options",
          widgetFunc : (props) => <Options {...props} />
      },
     {
        widgetName : "Apartments",
        widgetFunc : (props) => <Quiz {...props} />,
        props : {
          questions : [ 
              { 
              question : "Click to access the link",
              answer : "Paste link here",
              id : 1,
              },
          ]
        }
     },
     
    
  ]
}

export default config
