import React from 'react';
import { Helmet } from 'react-helmet';
import GlobalStyles from 'src/theme/GlobalStyles';
import Button from 'src/components/Button';
import Input from 'src/components/Input';

/* To do! 

1. Dont forget about PropTypes
2. Add MainTheme with fontSize and Colors

*/

const IndexPage = () => (
  <>
    <GlobalStyles />
    <Helmet title="Estates" defer={false} />
    <h1>Oferty Nieruchomości</h1>
    <Button>Sprawdź</Button>
    <Input name="city" label="City"></Input>
    <p>Now go build something great.</p>
  </>
);

export default IndexPage;
