import React from 'react';
import styled from 'styled-components';
import EstateItem from 'src/components/EstateItem';

const StyledList = styled.ul`
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  list-style-type: none;
`;

const EstatesList = () => (
  <StyledList>
    <EstateItem />
    <EstateItem />
    <EstateItem />
    <EstateItem />
    <EstateItem />
    <EstateItem />
    <EstateItem />
    <EstateItem />
    <EstateItem />
    <EstateItem />
    <EstateItem />
    <EstateItem />
    <EstateItem />
  </StyledList>
);

export default EstatesList;
