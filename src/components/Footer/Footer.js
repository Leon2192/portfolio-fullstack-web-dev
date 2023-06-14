import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

import React from 'react';
import { SocialIcons } from '../Header/HeaderStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Tel</LinkTitle>
          <LinkItem href="tel:314-343-3432">+5411 27682286</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@jsmastery.com">
            leo.arrieta93@hotmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Leonardo Manuel Arrieta</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Leon2192/Leon2192">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/leonardo-manuel-arrieta">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
         
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
