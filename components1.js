/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  padding: 20px;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  @media (max-width: 768px) {
    padding: 10px;
    margin: 5px;
  }
`;

const CardTitle = styled.h3`
  margin-bottom: 10px;
`;

const CardContent = styled.p`
  color: #666;
`;

const Card = ({ title, content }) => (
  <CardContainer>
    <CardTitle>{title}</CardTitle>
    <CardContent>{content}</CardContent>
  </CardContainer>
);

export default Card;
