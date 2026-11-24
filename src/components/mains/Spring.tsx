import { PetalFall } from "falling-seasons/react";
import styled from "styled-components";

const StyledSpring = styled.main`
    border: dashed 3px hotpink;
    margin: auto;
    padding: 20px;
    background-color: #FFCED8;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%; 
    font-size: 25px;
`

const StyledText = styled.div`
    color: #FF467A;
`


export default function Spring() {
    return(
        <>
            <PetalFall fullScreen count={160} speed={1.5} size={[8,10]}/>
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

