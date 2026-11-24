import { LeafFall } from "falling-seasons/react";
import styled from "styled-components";

const StyledFall = styled.main`
    border: dashed 3px #EE6200;
    margin: auto;
    padding: 20px;
    background-color: #FFEAD3;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;  
    font-size: 25px;
`

const Styledh1 = styled.h1`
    color: #FF9A00;
`

const Styledh3 = styled.h3`
color: saddlebrown`

export default function Fall() {
    return(
        <>
            <LeafFall wind={0.6} count={130} />
            <br/>
            <StyledFall>
                <Styledh1>Happy Fall!</Styledh1>
                <br/>
                <Styledh3>Autumn Leaves</Styledh3>
                <br/>
                <img src="/images/Fall.jpeg" alt="A tree with yellow leaves on Boston's Newbury Street during fall."/>
            </StyledFall>

        </>
    )
}