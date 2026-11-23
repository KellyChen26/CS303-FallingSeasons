import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: aliceblue;
    padding: 15px;
`

export default function Header() {
    return(
        <StyledHeader>
            <h2>Falling Seasons</h2>
        </StyledHeader>
    )
}