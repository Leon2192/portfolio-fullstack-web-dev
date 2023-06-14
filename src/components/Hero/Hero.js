import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';

import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import React from 'react';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Leonardo Manuel Arrieta <br />
          Fullstack web developer
        </SectionTitle>
        <SectionText>
          ¡Hola! Me llamo Leonardo, soy Fullstack web developer y vivo en Argentina.
          <br />
          Mi enfoque en el desarrollo se basa en la búsqueda constante de la excelencia y la entrega de productos de alta calidad. Me siento motivado por los desafíos técnicos y me apasiona mantenerme actualizado con las últimas tendencias y avances en el mundo de la tecnología.
        </SectionText>
        
      </LeftSection>
    </Section>
  </>
);

export default Hero;