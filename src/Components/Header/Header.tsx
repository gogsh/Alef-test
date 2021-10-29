import { HeaderLayout } from './Header-styles'

interface Props {
  routeHandler: (e: React.ChangeEvent<any>) => void
}

const Header: React.FC<Props> = ({routeHandler}) => {
  return (
    <HeaderLayout>
      <img src={'./logo.png'} alt={'Logo Alef Development'} className={'Header_logo'}  />
      <nav>
        <ul>
          <li><button name={'form'} onClick={routeHandler}>Форма</button></li>
          <li><button name={'preview'} onClick={routeHandler}>Превью</button></li>
        </ul>
      </nav>
    </HeaderLayout>
  )
}

export default Header
