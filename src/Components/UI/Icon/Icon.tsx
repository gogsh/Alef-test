import { Path, Svg } from './Icon-styles'

interface Props {
  type: 'plus'
  clickHandler?: any
  size?: number
  color?: string
}

function Icon({ type, clickHandler, size, color}: Props) {
  const defaultSize = 24
  const SIZE = size ? defaultSize * size : defaultSize

  function renderIcon(type: 'plus') {
    switch (type) {
      case 'plus':
        return (
          <Path
            d='M5.13332 10.8556C4.50125 10.8555 3.98887 11.3679 3.98887 12C3.98887 12.6321 4.50126 13.1445 5.13332 13.1445L10.8554 13.1445L10.8554 18.8668C10.8554 19.4989 11.3678 20.0113 11.9999 20.0113C12.632 20.0113 13.1444 19.4989 13.1444 18.8668L13.1443 13.1445L18.8667 13.1445C19.4988 13.1445 20.0112 12.6321 20.0112 12C20.0112 11.3679 19.4988 10.8556 18.8667 10.8556L13.1443 10.8556L13.1443 5.13338C13.1443 4.50132 12.632 3.98893 11.9999 3.98893C11.3678 3.98893 10.8554 4.50131 10.8554 5.13338L10.8554 10.8556L5.13332 10.8556Z'
            fill={color}
          />
        )
      default:
        return <div>Неверный тип</div>
    }
  }

  return (
    <Svg
      width={SIZE}
      height={SIZE}
      viewBox={`0 0 24 24`}
      fill='none'
      onClick={clickHandler}>
      {renderIcon(type)}
    </Svg>
  )
}

export default Icon
