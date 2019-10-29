import React from 'react';
import styled from 'styled-components';
import Input from 'src/components/Input';
import Button from 'src/components/Button';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'src/actions';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div``;

const StyledForm = styled.form`
  padding: 0;
  margin: 0 0 60px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 500px;
`;

const StyledHeader = styled.h2`
  margin-left: 20px;
`;

const StyledTextArea = styled.textarea`
  resize: none;
  height: 100px;
`;

const AddForm = ({ addItem }) => (
  <StyledWrapper>
    <StyledHeader>Dodaj ofertę</StyledHeader>
    <Formik
      initialValues={{
        city: '',
        street: '',
        property: '',
        apartment: '',
        price: 0,
        type: 0,
        description: '',
      }}
      onSubmit={(values, actions) => {
        addItem(values);
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <StyledForm onSubmit={handleSubmit}>
          <Input
            type="text"
            name="city"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.city}
            label="Miasto"
            required
          />
          <Input
            type="text"
            name="street"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.street}
            label="Ulica"
            required
          />
          <Input
            type="text"
            name="property"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.property}
            label="Numer budynku"
            short
            required
          />
          <Input
            type="text"
            name="apartment"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.apartment}
            label="Numer lokalu"
            short
            required
          />
          <Input
            type="number"
            name="price"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.price}
            label="Cena"
            required
            short
          />
          <Input
            type="number"
            name="type"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.type}
            label="Typ"
            required
            short
          />
          <Input
            type="text"
            as={StyledTextArea}
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
            label="Opis"
            required
          />
          <Button secondary type="submit" disabled={isSubmitting}>
            Dodaj
          </Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

AddForm.propTypes = {
  addItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addItem: values => dispatch(addItemAction(values)),
});

export default connect(
  null,
  mapDispatchToProps,
)(AddForm);
