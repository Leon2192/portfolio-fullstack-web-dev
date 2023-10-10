import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Img, Tag, TagList, TitleContent, UtilityList } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

import React, { useState, useEffect } from 'react';
import { projects } from '../../constants/constants';
import axios from 'axios';

const Projects = () => {



  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://54.89.109.196:3002/projects');
        setProjects(response.data);
        console.log('esta es la data', response.data)
        cconsolelog('estos son los proyectos', projects)
      } catch (err) {
        setError(err);
      }
    };

    fetchProjects();
  }, []);


  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Proyectos</SectionTitle>
      <GridContainer>
        {projects.reverse().map((p, i) => (
          <BlogCard key={i}>
            <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.name}</HeaderThree> 
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <br />
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                <Tag>{p.technology}</Tag> 
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.githug}>Code</ExternalLinks> {/* Corregir "githug" */}
              <ExternalLinks href={p.source}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}

      </GridContainer>
    </Section>
  )
};

export default Projects;