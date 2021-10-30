import { useState } from 'react'
import { IForm, Pages } from '../Types'

const useForm = () => {
  const MAX_NUMBER_OF_CHILDREN = 5
  const [personalData, setpersonalData] = useState<IForm>({
    name: '',
    age: '',
    children: [],
  })

  const onAddChild = () => {
    if (personalData.children.length < MAX_NUMBER_OF_CHILDREN) {
      const arrayDuplicate = [...personalData.children]
      arrayDuplicate.push({
        name: '',
        age: '',
        id: Math.random(),
      })
      setpersonalData({
        ...personalData,
        children: [...arrayDuplicate],
      })
    }
  }

  const onDeleteChild = (e: React.ChangeEvent<any>) => {
    const value = e.target.value
    const arrayDuplicate = [...personalData.children]
    arrayDuplicate.splice(value, 1)
    setpersonalData({
      ...personalData,
      children: [...arrayDuplicate],
    })
  }

  const onChangeFormInput = (e: React.ChangeEvent<any>) => {
    console.log(e.target.name)
    setpersonalData({
      ...personalData,
      [e.target.name]: e.target.value,
    })
  }

  const onChangeChildInput = (e: React.ChangeEvent<any>) => {
    const [field, index] = e.target.name.split('_')
    const arrayDuplicate = [...personalData.children]
    arrayDuplicate[index] = {
      ...arrayDuplicate[index],
      [field]: e.target.value,
    }
    setpersonalData({
      ...personalData,
      children: [...arrayDuplicate],
    })
  }

  return {
    personalData,
    onChangeChildInput,
    onChangeFormInput,
    onAddChild,
    onDeleteChild,
    MAX_NUMBER_OF_CHILDREN
  }
}

export default useForm
