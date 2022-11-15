import React from "react";
import "./styles.css";

interface Props {
    formResult: {
        email: string,
        username: string,
        github: string,
        could_better: string
    }
}

const FormResults = ({formResult}: Props) => (
    <div className="result">
        <span>Email: </span>
        <div>{formResult?.email}</div>
        <span>Username: </span>
        <div>{formResult?.username}</div>
        <span>Github: </span>
        <div>{formResult?.github}</div>
        <span>What could be better? </span>
        <div>{formResult?.could_better}</div>
    </div>
)

export default FormResults;