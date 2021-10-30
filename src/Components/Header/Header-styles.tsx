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
    cursor: pointer;
  }

  nav {
    ul {
      li {
        display: inline;
        margin: 12px;
        button {
          font-size: 14px;
          background: none;
          padding: 0;
          cursor: pointer;
          border: none;
          color: ${props => props.theme.gray};
        }
      }
    }
  }
`
