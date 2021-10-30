import { FormLayout, ChildrenInputsContainer } from './Form-styles'
import { IForm } from '../../Types'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import Icon from '../UI/Icon/Icon'
import colors from '../../theme/themeСolors'

interface Props {
  personalData: IForm
  onChangeChildInput: (e: React.ChangeEvent<any>) => void
  onChangeFormInput: (e: React.ChangeEvent<any>) => void
  onAddChild: (e: React.ChangeEvent<any>) => void
  onDeleteChild: (e: React.ChangeEvent<any>) => void
  routeHandler: (e: React.ChangeEvent<any>) => void
  MAX_NUMBER_OF_CHILDREN: number
}

const Form: React.FC<Props> = ({
  personalData,
  onChangeChildInput,
  onChangeFormInput,
  onAddChild,
  onDeleteChild,
  routeHandler,
  MAX_NUMBER_OF_CHILDREN,
}) => {
  return (
    <FormLayout>
      <h2>Персональные данные</h2>
      <div className='Form_inputs-container'>
        <Input
          name={'name'}
          value={personalData.name}
          onChange={onChangeFormInput}
          label={'Имя'}
        />
        <Input
          name={'age'}
          value={personalData.age}
          onChange={onChangeFormInput}
          inputmode={'numeric'}
          type={'number'}
          label={'Возраст'}
        />
      </div>
      <div className='Form_children-container'>
        <header>
          <h2>Дети (макс. {MAX_NUMBER_OF_CHILDREN})</h2>
          {personalData.children.length < MAX_NUMBER_OF_CHILDREN ? (
            <Button clickHandler={onAddChild} type={'secondary'}>
              <Icon type={'plus'} color={colors.primary} />
              Добавить ребенка
            </Button>
          ) : null}
        </header>
        <div className='test'>
          {personalData.children.map((child, index) => {
            return (
              <ChildrenInputsContainer key={child.id}>
                <Input
                  name={`name_${index}`}
                  value={child.name}
                  onChange={onChangeChildInput}
                  label={'Имя'}
                />
                <Input
                  name={`age_${index}`}
                  value={child.age}
                  onChange={onChangeChildInput}
                  inputmode={'numeric'}
                  type={'number'}
                  label={'Возраст'}
                />
                <Button value={index} clickHandler={onDeleteChild} type={'link'}>
                  Удалить
                </Button>
              </ChildrenInputsContainer>
            )
          })}
        </div>
      </div>
      {personalData.children.length ? (
        <Button name={'preview'} clickHandler={routeHandler} type={'primary'}>
          Сохранить
        </Button>
      ) : null}
    </FormLayout>
  )
}

export default Form
