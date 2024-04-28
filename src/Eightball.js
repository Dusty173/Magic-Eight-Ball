import React, {useState} from "react";
import "./Eightball.css";
import answerList from "./answers.json";
import { random } from "./Randomizer";

const Eightball = ({answers = answerList}) => {
    const [answer, setAnswer] = useState({
        msg: "Think of a question",
        color: "black",
    });

    const getAnswer = (evt) => {
        setAnswer(random(answers));
    }

    const reset = () => {
        setAnswer({msg: "Think of a question",
        color: "black",})
    }

    return (
        <div>
            <div className="Eightball" onClick={getAnswer} style={{backgroundColor : answer.color}}>
                <b>{answer.msg}</b>
            </div>
            <button onClick={reset}>RESET</button>
        </div>
    )

}




export default Eightball;