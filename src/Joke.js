import React from "react";
import jokesData from "./JokesData";

function Joke(props) {
    console.log(props)
    return (
        <div>
            <h3>id: {props.id}</h3>
            <h3 style={{ display: !props.question && "none", color: "blue" }}>Question: {props.question}</h3>
            <h3 style={{ color: "skyblue" }}>Answer: {props.answer}</h3>
            <hr />
        </div>
    )
}

export default Joke 