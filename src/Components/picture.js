import React from "react";

function Picture(props) {
    const {source} = props

    return(
        <div className='img-container'>
            <img src={source} alt='Picture of the day'></img>
        </div>
    )
}
export default Picture