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

2. Add RWD

*/

const IndexPage = () => (
  <Provider store={store}>
    <Helmet title="Estates" defer={false} />
    <main>
      <MainTemplate>
        <GlobalStyles />
        <header>
          <StyledHeader>Oferty Nieruchomości</StyledHeader>
        </header>
        <section>
          <AddForm />
        </section>
        <section>
          <EstatesList />
        </section>
      </MainTemplate>
    </main>
  </Provider>
);

export default IndexPage;
