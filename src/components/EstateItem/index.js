import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingUsd, faList } from '@fortawesome/free-solid-svg-icons';
import Button from 'src/components/Button';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'src/actions';
import EstateContext from 'src/context';
import EditForm from 'src/components/EditForm';

const StyledItem = styled.li`
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
  width: 420px;
  box-sizing: border-box;
  padding: 25px 40px;
  margin: 10px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 35px -10px rgba(0, 0, 0, 0.3);
  animation: appear 0.5s ease;
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

const StyledEstate = styled.div`
  max-width: 440px;
  display: flex;
  flex-direction: column;
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
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;

const StyledDescription = styled.div`
  width: 100%;
  margin: 30px 0;
`;

class EstateItem extends Component {
  state = {
    id: '',
    city: '',
    street: '',
    property: '',
    apartment: '',
    price: 0,
    type: 0,
    description: '',
    editActive: false,
  };

  handleEdit = (id, city, street, property, apartment, price, type, description) => {
    this.setState({
      id,
      city,
      street,
      property,
      apartment,
      price,
      type,
      description,
      editActive: !this.state.editActive,
    });
  };

  handleForm = () => {
    this.setState({
      editActive: !this.state.editActive,
    });
  };

  render() {
    const {
      id,
      city,
      street,
      property,
      apartment,
      price,
      type,
      description,
      removeItem,
    } = this.props;

    const contextElements = {
      ...this.state,
    };

    return (
      <EstateContext.Provider value={contextElements}>
        <StyledEstate>
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
              <Button
                onClick={() =>
                  this.handleEdit(id, city, street, property, apartment, price, type, description)
                }
              >
                {this.state.editActive ? `Zamknij` : `Edytuj`}
              </Button>
            </StyledWrapper>
          </StyledItem>
          {this.state.editActive && <EditForm handleFormFn={this.handleForm} />}
        </StyledEstate>
      </EstateContext.Provider>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(removeItemAction(id)),
});

export default connect(
  null,
  mapDispatchToProps,
)(EstateItem);
