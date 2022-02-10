import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    // {
    //   text: "Cars",
    //   handler: props.actionProvider.handleCars,
    //   id: 1,
    // },
    // { 
    //   text: "Boat", 
    //   handler: props.actionProvider.handleBoat, 
    //   id: 2 },
    { 
      text: "Apartments", 
      handler: props.actionProvider.handleApartments, 
      id: 1 },
      { 
          text: "Help", 
          handler: props.actionProvider.help, 
          id: 2 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
