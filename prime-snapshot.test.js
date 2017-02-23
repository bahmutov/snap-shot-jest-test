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

it('works for primes', () => {
  snap(isPrime, [2, 3, 5, 7])
})

it('works for non-primes', () => {
  snap(isPrime, [4, 6, 8, 10])
})
