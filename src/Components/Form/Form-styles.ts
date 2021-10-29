import styled from 'styled-components'

export const FormLayout = styled.main`
  min-height: 100%;
  flex-grow: 1;
  width: 616px;
  align-self: center;
  margin-top: 30px;

  h2 {
    color: ${props => props.theme.color};
    font-size: 16px;
    font-weight: bolder;
  }
`
