import React from "react";
import styled from 'styled-components';

const StyledInfo = styled.div`
animation: ${pr => pr.theme.quicktransition};
color: ${pr => pr.theme.primary};
.artistRef{
    font-size: 1rem;
    display: flex;
    justify-content: flex-end;
    margin: auto;
    width:73%;

}
.imgInfo{
    color: ${pr => pr.theme.secondaryColor};
    background-color: ${pr => pr.theme.primaryColor};
    font-size:1.3rem;
    margin:auto;
    width:85%;
    padding:2.5%;
    text-align:center;
}

@media ${pr => pr.theme.breakPoints.tablet}{
    
    .imgInfo{
        font-size:1rem;
        width:78%
    };
}
@media ${pr => pr.theme.breakPoints.mobile}{
    
    .imgInfo{
        font-size:1rem;
        width:90%;
    };
    .artistRef{
        font-size:.8rem;
    }
}
`

function Info(props){
    const {copyright, date, text} = props

    return(
        <StyledInfo >
            <div className='artistRef'>
                <p>{copyright} {date}</p>
            </div>
            <p className='imgInfo'>{text}</p>
        </StyledInfo>
    )
}
export default Info