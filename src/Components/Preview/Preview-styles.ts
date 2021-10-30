import styled from 'styled-components'

export const PreviewLayout = styled.main`
  min-height: 100%;
  flex-grow: 1;
  width: 616px;
  align-self: center;
  margin-top: 30px;
  h2 {
    color: ${props => props.theme.color};
    font-size: 16px;
    font-weight: bolder;
    margin-bottom: 20px;
  }
  strong {
    font-size: 16px;
    font-weight: bold;
  }
`

export const ChildrenСontainer = styled.div`
  h2 {
    margin: 0;
  }
  margin-top: 60px;
  display: flex;
  flex-flow: column;
  gap: 20px;
`

export const ChildLabel = styled.div`
  width: fit-content;
  line-height: 24px;
  display: flex;
  justify-content: center;
  aligh-items: center;
  padding: 10px 20px;
  background: ${props => props.theme.softFrey};
`
