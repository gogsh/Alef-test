import declinationOfYears from './declinationOfNum'

test('declinationOfYears', () => {
  expect(declinationOfYears(10)).toBe('лет')
  expect(declinationOfYears(1)).toBe('год')
  expect(declinationOfYears(42)).toBe('года')
})
