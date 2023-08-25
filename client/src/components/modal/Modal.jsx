import React, { useState } from "react";
import axios from "axios";
import "./modal.css";
import { GrClose } from "react-icons/gr";

function Modal(props) {
  const [question, setQuestion] = useState("");

  const hideQuestionPopUp = () => {
    props.localstate(false);
    console.log('loaded man');
  };

  const submitForm = async () => {
    try{
      const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}update/livetocode`, { question: question })
      if(response.status === 200)
        console.log("Question Posted!");
      else
        console.log("Error!");
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <>
      <div className="modal-wrapper">
        <div className="modal-body">
          <GrClose className="close-icon" onClick={hideQuestionPopUp} />
          <div className="modal-heading">Add a Question</div>
          <input type="text" placeholder="Add a queston" onChange={ (e)=>setQuestion(e.target.value) } />
    {/* <textarea type="text" placeholder="Add answer of the question" /> */}
          <button onClick={submitForm}>Add</button>
        </div>
      </div>
    </>
  );
}

export default Modal;
