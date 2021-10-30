import { render, screen } from '@testing-library/react'
import Form from './Form'

const foo = jest.fn()
const emptyData = {
  name: '',
  age: '',
  children: [],
}

const filledData = {
  name: '',
  age: '',
  children: [
    {
      name: '',
      age: '',
      id: Math.random(),
    },
  ],
}

describe('Form Component', () => {
  it('Form рендерится с пустым массивом детей', () => {
    render(
      <Form
        personalData={emptyData}
        onAddChild={foo}
        onChangeChildInput={foo}
        onChangeFormInput={foo}
        onDeleteChild={foo}
        routeHandler={foo}
        MAX_NUMBER_OF_CHILDREN={10}
      />,
    )
    expect(screen.getByText(/Персональные данные/)).toBeInTheDocument()
    expect(screen.getByText(/Добавить ребенка/)).toBeInTheDocument()
    expect(screen.queryByText(/Сохранить/)).not.toBeInTheDocument()
  })

  it('Form рендерится с наполненным не до максимума массивом детей', () => {
    render(
      <Form
        personalData={filledData}
        onAddChild={foo}
        onChangeChildInput={foo}
        onChangeFormInput={foo}
        onDeleteChild={foo}
        routeHandler={foo}
        MAX_NUMBER_OF_CHILDREN={10}
      />,
    )

    expect(screen.getByText(/Персональные данные/)).toBeInTheDocument()
    expect(screen.getByText(/Добавить ребенка/)).toBeInTheDocument()
    expect(screen.getByText(/Удалить/)).toBeInTheDocument()
    expect(screen.getByText(/Сохранить/)).toBeInTheDocument()

  })

  it('Form рендерится с наполненным до максимума массивом детей', () => {
    render(
      <Form
        personalData={filledData}
        onAddChild={foo}
        onChangeChildInput={foo}
        onChangeFormInput={foo}
        onDeleteChild={foo}
        routeHandler={foo}
        MAX_NUMBER_OF_CHILDREN={1}
      />,
    )
    expect(screen.getByText(/Персональные данные/)).toBeInTheDocument()
    expect(screen.queryByText(/Добавить ребенка/)).not.toBeInTheDocument()
    expect(screen.queryByText(/Добавить ребенка/)).not.toBeInTheDocument()
  })
})
