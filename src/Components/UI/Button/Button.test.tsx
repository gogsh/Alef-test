import { render, screen } from '@testing-library/react'
import Button from './Button'

const clickHandler = jest.fn()
const text = 'text'

describe('Button', () => {
  it('Button Link', () => {
    render(
      <Button type='link' clickHandler={clickHandler}>
        {text}
      </Button>,
    )
    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it('Button Primary', () => {
    render(
      <Button type='primary' clickHandler={clickHandler}>
        {text}
      </Button>,
    )
    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it('Button Secondary', () => {
    render(
      <Button type='secondary' clickHandler={clickHandler}>
        {text}
      </Button>,
    )
    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
