import { SecondaryButton, LinkButton, PrimaryButton } from './Button-styles'

interface Props {
  clickHandler: any
  type: 'primary' | 'secondary' | 'link'
  value?: string | number
  name?: string
}

const Button: React.FC<Props> = ({ clickHandler, type, value, children, name }) => {
  return (
    <>
      {type === 'link' ? (
        <LinkButton onClick={clickHandler} value={value} name={name}>
          {children}
        </LinkButton>
      ) : type === 'primary' ? (
        <PrimaryButton onClick={clickHandler} value={value} name={name}>
          {children}
        </PrimaryButton>
      ) : (
        <SecondaryButton onClick={clickHandler} value={value} name={name}>
          {children}
        </SecondaryButton>
      )}
    </>
  )
}

export default Button
