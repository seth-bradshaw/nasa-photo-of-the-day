import React from "react";
import styled from 'styled-components';

const StyleImg = styled.div`

display:flex;
justify-content: center;
img{
    width:73%;
}
@media ${pr => pr.theme.breakPoints.tablet}{
    
    img{
        width:100%
    }
}
`

function Picture(props) {
    const {source} = props

    return(
        <StyleImg className='img-container'>
            <img src={source} alt='Picture of the day'></img>
        </StyleImg>
    )
}
export default Picture;