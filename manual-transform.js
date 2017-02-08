// manual babel transform
// https://babeljs.io/docs/usage/api/
const babel = require('babel-core')
const {transformFileSync} = babel
const opts = {
  sourceMaps: 'inline'
}
const {code} = transformFileSync('./Link.test.js', opts)
console.log(code)
