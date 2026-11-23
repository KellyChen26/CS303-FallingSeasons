import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: aliceblue;
`

export default function Footer() {
    return (
        <StyledFooter>
            <p>
                All Rights Reserved by Kelly Chen
                <a href=""> Credits</a> &#169;
            </p>
        </StyledFooter>
    )
}


