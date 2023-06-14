import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

import React from 'react';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Tecnologias</SectionTitle>
    <SectionText>
    A lo largo de mi trayectoria como desarrollador, he adquirido un amplio conocimiento y experiencia en diversas tecnologías y herramientas, incluyendo React, React Native, Node.js, MongoDB, SQL, Next.js y Angular, entre otras. Estas habilidades me permiten crear soluciones web innovadoras y escalables, así como aplicaciones móviles eficientes y orientadas al usuario.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiencia con Javascript <br />
            React.js, Next js, Angular <br />
            React Native, typescript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experiencia con  <br />
            Node y bases de datos <br />
            relacionales y no relacionales.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experiencia con <br />
            herramientas como Figma.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
