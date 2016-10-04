'use strict'

// npm
const flatten = require('lodash.flatten')
const differenceBy = require('lodash.differenceby')
const pickBy = require('lodash.pickby')
const sortBy = require('lodash.sortby')
const uniq = require('lodash.uniq')

const makePlan = (isp, name, down_speed, up_speed, limit, price, link) => { return { isp, name, down_speed, up_speed, limit, price, link } } // eslint-disable-line camelcase
const picker = (p) => pickBy(p, (v) => v)
const nuller = (v) => v === undefined ? null : v
const makePlanImp = (p) => makePlan.apply(null, p)
const makePlanArray = (obj) => [obj.isp, obj.name, obj.down_speed, obj.up_speed, obj.limit, obj.price, obj.link].map(nuller)

module.exports = {
  types: ['cable', 'dsl', 'fttn', 'fibre', 'commuté'].sort(),
  toObjects: (d) => d.map(makePlanImp).map(picker),
  toArrays: (objs) => objs.map(makePlanArray),
  sortObjects: (objs, p) => sortBy(objs, p).reverse(),
  unlimitedObjects: (objs) => objs.filter((z) => !z.limit),
  byIspObjects: (objs, isp) => objs.filter((z) => z.isp.toLowerCase() === isp.toLowerCase()),
  IspObjects: (objs) => uniq(objs.map((z) => z.isp.toLowerCase())).sort(),
  byTypeObjects: (objs, type) => type
    ? objs.filter((z) => z.name.toLowerCase().replace(/â/g, 'a').replace(/fibe/, 'fibre').indexOf(type.toLowerCase()) !== -1)
    : differenceBy(objs, flatten(module.exports.types.map((t) => module.exports.byTypeObjects(objs, t))), 'name')
}
