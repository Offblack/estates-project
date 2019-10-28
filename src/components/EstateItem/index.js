import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingUsd, faList } from '@fortawesome/free-solid-svg-icons';
import Button from 'src/components/Button';

const StyledItem = styled.li`
  max-width: 500px;
  padding: 25px 40px;
  margin: 0 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 35px -10px rgba(0, 0, 0, 0.3);
`;

const StyledWrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${props =>
    props.secondary &&
    css`
      justify-content: flex-end;
    `}
`;

const StyledTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  padding: 0;
  margin: 10px 0;
`;

const StyledSubtitle = styled.h3`
  font-weight: 400;
  font-size: 18px;
  padding: 0;
  margin: 5px 0;
`;

const StyledIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;

const StyledDescription = styled.div`
  width: 100%;
  margin: 30px 0;
`;

let dummyEstate = {
  id: 1,
  city: 'Kraków',
  street: 'Ludwinowska',
  property: '7',
  apartment: '17',
  price: 19000,
  type: 1,
  description: 'Siedziba firmy',
};

const EstateItem = () => (
  <StyledItem>
    <StyledWrapper>
      <div>
        <StyledTitle>{dummyEstate.city}</StyledTitle>
        <StyledSubtitle>
          {dummyEstate.street}
          {` ${dummyEstate.property}`}/{dummyEstate.apartment}
        </StyledSubtitle>
      </div>
      <div>
        <StyledIcons>
          <StyledFontAwesomeIcon icon={faHandHoldingUsd} />
          {`${dummyEstate.price}`}
        </StyledIcons>
        <StyledIcons>
          <StyledFontAwesomeIcon icon={faList} />
          {`${dummyEstate.type}`}
        </StyledIcons>
      </div>
    </StyledWrapper>
    <StyledDescription>{dummyEstate.description}</StyledDescription>
    <StyledWrapper secondary>
      <Button>Usuń</Button>
      <Button>Edytuj</Button>
    </StyledWrapper>
  </StyledItem>
);

export default EstateItem;
