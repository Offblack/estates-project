import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import EstateItem from 'src/components/EstateItem';
import { connect } from 'react-redux';
import { getItems as getItemsAction } from 'src/actions';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const StyledList = styled.ul`
  max-width: 1100px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

class EstatesList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { data } = this.props;

    return (
      <StyledWrapper>
        <h2>Aktualne oferty</h2>
        <StyledList>
          {data.map(estate => (
            <EstateItem
              id={estate.id}
              city={estate.city}
              street={estate.street}
              property={estate.property}
              apartment={estate.apartment}
              price={estate.price}
              type={estate.type}
              description={estate.description}
              key={estate.id}
            />
          ))}
        </StyledList>
      </StyledWrapper>
    );
  }
}

EstatesList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.isRequired,
      city: PropTypes.isRequired,
      street: PropTypes.isRequired,
      property: PropTypes.isRequired,
      apartment: PropTypes.isRequired,
      price: PropTypes.isRequired,
      type: PropTypes.isRequired,
      description: PropTypes.isRequired,
    }),
  ),
};

EstatesList.defaultProps = {
  data: [],
};

const mapStateToProps = state => {
  const { data } = state;
  return { data };
};

const mapDispatchToProps = dispatch => ({
  getItems: () => dispatch(getItemsAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EstatesList);
