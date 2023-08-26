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
  const [userdata, setUser] = useState({});

  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const qsarr = [];
  {
    qsarr.push(userdata);
  }
  const qs = [];
  {
    qsarr.map((i) => {
      qs.push(qsarr.QA);
    });
  }
  // qsarr.push(userdata)
  // console.log(qsarr);
  useEffect(() => {
    axios(`${process.env.REACT_APP_BASE_URL}read/livetocode`)
      .then((response) => {
        if (!response.data.error) {
          // console.log(response.data.data);
          setUser({
            key1: "value1",
            key2: "value2",
            key3: "value3",
          });
          console.log(userdata);
          // setUserquestion(response.data.data.QA)
          // console.log(userquestion);
          // setUserData(response.data.data);
          // console.log(userdata.name);
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
            {qsarr.map((que) => {
              return (
                <SingleQuestion key={que.id} questionlocalState={userdata} />
              );
            })}
          </div>
        </div>
        <BsFillChatDotsFill className="chat-icon" onClick={showQuestionPopUp} />
      </div>
    </>
  );
};

export default FAQ;
