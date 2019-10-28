import React from 'react';
import styled from 'styled-components';
import Input from 'src/components/Input';
import Button from 'src/components/Button';
import { Formik } from 'formik';

const StyledWrapper = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 180px;
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

const Form = () => (
  <StyledWrapper>
    <StyledHeader>Oferty nieruchomości</StyledHeader>
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
        console.log(values);
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
            Dodaj
          </Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

export default Form;
