import { Container, Title } from './Section.styled';
import React from 'react';
import { IProps } from './SectionInterface';

export const Section: React.FC<IProps> = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};
