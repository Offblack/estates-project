import React from 'react';
import { Helmet } from 'react-helmet';
import GlobalStyles from 'src/styles';
import AddForm from 'src/components/AddForm';
import EstatesList from 'src/components/EstatesList';
import MainTemplate from 'src/templates/MainTemplate';
import StyledHeader from 'src/components/Header';
import store from 'src/store';
import { Provider } from 'react-redux';

/* To do! 

1. Add sematnic tags
2. Add RWD

*/

const IndexPage = () => (
  <Provider store={store}>
    <MainTemplate>
      <GlobalStyles />
      <StyledHeader>Oferty Nieruchomości</StyledHeader>
      <Helmet title="Estates" defer={false} />
      <AddForm />
      <EstatesList />
    </MainTemplate>
  </Provider>
);

export default IndexPage;
