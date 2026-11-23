import { Snowfall } from "falling-seasons/react";
import styled from "styled-components";

const StyledWinter = styled.main`
    border: dashed 3px #133E87;
    margin: auto;
    padding: 20px;
    background-color: #D4EBF8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    font-size: 25px;
`

const Styledh1 = styled.h1`
    color: #074173;
`
const Styledh3 = styled.h3`
    color: #1F509A;
`

export default function Winter() {
    return(
        <>
            <Snowfall/>
            <br/>
            <StyledWinter>
                <Styledh1>Happy Winter!</Styledh1>
                <br/>
                <Styledh3>Snow Crystals</Styledh3>
                <br/>
                <img src="/images/Winter.jpeg" alt="Snow covered trees in Boston during winter."/>

            </StyledWinter>

        </>
    )
}