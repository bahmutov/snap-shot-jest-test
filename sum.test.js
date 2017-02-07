// uses Jest built-in snapshots
const sum = require('./sum')

test('adds 1 + 2 to equal 3', () => {
  const result = sum(1, 2)
  expect(result).toMatchSnapshot()
})

test('concat strings', () => {
  const result = sum('f', 'oo')
  expect(result).toMatchSnapshot()
})
