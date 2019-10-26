import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  margin: 24px 0;
  position: relative;
`;

const StyledBar = styled.div`
  width: 100%;
  height: 2px;
  background: #7d7d7d;
  transition: 0.1s all;
`;

const StyledLabel = styled.label`
  color: #7d7d7d;
  position: absolute;
  top: 3px;
  left: 0;
  transition: 0.2s ease-out all;
  font-size: 16px;
`;

const StyledInput = styled.input`
  color: #000;
  font-size: 16px;
  border: none;
  line-height: 22px;
  width: 100%;
  background: none;

  :focus {
    outline: none;
    color: $grey400;
  }

  :focus + label {
    top: -22px;
    font-size: 13px;
  }

  :not(:placeholder-shown) + label {
    top: -22px;
    font-size: 13px;
  }

  :focus ~ div {
    background: #00ab58;
  }
`;

const Input = ({ name, label, ...props }) => (
  <StyledWrapper>
    <StyledInput type="text" name={name} id={name} required placeholder=" " {...props} />
    <StyledLabel>{label}</StyledLabel>
    <StyledBar />
  </StyledWrapper>
);

export default Input;
