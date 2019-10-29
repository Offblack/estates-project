import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap&subset=latin-ext');

   *, *::before, *::after {
      box-sizing: border-box;
   }

  body {
   font-family: 'Roboto', sans-serif;
   margin: 0;
   padding: 0;
  }
`;

export default GlobalStyle;
