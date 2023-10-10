import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

import { DiCssdeck } from 'react-icons/di';
import Link from 'next/link';
import React from 'react';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Proyectos</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Tecnologias</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>Sobre mi</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Leon2192/Leon2192">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/leonardo-manuel-arrieta">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
       
      </Div3>
    </Container>
);

export default Header;
