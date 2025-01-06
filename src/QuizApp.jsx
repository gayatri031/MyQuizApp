import React, { useState } from "react";
import { data } from "./data";
import './quizstyle.css';

function QuizApp() {
    const [index, setIndex] = useState(0);
    const [option, setOption] = useState('');
    const [finished, setFinish] = useState(false);
    const [score, setScore] = useState(0);
    const correctAnswers = ['Option 1', 'Option 1', 'Option 1', 'Option 1', 'Option 1', 'Option 1', 
        'Option 1', 'Option 4', 'Option 1', 'Option 1',]
    
    const handleNext = () => {
        if (index < data.length - 1) {
            if (correctAnswers[index] === option) {
                setScore(score + 1);
            }
        setIndex(index+1);
        setOption(null);
        } else {
            if (correctAnswers[index] === option) {
                setScore(score + 1);
            }
            setFinish(true);   
        }
    }

    if (finished) {
        return(
            <div className="scorePage">
                <h1>Quiz Finished</h1>
                <h3>Your Score is {score} out of {data.length}</h3>
            </div>
        );
    }
    const handleSelect = (opt) => {
        setOption(opt);
    }
    return (
        <div className="quiz">
            <h3>{data[index].Question}</h3>
            <ul>
                <li className={option === 'Option 1' ? 'selected' : 'null'}
                onClick={() => {handleSelect('Option 1')}}>{data[index].Option1}</li>
                <li className={option === 'Option 2' ? 'selected' : 'null'}
                onClick={() => {handleSelect('Option 2')}}>{data[index].Option2}</li>
                <li className={option === 'Option 3' ? 'selected' : 'null'}
                onClick={() => {handleSelect('Option 3')}}>{data[index].Option3}</li>
                <li className={option === 'Option 4' ? 'selected' : 'null'}
                onClick={() => {handleSelect('Option 4')}}>{data[index].Option4}</li>
            </ul>
            <button onClick={handleNext} disabled={!option}>Next</button>
            <h5>Question {index + 1} of {data.length}</h5>
        </div>
    );
}

export default QuizApp;