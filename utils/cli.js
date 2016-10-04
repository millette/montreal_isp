'use strict'

const utils = require('./')
const data = require('../data/all_plans.json')

const a = utils.plans(data)
const b = utils.plans2(a)

console.log('a:', a)
console.log('b:', b)
