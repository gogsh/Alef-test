import { createGlobalStyle } from 'styled-components'
import 'normalize.css'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat-Regular';
  }

  @font-face {
    font-family: 'Montserrat-Regular';
    src: url('/fonts/Montserrat-Regular.eot');
    src: local('☺'), url('/fonts/Montserrat-Regular.woff') format('woff'),
    url('/fonts/Montserrat-Regular.ttf') format('truetype'),
    url('/fonts/Montserrat-Regular.svg') format('svg');

    font-weight: regular;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat-Medium';
    src: url('fonts/Montserrat-Medium.eot');
    src: local('☺'), url('fonts/Montserrat-Medium.woff') format('woff'),
    url('fonts/Montserrat-Medium.ttf') format('truetype'),
    url('fonts/Montserrat-Medium.svg') format('svg');

    font-weight: bolder;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat-Bold';
    src: url('fonts/Montserrat-Bold.eot');
    src: local('☺'), url('fonts/Montserrat-Bold.woff') format('woff'),
    url('fonts/Montserrat-Bold.ttf') format('truetype'),
    url('fonts/Montserrat-Bold.svg') format('svg');

    font-weight: bold;
    font-style: normal;
  }

`

export default GlobalStyle
