import React from "react";
import "./FAQ.css";
import { useState } from "react";

const SingleQuestion = ({ localdata }) => {
  const handleQuestions = (e) => {
    return <p>{e.question}</p>
  }
  var [isAns, setIsAns] = useState();
  var [btnText, setBtnText] = useState("+");

  return (
    <div className="single-question">
      {!localdata.QA ? null : localdata.QA.map(handleQuestions)}
      <div className="question">
        <button
          className="see-more-btn"
          onClick={() => {
            setIsAns(!isAns);
            setBtnText(btnText === "+" ? "-" : "+");
          }}
        >
          {btnText}
        </button>
      </div>
      <div className="answer">{/* {isAns && <p>{answer}</p>} */}</div>
    </div>
  );
};

export default SingleQuestion;
