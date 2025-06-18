// src/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "caslon";
    src: url(${(props) => props.theme.fontFiles.caslon});
  }

  @font-face {
    font-family: "graphik";
    src: url(${(props) => props.theme.fontFiles.graphik});
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.fonts.graphik};
    overflow-x: hidden;
  }

  a {
      text-decoration:none !important;
  }

  a:hover {
    text-decoration:none !important;
  }

  ul {
    margin:0;
    padding:0;
    list-style:none;
  }

  img {
    max-width:100%;
      height:auto;
  }

  h1,h2,h3,h4,h5,h6,p{
    margin:0;
    padding:0;
  }

`;

export default GlobalStyle;
