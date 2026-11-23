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



export default function Home() {
    return(
        <StyledContainer>
            <Rainfall fullScreen/>
            <br/>
            <h1>Welcome to Falling-Seasons!</h1>
            <br/>
            <h2>Select a season to see it cascade across the screen!</h2>
            <h4>Select between Summer, Spring, Fall and Winter!</h4>
            <br/>
            <img src="/images/Home.jpeg" alt="Trees representing the four seasons - summer, spring, fall, and winter"/>
        </StyledContainer>
    )
}