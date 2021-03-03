import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

// * {
//   border: 1px solid pink;
// }

*,
*::before,
*::after {
  box-sizing: border-box;
}

html, body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #141414;
  color: #333;
  font-size: 16px;
  margin: 0;
}

img {
  max-width: 100%;
  display: block;
}

`
