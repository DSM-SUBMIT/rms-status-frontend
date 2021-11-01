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
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track-piece {
    background-color: white;
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #c4c4c4;
  }
`;

export default global;
