import React from "react";

const ERRORS_STYLE = {
    padding: 10,
    margineBottom: 30,
    borderRedius: 5,
    color: "#62626",
    backgroundColor: "#FFDDDF"
};

export default function Errors(props) {
    const { errorMessages } = props;
    if (!errorMessages || !errorMessages.length) {
        return null;
    }
    return(
        <div style={ERRORS_STYLE}>
            {errorMessages.map(e => <div key={e}>{e}</div>)}
        </div>            
    );
}