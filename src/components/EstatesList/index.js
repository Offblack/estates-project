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

let dummyEstates = [
  {
    id: 1,
    city: 'Kraków',
    street: 'Ludwinowska',
    property: '7',
    apartment: '17',
    price: 19000,
    type: 1,
    description: 'Siedziba firmy',
  },
  {
    id: 2,
    city: 'Kraków',
    street: 'Ludwinowska',
    property: '7',
    apartment: '17',
    price: 19000,
    type: 1,
    description: 'Siedziba firmy',
  },
  {
    id: 3,
    city: 'Kraków',
    street: 'Ludwinowska',
    property: '7',
    apartment: '17',
    price: 19000,
    type: 1,
    description: 'Siedziba firmy',
  },
  {
    id: 4,
    city: 'Kraków',
    street: 'Ludwinowska',
    property: '7',
    apartment: '17',
    price: 19000,
    type: 1,
    description: 'Siedziba firmy',
  },
  {
    id: 5,
    city: 'Kraków',
    street: 'Ludwinowska',
    property: '7',
    apartment: '17',
    price: 19000,
    type: 1,
    description: 'Siedziba firmy',
  },
];

const EstatesList = () => (
  <StyledList>
    {dummyEstates.map(estate => (
      <EstateItem
        id={estate.id}
        city={estate.city}
        street={estate.street}
        property={estate.property}
        apartment={estate.apartment}
        price={estate.price}
        type={estate.type}
        description={estate.description}
      />
    ))}
  </StyledList>
);

export default EstatesList;
