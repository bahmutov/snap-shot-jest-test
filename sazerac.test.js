import snapshot from 'snap-shot'
import { test, given } from 'sazerac'

Error.stackTraceLimit = Infinity

const add = (a, b) => a + b

test(add, () => {
  given(10, 2).assert('adds 10 to 2', t => {
    expect(t).toEqual(12)
  })
})

// hmm really having trouble discovering the right stack trace
// test(add, () => {
//   given(10, 2).assert('should return 12', snapshot)
// })
