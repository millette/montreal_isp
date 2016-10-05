#!/usr/bin/env node

'use strict'
const utils = require('./')
const data = require('../data/all_plans.json')

const a = utils.toObjects(data)
/*
const b = utils.toArrays(a)
const c = utils.sortObjects(a, 'up_speed')
const d = utils.unlimitedObjects(a)
const e = utils.byIspObjects(a, 'vif')
const f = utils.types.map((t) => utils.byTypeObjects(a, t))
console.log('b:', b)
console.log('c:', c)
console.log('d:', d)
console.log('f:', f)
const g = utils.IspObjects(a)
console.log('g:', g)

const h = utils.byTypeObjects(a)
console.log('hh:', h)

console.log('a:', a)
*/

const i = utils.upRatioObjects(a)
console.log('i:', i)
