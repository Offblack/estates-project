import styled, { css } from 'styled-components';

const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  box-sizing: border-box;
  padding: 12px 53px 11px;
  margin: 10px;
  color: #fff;
  background-color: #00ab58;
  letter-spacing: 0.15em;
  line-height: 2em;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  outline: 0;
  cursor: pointer;

  ${props =>
    props.secondary &&
    css`
      position: relative;

      ::after,
      ::before {
        content: '';
        position: absolute;
        border: 2px solid #000;
        width: 50%;
        height: 30px;
        transition: 0.5s ease;
      }
      ::after {
        top: -8px;
        left: -8px;
        border-right: none;
        border-bottom: none;
      }
      ::before {
        bottom: -8px;
        right: -8px;
        border-left: none;
        border-top: none;
      }
      :hover:after,
      :hover:before {
        width: calc(50% - 15px);
        height: 40px;
      }
    `}
`;

export default Button;
