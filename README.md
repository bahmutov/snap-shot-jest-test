# snap-shot-jest-test

> Jest compatibility with [snap-shot][snap-shot] test project

[![Build status][ci-image] ][ci-url]

JSX / React test example in [Link.test.js](Link.test.js) and to debug it
use `npm run debug`

```js
import React from 'react';
import Link from './Link';
import renderer from 'react-test-renderer';
import snapshot from 'snap-shot'

// removes Function values (and other non-serializable stuff)
const strip = o => JSON.parse(JSON.stringify(o))

test('Link changes the class when hovered', () => {
  // snapshot does not know how to handle JSX
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  );
  let tree = component.toJSON();
  snapshot(strip(tree))

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  snapshot(strip(tree))

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  snapshot(strip(tree))
});
```

## Data-driven testing

Inspired by [Sazerac: Data-driven Testing for JavaScript][data-driven] there is
simple solution for testing multiple inputs against multiple outputs.

```js
// sazerac
import { test, given, forCases } from 'sazerac'
test(isPrime, () => {
  const primes = [ given(2), given(3), given(5), given(7) ]
  forCases(primes).expect(true)
})
```

Same approach using snapshot requires small utility function

```js
import snapshot from 'snap-shot'
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
```
The output snapshot file will have

```js
exports['works for primes 1'] = [
  true,
  true,
  true,
  true
]
exports['works for non-primes 1'] = [
  false,
  false,
  false,
  false
]
```

[data-driven]: https://hackernoon.com/sazerac-data-driven-testing-for-javascript-e3408ac29d8c#.3qht1jpdi

[snap-shot]: https://github.com/bahmutov/snap-shot
[ci-image]: https://travis-ci.org/bahmutov/snap-shot-jest-test.svg?branch=master
[ci-url]: https://travis-ci.org/bahmutov/snap-shot-jest-test
