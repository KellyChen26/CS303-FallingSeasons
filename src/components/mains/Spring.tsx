import { PetalFall } from "falling-seasons/react";
import styled from "styled-components";

const StyledSpring = styled.main`
    border: dashed 3px hotpink;
    margin: auto;
    padding: 20px;
    background-color: #FFCED8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%; //I learned from https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/fit-content that this adapts the content to fit within its container
    font-size: 25px;
`

const StyledText = styled.div`
    color: #FF467A;
`


export default function Spring() {
    return(
        <>
            <PetalFall/>
                <br/>
            <StyledSpring>
                <StyledText>
                    <h1>Happy Spring!</h1>
                    <br/>
                    <h3>Cherry Blossom Petals and Blossoms</h3>
                </StyledText>
                <br/>
                <img src = "/images/Spring.jpeg" alt="A tree with blooming white flowers at Boston University's BU Beach."/>
            </StyledSpring>
        </>

    )
}

