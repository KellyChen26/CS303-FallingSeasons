import {Link} from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledUl = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 30px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 20px
    
`

const StyledHomeLi = styled.li`
    border: dotted darkblue 3px;
    padding: 10px;

`

const StyledSummerLi = styled.li`
    border: dotted darkgreen 3px;
    padding: 10px;

`
const StyledSpringLi = styled.li`
    border: dotted hotpink 3px;
    padding: 10px;

`

const StyledFallLi = styled.li`
    border: dotted orangered 3px;
    padding: 10px;
`

const StyledWinterLi = styled.li`
    border: dotted silver 3px;
    padding: 10px;
`


export default function Nav() {
    return (
        <StyledNav>
            <StyledUl>
                <StyledHomeLi><StyledLink to="/">Home</StyledLink></StyledHomeLi>
                <StyledSummerLi><StyledLink to="/summer">Summer</StyledLink></StyledSummerLi>
                <StyledFallLi><StyledLink to="/fall">Fall</StyledLink></StyledFallLi>
                <StyledSpringLi><StyledLink to="/spring">Spring</StyledLink></StyledSpringLi>
                <StyledWinterLi><StyledLink to="/winter">Winter</StyledLink></StyledWinterLi>
            </StyledUl>
        </StyledNav>
    )
}