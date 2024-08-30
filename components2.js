

// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 10px;
    margin: 5px;
  }

  &:hover {
    background-color: #0056b3;
  }
`;

// eslint-disable-next-line react/prop-types
const Button = ({ label, onClick }) => (
  <StyledButton onClick={onClick}>{label}</StyledButton>
);

export default Button;
