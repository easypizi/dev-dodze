import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100vh;
    max-height: 100vh;

    @supports(height: 100svh) {
      height: 100svh;
      max-height: 100svh;
    }
  }

`;
