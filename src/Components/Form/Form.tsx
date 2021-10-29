import { FormLayout } from './Form-styles'
import { IForm } from '../../Types'
import Input from '../UI/Input/Input'

interface Props {
  personalData: IForm
  onChangeChildInput: (e: React.ChangeEvent<any>) => void
  onChangeFormInput: (e: React.ChangeEvent<any>) => void
  onAddChild: (e: React.ChangeEvent<any>) => void
  onDeleteChild: (e: React.ChangeEvent<any>) => void
  routeHandler: (e: React.ChangeEvent<any>) => void
}

const Form: React.FC<Props> = ({
  personalData,
  onChangeChildInput,
  onChangeFormInput,
  onAddChild,
  onDeleteChild,
  routeHandler,
}) => {
  return (
    <FormLayout>
      <h2>Персональные данные</h2>
      <div className='Form_inputs-container'>
        <Input name={'name'} value={personalData.name} onChange={onChangeFormInput} />
        <Input
          name={'age'}
          value={personalData.age}
          onChange={onChangeFormInput}
          inputmode={'numeric'}
          type={'number'}
        />
      </div>
      <div className='Form_children-container'>
        <header>
          <h2>Дети (макс. 5)</h2>
          <button onClick={onAddChild}>Добавить ребенка</button>
        </header>
        {personalData.children.map((child, index) => {
          return (
            <div key={child.id}>
              <Input
                name={`name_${index}`}
                value={child.name}
                onChange={onChangeChildInput}
              />
              <Input
                name={`age_${index}`}
                value={child.age}
                onChange={onChangeChildInput}
                inputmode={'numeric'}
                type={'number'}
              />
              <button value={index} onClick={onDeleteChild}>
                Удалить
              </button>
            </div>
          )
        })}
      </div>
      <button name='preview' onClick={routeHandler}>
        Сохранить
      </button>
    </FormLayout>
  )
}

export default Form
