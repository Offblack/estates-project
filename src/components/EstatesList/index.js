import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import EstateItem from 'src/components/EstateItem';
import { connect } from 'react-redux';
import { getItems as getItemsAction } from 'src/actions';

const StyledList = styled.ul`
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  list-style-type: none;
`;

class EstatesList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { data } = this.props;

    return (
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
