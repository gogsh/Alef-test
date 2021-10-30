import styled from 'styled-components'

export const PrimaryButton = styled.button`
  line-height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${props => props.theme.primary};
  color: #ffff;
  border-radius: 100px;
  border: none;
  padding: 10px 20px;
`

export const SecondaryButton = styled.button`
  line-height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  gap: 8px;
  background: none;
  border-radius: 100px;
  color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
`

export const LinkButton = styled.button`
  line-height: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  color: ${props => props.theme.primary};
`
