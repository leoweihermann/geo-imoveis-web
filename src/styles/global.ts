import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
      margin:0;
      padding:0;
      box-sizing: border-box;
      outline: 0;
  }

  body {
    background: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--title-color);
    font-family: Ubuntu;
  }

  button{
    cursor: pointer;
  }

  .leaflet-container {
    width: 100%;
    height: 100vh;
  }

  ::-webkit-scrollbar-track {
    background-color: #F4F4F4;
  }
  ::-webkit-scrollbar {
      width: 6px;
      background: #F4F4F4;
  }
  ::-webkit-scrollbar-thumb {
      background: #dad7d7;
  }

`;
