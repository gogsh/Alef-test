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
  const hiddenInputClass = 'test' + Math.round(Math.random() * 1e12)
  const onClickContainer = () => {
    const a: HTMLElement | null = document.querySelector('.' + hiddenInputClass)
    a?.focus()
  }

  return (
    <InputContainer onClick={onClickContainer}>
      <HiddenInput
        className={`Input_hidden-input ${hiddenInputClass}`}
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
