import { StyledInput } from './Input-styles'

interface Props {
  name: string
  value: string | number
  onChange?: (e: React.ChangeEvent<any>) => void
  label?: string
  type?: string
  inputmode?:
    | 'search'
    | 'text'
    | 'none'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | undefined
}

const Input: React.FC<Props> = ({ onChange, label, name, value, inputmode, type }) => {
  return (
    <StyledInput
      name={name}
      onChange={onChange}
      value={value}
      inputMode={inputmode}
      type={type}
    />
  )
}

export default Input
