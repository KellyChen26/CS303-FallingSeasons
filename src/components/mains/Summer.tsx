import { FallingSeason } from "falling-seasons/react";
import styled from "styled-components";

const StyledSummer = styled.div`
    border: dashed 3px darkgreen;
    margin: auto;
    padding: 20px;
    background-color: #E8F5E9; 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%; //I learned from https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/fit-content that this adapts the content to fit within its container
    font-size: 25px;
`

const Styledh1 = styled.h1`
    color: darkgreen;
`

const Styledh3 = styled.h3`
    color: goldenrod;
`

export default function Summer() {
    return(
        <>
            <FallingSeason season="summer" />
            <br/>
            <StyledSummer>
                <Styledh1>Happy Summer</Styledh1>
                <br/>
                <Styledh3>Dandelion Seeds Drifting Among Golden Pollen</Styledh3>
                <br/>
                <img src = "/images/Summer.jpeg" alt = "A summer day at Boston Commons"/>
            </StyledSummer>
            <br/>

        </>

    )

}