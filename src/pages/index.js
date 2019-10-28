import React from 'react';
import { Helmet } from 'react-helmet';
import GlobalStyles from 'src/theme/GlobalStyles';
import Form from 'src/components/Form';

/* To do! 

1. Dont forget about PropTypes
2. Add MainTheme with fontSize and Colors

*/

const IndexPage = () => (
  <>
    <GlobalStyles />
    <Helmet title="Estates" defer={false} />
    <h1>Oferty Nieruchomości</h1>
    <Form />
    <p>Now go build something great.</p>
  </>
);

export default IndexPage;
