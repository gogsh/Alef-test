import { render, screen } from '@testing-library/react'
import Preview from './Preview'

const emptyData = {
  name: '',
  age: '',
  children: [],
}

const filledData = {
  name: 'Иван',
  age: '22',
  children: [
    {
      name: 'Петя',
      age: '3',
      id: Math.random(),
    },
  ],
}

describe('Preview', () => {
  it('Preview с пустым объектом', () => {
    render(<Preview personalData={emptyData} />)
    expect(screen.getByText(/Персональные данные/)).toBeInTheDocument()
    expect(screen.getByText(/Дети/)).toBeInTheDocument()
    expect(screen.getByText(/Нет данных. Заполните форму/)).toBeInTheDocument()
  })

  it('Preview с наполненным объектом', () => {
    render(<Preview personalData={filledData} />)
    expect(screen.queryByText(/Нет данных. Заполните форму/)).not.toBeInTheDocument()
    expect(screen.queryByText(/Заполните информацию о ребёнке/)).not.toBeInTheDocument()
    expect(screen.getByText(/Иван, 22 года/)).toBeInTheDocument()
    expect(screen.getByText(/Петя, 3 года/)).toBeInTheDocument()
  })
})
