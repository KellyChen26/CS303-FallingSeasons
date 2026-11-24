//Welcome page where the user can select which season to see across their screen
//Rain falls across the screen here

import {Rainfall} from "falling-seasons/react";
import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: aliceblue;
`

const StyledText = styled.div`
    border: dashed palevioletred 3px;
    padding: 10px;

`

export default function Home() {
    return(
        <StyledContainer>
            <Rainfall fullScreen gusts={0.7} count={150}/>
            <br/>
            <h1>Welcome to Falling-Seasons!</h1>
            <br/>

            <StyledText>
                <h2>Select a season to see it cascade across the screen!</h2>
                <h4>Select between Summer, Spring, Fall and Winter!</h4>
            </StyledText>

            <br/>
            <img src="/images/Home.jpeg" alt="Tulips at Boston Public Garden."/>
        </StyledContainer>
    )
}