import { createGlobalStyle } from 'styled-components';

const global = createGlobalStyle`
  * {
    font-family: 'Nanum Gothic', sans-serif;
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    outline: none;
  }
  a {
    text-decoration: none;
  }
  body {
    margin: 0;
    background-color: #f7f9fd;
  }
`;

export default global;
