import React from "react";

function Info(props){
    const {copyright, date, text} = props

    return(
        <div className='info'>
            <span className='copyright'>{copyright}</span>
            <span className='date'>{date}</span>
            <p>{text}</p>
        </div>
    )
}
export default Info