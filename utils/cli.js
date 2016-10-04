#!/usr/bin/env node

'use strict'
const utils = require('./')
const data = require('../data/all_plans.json')

const a = utils.toObjects(data)
const b = utils.toArrays(a)

console.log('a:', a)
console.log('b:', b)
