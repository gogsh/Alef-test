import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Input from './Input'

const value = 'someText'
const name = 'test'
const label = 'Name'
const testString = 'TestingString'
const onChange = jest.fn()

describe('Input', () => {
  it('Input рендер', () => {
    render(<Input name={name} value={value} label={label} />)
    expect(screen.getByText(label)).toBeInTheDocument()
  })

  it('onChange отрабатывает', () => {
    render(<Input name={name} value={value} label={label} onChange={onChange} />)
    userEvent.type(screen.getByRole('textbox'), testString)
    expect(onChange).toHaveBeenCalledTimes(testString.length)
  })
})
