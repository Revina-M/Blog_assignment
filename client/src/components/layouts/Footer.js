import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <FooterContainer>
            <span style={{color:"#fff",top:"0.5rem",left:"1rem",position:"relative"}}>
                &copy;{new Date().getFullYear()}All Rights Reserved.
            </span>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.footer`
background:#344;
height:2.6rem;
position:fixed;
left:0;
bottom:0;
width:100%;

`;