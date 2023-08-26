import React from "react";
import "./FAQ.css";
import { useState } from "react";

const SingleQuestion = (props) => {

  const handleQuestions = (e)=>{
    return <p>Hello</p>
  }

  var [isAns, setIsAns] = useState();
  var [btnText, setBtnText] = useState("+");

  // const arr = [];
  // console.log(props.questionlocalState);
  // let arr = props.questionlocalState;
  // console.log(props.questionlocalState.QA.question);
  // arr.push(props.questionlocalState.QA);
  // console.log(arr[0].question);

  return (
    <div className="single-question">
        
      <div className="question">
        {/* {arr.map(handleQuestions)} */}
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
