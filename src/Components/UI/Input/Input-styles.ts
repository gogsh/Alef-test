import styled from 'styled-components'

export const InputContainer = styled.div`
  border: 1px solid ${props => props.theme.border};
  border-radius: 4px;
  height: 40px;
  display: flex;
  flex-direction: column;
  padding: 8px 16px 8px 16px;
  font-size: 13px;
  cursor: text;
  min-width: 230px;

  .Input_input-label {
    order: -1;
    transition: all 0.2s;
    color: ${props => props.theme.gray};
    margin-bottom: 6px
  }
`

export const HiddenInput = styled.input`
  border: none;
  outline: none;
  transition: all 0.2s;
  line-height: 140%;
  padding: 0;

  &:focus + .Input_input-label {
    font-size: 0px;
    opacity: 0;
    margin-bottom: 10px
  }
  &:focus {
    font-size: 22px;
    line-height: 110%;
  }
`
