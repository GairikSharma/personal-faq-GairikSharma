import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FAQ.css";
import Tilt from "react-parallax-tilt";
import questions from "./questions";
import ProfileCard from "./profileCard";
import SingleQuestion from "./SingleQuestion";
import Modal from "../components/modal/Modal";

//chat icon
import { BsFillChatDotsFill } from "react-icons/bs";

const FAQ = () => {
  const [userdata, setUserData] = useState([{}]);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  // const fetchQA = async () => {
  //   try {
  //     const data = await fetch(
  //       `${process.env.REACT_APP_BASE_URL}read/livetocode`
  //     );
  //     const res = await data.json();
  //     setUserData(res.data);
  //     console.log(userdata);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    axios(`${process.env.REACT_APP_BASE_URL}read/livetocode`)
      .then((response) => {
        if (!response.data.error) {
          setUserData(response.data.data);
          console.log(userdata.name);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    // fetchQA()
  }, []);

  const showQuestionPopUp = () => {
    setShowQuestionModal(true);
  };

  return (
    <>
      {showQuestionModal && <Modal localstate={setShowQuestionModal} />}
      <div className="main">
        <div className="grid">
          <div className="grid1">
            <Tilt tiltMaxAngleX={12.5} tiltMaxAngleY={12.5}>
              <ProfileCard localstate={userdata.name} />
            </Tilt>
          </div>
          <div className="grid2">
            {questions.map((que) => {
              return <SingleQuestion key={que.id} {...que} />;
            })}
          </div>
        </div>
        <BsFillChatDotsFill className="chat-icon" onClick={showQuestionPopUp} />
      </div>
    </>
  );
};

export default FAQ;
