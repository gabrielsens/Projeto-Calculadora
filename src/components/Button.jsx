import React from "react";
import './Button.css'



let Button = props => {
    let classes = "button "
    classes += props.triple ? 'triple' : ''
    classes += props.double ? 'double' : ''
    classes += props.operation ? "operation" : ""

    return (<button 
    onClick={e => props.click && props.click(props.label)}
    className={classes} >{props.label}</button>)
}
export default Button