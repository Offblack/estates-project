import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  width: 90%;
  margin: 24px 0;
  position: relative;
  ${props =>
    props.short &&
    css`
      width: 40%;
    `}
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

const Input = ({ type, name, label, short, ...props }) => (
  <StyledWrapper short={short}>
    <StyledInput type={type} name={name} id={name} required placeholder=" " {...props} />
    <StyledLabel htmlFor={name}>{label}</StyledLabel>
    <StyledBar />
  </StyledWrapper>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
