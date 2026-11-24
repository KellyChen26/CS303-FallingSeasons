import {Routes, Route} from "react-router";
import Home from "./mains/Home.tsx";
import Summer from "./mains/Summer.tsx";
import Fall from "./mains/Fall.tsx";
import Spring from "./mains/Spring.tsx";
import Winter from "./mains/Winter.tsx";
import Nav from "./Nav.tsx";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import styled from "styled-components";

const StyledMain = styled.div`
    height:100vh;
    width:100%;
    text-align:center;
`


export default function Root(){
    return(
        <div id="page-wrapper">
            <Header/>
                <Nav/>
                    <StyledMain>
                        <Routes>
                            <Route path={'/'} element={<Home/>}/>
                            <Route path={'/Fall'} element={<Fall/>}/>
                            <Route path={'/Summer'} element={<Summer/>}/>
                            <Route path={'/Spring'} element={<Spring/>}/>
                            <Route path={'/Winter'} element={<Winter/>}/>
                        </Routes>
                    </StyledMain>
            <Footer/>
        </div>
    )

}