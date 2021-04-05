import React, {useState} from "react";

type PropsType = {
   // on: boolean
}

 export function OnOff (props: PropsType) {
    let [on, setOn] = useState(false)
    const onStyle = {
        width: "130px",
        height: "20px",
        border: "1px solid black",
        borderRadius: "5px",
        display: "inline-block",
        padding: "4px",
        marginRight: "4px",
        backgroundColor: on ? "green" : "white"
    };
    const offStyle = {
        width: "130px",
        height: "20px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        padding: "4px",
        backgroundColor: on ? "white" : "red"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        backgroundColor: on ? "green" : "red"
    };
    return <div>
        <div style={onStyle} onClick={() => {setOn(true)}}>ON</div>
        <div style={offStyle} onClick={() => {setOn(false)}}>OFF</div>
        <div style={indicatorStyle}></div>
    </div>
}


export default OnOff;







