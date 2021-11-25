import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


function Section({ title, description, leftButton, rightButton, backgroundImage }) {
    return (
        <Wrap bgImage={backgroundImage}>
            <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            </Fade>
            <Buttons>
            <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        {leftButton}
                    </LeftButton>
                    {rightButton &&
                        <RightButton>
                            {rightButton}
                        </RightButton>
                    }
                </ButtonGroup>
                </Fade>
                <DownArrow src="images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

// -----------------------(Styled-Components)----------------------------

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background:url('/images/model-s.jpg');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image: ${props => `url("/images/${props.bgImage}")`} 

`

const ItemText = styled.div`
text-align: center;
padding-top:15vh;
`

const ButtonGroup = styled.div`
display: flex;
/* margin-bottom: 10vh; */
    @media (max-width:768px){
        flex-direction: column;
    }

`

const LeftButton = styled.div`
background-color: rgba(23,26,32,0.8);
width:256px;
height: 40px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity:0.85;
font-size: 12px;
cursor: pointer; 
margin: 13px;
text-transform: uppercase;
`
const RightButton = styled(LeftButton)`
background-color: white;
color: black;
opacity:0.65 ;

`

const DownArrow = styled.img`
overflow-x: hidden;
height: 40px;
animation: animationDown infinite 1.5s;
`

const Buttons = styled.div`


`


// -----------------------(Styled-Components)----------------------------
export default Section
