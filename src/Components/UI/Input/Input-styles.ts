import styled from 'styled-components'

export const StyledInput = styled.input`
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
