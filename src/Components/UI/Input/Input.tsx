import { InputContainer, HiddenInput } from './Input-styles'

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
    <InputContainer>
      <HiddenInput
        className={`Input_hidden-input`}
        name={name}
        onChange={onChange}
        value={value}
        inputMode={inputmode}
        type={type}
      />
      <span className={'Input_input-label'}>{label}</span>
    </InputContainer>
  )
}

export default Input
