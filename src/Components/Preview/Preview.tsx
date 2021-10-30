import { PreviewLayout, ChildrenСontainer, ChildLabel } from './Preview-styles'
import { IForm } from '../../Types'
import declinationOfYears from '../../helpers/declinationOfNum'

interface Props {
  personalData: IForm
}

const Preview: React.FC<Props> = ({ personalData }) => {
  return (
    <PreviewLayout>
      <h2>Персональные данные</h2>
      {personalData.name && personalData.age ? (
        <strong>
          {`${personalData.name},
        ${personalData.age}
        ${declinationOfYears(+personalData.age)}`}
        </strong>
      ) : (
        <strong>Нет данных. Заполните форму</strong>
      )}

      <ChildrenСontainer>
        <h2>Дети</h2>
        {personalData.children.length ? (
          personalData.children.map(child => {
            if (child.name.trim() && child.age) {
              return (
                <ChildLabel>
                  <strong>
                    {`${child.name}, ${child.age}
                ${declinationOfYears(+child.age)}`}
                  </strong>
                </ChildLabel>
              )
            } else {
              return (
                <ChildLabel>
                  <strong>Заполните информацию о ребёнке</strong>
                </ChildLabel>
              )
            }
          })
        ) : (
          <strong>Детей нет</strong>
        )}
      </ChildrenСontainer>
    </PreviewLayout>
  )
}

export default Preview
