// uses snap-shot with Jest
const sum = require('./sum')
const snapshot = require('snap-shot')

test('2 + 5 should match snap-shot', () => {
  const result = sum(2, 5)
  snapshot(result)
})

test('concat strings using snap-shot', () => {
  const result = sum('f', 'oo')
  snapshot(result)
})
