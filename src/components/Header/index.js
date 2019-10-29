import styled from 'styled-components';

const StyledHeader = styled.h1`
  @keyframes appear {
    0% {
      opacity: 0;
      top: 35px;
    }
    100% {
      opacity: 1;
      top: 0;
    }
  }

  animation: appear 0.6s ease-in-out;
  margin: 20px 0 50px;
  color: #00ab58;
  font-size: 42px;
  position: relative;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 36px;
  }

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
