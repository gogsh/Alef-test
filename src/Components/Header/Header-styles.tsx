import styled from 'styled-components'

export const HeaderLayout = styled.header`
  height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.border};

  .Header_logo {
    position: absolute;
    left: 10%;
  }

  nav {
    ul {
      li {
        display: inline;
      }
    }
  }
`
