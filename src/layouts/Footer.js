import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 5vh;
`

const FooterLink = styled.a`
    color: #000;
`

export default function Footer() {
    return (
        <FooterContainer>
            <FooterLink href='https://github.com/Zikuz' target="_blank">Ziku</FooterLink>
            <FooterLink href='https://piotrek-hub.github.io/portfolio/' target="_blank">Piotrek</FooterLink>
        </FooterContainer>
    );
}
