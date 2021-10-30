import { createGlobalStyle } from 'styled-components'
import 'normalize.css'

const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Montserrat-Regular';
    font-size: 13px;
  }
  strong {
    font-family: 'Montserrat-Bold';
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

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
  &[type='number']:hover,
  &[type='number']:focus {
    -moz-appearance: number-input;
  }

`

export default GlobalStyle
