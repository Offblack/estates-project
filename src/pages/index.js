import React from 'react';
import { Helmet } from 'react-helmet';
import GlobalStyles from 'src/theme/GlobalStyles';
import Form from 'src/components/Form';
import EstatesList from 'src/components/EstatesList';
import MainTemplate from 'src/templates/MainTemplate';

/* To do! 

1. Dont forget about PropTypes
2. Add MainTheme with fontSize and Colors
3. Add sematnic tags

*/

const IndexPage = () => (
  <MainTemplate>
    <GlobalStyles />
    <Helmet title="Estates" defer={false} />
    <Form />
    <EstatesList />
  </MainTemplate>
);

export default IndexPage;
