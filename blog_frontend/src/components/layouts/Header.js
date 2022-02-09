import React from 'react';
import styled from 'styled-components';

function Header(props) {
    return (
        <MainContainer><h1>BLOGS</h1></MainContainer>
    );
}

export default Header;


const MainContainer = styled.header`
    background-color:black;
    height:7rem;
    h1{
        transform:translate(-50%,-50%);
        color:#fff;
        font-weight:900;
        position:absolute;
        top:7%;
        left:50%;
    }
`;