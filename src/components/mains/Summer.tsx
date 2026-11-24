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
    width: 40%;
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
            <FallingSeason season="summer" fullScreen speed={1.5} wind={0.5} colors={["#619DC6", "#F4BE38"]} />
            <br/>
            <StyledSummer>
                <Styledh1>Happy Summer</Styledh1>
                <br/>
                <Styledh3>Dandelion Seeds Drifting Among Golden Pollen</Styledh3>
                <br/>
                <img src = "/images/Summer.jpeg" alt = "A summer day at Boston Commons."/>
            </StyledSummer>
            <br/>

        </>

    )

}


