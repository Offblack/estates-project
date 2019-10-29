import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  margin: 50px;
`;

const MainTemplate = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

export default MainTemplate;
