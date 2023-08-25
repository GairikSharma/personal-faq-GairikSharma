import React from 'react'
import './FAQ.css'
import { useState } from 'react'

const SingleQuestion = ({question, answer}) => {
    var[isAns, setIsAns] = useState()
    var[btnText, setBtnText] = useState('+')
  return (
    <div className='single-question'>
        <div className="question">
            <p>{question}</p>
            <button 
            className='see-more-btn'
            onClick={
                ()=>{
                        setIsAns(!isAns)
                        setBtnText(btnText === '+'?'-':'+')
                    }
                }>{btnText}</button>
        </div>
        <div className="answer">
            {isAns && <p>{answer}</p>}
        </div>
    </div>
  )
}

export default SingleQuestion