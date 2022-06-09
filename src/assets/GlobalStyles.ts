import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    background-color: #f6fff8;
    overflow: hidden;
  }
`
