import React, { useState, useEffect } from "react";
import { useHistory, Link, Router } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Quiz.css";

const FlashCard = ({ question, answer, incrementIndex }) => {
  const history = useHistory();
  const [showAnswer, setShowAnswer] = useState(false);

  // useEffect(() => setShowAnswer(false), [question]);
  const handleredir = () => {
    history.push("/search");
  }
  
  return (
    <>
      
      <Button onClick={handleredir}>
        Click here
        </Button>  
     
    </>
  );
};

export default FlashCard;
