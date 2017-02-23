import { shallow } from 'enzyme'
import Product from './Product'
import { test, given } from 'sazerac'
import React from 'react'
import snapshot from 'snap-shot'

const ProductComponent = product => {

  const component = shallow(
    <Product product={product} />
  )

  return {
    product: component.find('.product'),
    errorMessage: component.find('.error-msg'),
    successMessage: component.find('.success-msg')
  }

}

// data-driven testing
test(ProductComponent, () => {
  given({})
    .assert('should render `error` class', p => {
      expect(p.product.hasClass('error')).toBe(true)
    })
})

// data-drive snapshot testing
// test(ProductComponent, () => {
//   given({})
//     .assert('should render `error` class', p => {
//       // currently cannot find the caller due to JSX
//       // but it does find the right line below
//       snapshot(p.product.hasClass('error'))
//     })
// })
