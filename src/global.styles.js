import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 20px 40px;
    font-family: 'Open Sans Condenced', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }
  a {
    text-decoration: none;
    color: black;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  * {
    box-sizing: border-box;
  }
`;
