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
    margin-bottom: 20px;
  }
  .Form_inputs-container {
    display: flex;
    flex-flow: column;
    gap: 10px;
  }
  .Form_children-container {
    display: flex;
    flex-flow: column;
    margin: 30px 0px;
    gap: 10px;
    width: 100%;
    header {
      display: flex;
      justify-content: space-between;
    }
    .test {
      display: flex;
      flex-flow: column;
      gap: 10px;
    }
  }
`

export const ChildrenInputsContainer = styled.div`
  display: flex;
  gap: 18px;
  border-radius: 5px;
  width: fit-content;
`
