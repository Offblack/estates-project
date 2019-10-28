import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingUsd, faList } from '@fortawesome/free-solid-svg-icons';
import Button from 'src/components/Button';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'src/actions';

const StyledItem = styled.li`
  max-width: 500px;
  box-sizing: border-box;
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

const EstateItem = ({
  id,
  city,
  street,
  property,
  apartment,
  price,
  type,
  description,
  removeItem,
}) => (
  <StyledItem id={id}>
    <StyledWrapper>
      <div>
        <StyledTitle>{city}</StyledTitle>
        <StyledSubtitle>
          {street}
          {` ${property}`}/{apartment}
        </StyledSubtitle>
      </div>
      <div>
        <StyledIcons>
          <StyledFontAwesomeIcon icon={faHandHoldingUsd} />
          {`${price}`}
        </StyledIcons>
        <StyledIcons>
          <StyledFontAwesomeIcon icon={faList} />
          {`${type}`}
        </StyledIcons>
      </div>
    </StyledWrapper>
    <StyledDescription>{description}</StyledDescription>
    <StyledWrapper secondary>
      <Button onClick={() => removeItem(id)}>Usuń</Button>
      <Button>Edytuj</Button>
    </StyledWrapper>
  </StyledItem>
);

const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(removeItemAction(id)),
});

export default connect(
  null,
  mapDispatchToProps,
)(EstateItem);
