import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Lexend Deca', sans-serif;
    box-sizing: border-box;
  }

  html {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: 'Lexend Deca', sans-serif;
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
  }

  .root{
    width: 100%;
    height: 100%;
  }
`
export default GlobalStyle
