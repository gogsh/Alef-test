import { PreviewLayout } from './Preview-styles'
import { IForm } from '../../Types'
import declinationOfYears from '../../helpers/declinationOfNum'

interface Props {
  personalData: IForm
}

const Preview: React.FC<Props> = ({ personalData }) => {
  return (
    <PreviewLayout>
      <h2>Персональные данные</h2>
      <strong>
        {`${personalData.name},
        ${personalData.age}
        ${declinationOfYears(+personalData.age)}`}
      </strong>

      <div>
        <span>Дети</span>
        {personalData.children.map(child => {
          if (child.name.trim() && child.age) {
            return (
              <div>
                <strong>
                  {`${child.name} ${child.age}
                ${declinationOfYears(+child.age)}`}
                </strong>
              </div>
            )
          }
        })}
      </div>
    </PreviewLayout>
  )
}

export default Preview
