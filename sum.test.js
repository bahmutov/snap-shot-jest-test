const sum = require('./sum')
const snapshot = require('snap-shot')

test('adds 1 + 2 to equal 3', () => {
  const result = sum(1, 2)
  expect(result).toMatchSnapshot()
})

test('concat strings', () => {
  const result = sum('f', 'oo')
  expect(result).toMatchSnapshot()
})

test('2 + 5 should match snap-shot', () => {
  const result = sum(2, 5)
  snapshot(result)
})

test('concat strings using snap-shot', () => {
  const result = sum('f', 'oo')
  snapshot(result)
})
