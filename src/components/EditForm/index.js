import React from 'react';
import styled from 'styled-components';
import Input from 'src/components/Input';
import Button from 'src/components/Button';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { editItem as editItemAction } from 'src/actions';
import EstateContext from 'src/context';

const StyledWrapper = styled.div`
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

  animation: appear 0.6s ease-in-out;
`;

const StyledForm = styled.form`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 500px;
`;

const StyledHeader = styled.h1`
  margin-left: 20px;
`;

const StyledTextArea = styled.textarea`
  resize: none;
  height: 100px;
`;

const EditForm = ({ editItem }) => (
  <EstateContext.Consumer>
    {contextElements => (
      <StyledWrapper>
        <StyledHeader>Edytuj ofertę</StyledHeader>
        <Formik
          initialValues={{
            id: contextElements.id,
            city: contextElements.city,
            street: contextElements.street,
            property: contextElements.property,
            apartment: contextElements.apartment,
            price: contextElements.price,
            type: contextElements.type,
            description: contextElements.description,
          }}
          onSubmit={(values, actions) => {
            editItem(values);
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
                as={StyledTextArea}
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                label="Opis"
                required
              />
              <Button secondary type="submit" disabled={isSubmitting}>
                Edytuj
              </Button>
            </StyledForm>
          )}
        </Formik>
      </StyledWrapper>
    )}
  </EstateContext.Consumer>
);

const mapDispatchToProps = dispatch => ({
  editItem: values => dispatch(editItemAction(values)),
});

export default connect(
  null,
  mapDispatchToProps,
)(EditForm);
