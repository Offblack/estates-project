import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 50px;
`;

const MainTemplate = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

export default MainTemplate;
