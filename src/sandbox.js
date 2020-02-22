const fetch = require('node-fetch')
const orderTotal = require('./order-total')

console.log('Running sandbox.js...')

const result = orderTotal(fetch, process, {
  country: 'DE',
  items: [
    { 'name': 'Dragon waffles', price: 20, quantity: 2 }
  ]
})

result