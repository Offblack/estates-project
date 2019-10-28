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

let dummy = [
  {
    city: 'Kraków',
    street: 'Półkole',
    property: '7',
    apartment: '18',
    price: 16000,
    type: 1,
    description: 'Adres na ulicy',
  },
];

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
        {console.log(data)}
      </StyledList>
    );
  }
}

EstatesList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      property: PropTypes.string.isRequired,
      apartment: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
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
