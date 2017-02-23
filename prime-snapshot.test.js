import snapshot from 'snap-shot'

function isPrime(num) {
  for(var i = 2; i < num; i++) {
    if(num % i === 0) return false;
  }
  return num > 1;
}

// sazerac data-driven development
// test(isPrime, () => {
//   const primes = [ given(2), given(3), given(5), given(7) ]
//   forCases(primes).expect(true)
// })

function snap(fn, inputs) {
  const output = inputs.map(fn)
  snapshot(output)
}

// better snapshot
function snaps(fn, inputs) {
  const output = inputs.map(given => {
    return {given, expect: fn(given)}
  })
  snapshot(output)
}

// multiple arguments
function snapsMultiple(fn, ...inputs) {
  const name = fn.name
  const behavior = inputs.map(given => {
    const args = Array.isArray(given) ? given : [given]
    return {
      given,
      expect: fn.apply(null, args)
    }
  })
  snapshot({name, behavior})
}

it('works for primes', () => {
  snap(isPrime, [2, 3, 5, 7])
})

it('works for non-primes', () => {
  snap(isPrime, [4, 6, 8, 10])
})

it('works for primes (all)', () => {
  snaps(isPrime, [2, 3, 5, 7])
})

it('can be applied', () => {
  const result = {is4prime: isPrime.apply(null, [4])}
  snapshot(result)
})

it('applies args', () => {
  snapsMultiple(isPrime, 1, 2, 3, 4, 5, 6, 7, 8)
})

const add = (a, b) => a + b

it('binary function add', () => {
  snapsMultiple(add, [1, 2], [2, -2], [5, 10])
})
