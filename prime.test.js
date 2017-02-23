import { test, given, forCases } from 'sazerac'

function isPrime(num) {
  for(var i = 2; i < num; i++) {
    if(num % i === 0) return false;
  }
  return num > 1;
}

test(isPrime, () => {
  given(1).expect(false)
  given(2).expect(true)
  given(3).expect(true)
  given(4).expect(false)
})

test(isPrime, () => {
  const primes = [ given(2), given(3), given(5), given(7) ]
  forCases(primes).expect(true)
})
