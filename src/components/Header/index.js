import styled from 'styled-components';

const StyledHeader = styled.h1`
  margin: 20px 0 50px;
  color: #00ab58;
  font-size: 42px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -25px;
    left: 0;
    right: 0;
    margin: auto;
    width: 250px;
    height: 5px;
    background-color: #f0f0f0;
  }
`;

export default StyledHeader;
