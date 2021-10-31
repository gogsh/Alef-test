import styled from 'styled-components'

export const InputContainer = styled.label`
  border: 1px solid ${props => props.theme.border};
  border-radius: 4px;
  height: 40px;
  display: flex;
  flex-direction: column;
  padding: 8px 16px 8px 16px;
  font-size: 13px;
  cursor: text;

  .Input_input-label {
    order: -1;
    transition: all 0.2s;
    color: ${props => props.theme.gray};
    margin-bottom: 6px;
  }
`

export const HiddenInput = styled.input`
  border: none;
  outline: none;
  line-height: 140%;
  padding: 0;
  min-width: 228px;
  font-size: 14px;
  background: none;
  transition: all 0.2s;

  &:focus + .Input_input-label {
    font-size: 3px;
    opacity: 0;
    margin-bottom: 10px;
  }
  &:focus {
    opacity: 100;
    font-size: 16px;
    line-height: 110%;
  }
`
