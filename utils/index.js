'use strict'

// npm
const pickBy = require('lodash.pickby')

const makePlan = (isp, name, down_speed, up_speed, limit, price, link) => { return { isp, name, down_speed, up_speed, limit, price, link } }
const picker = (p) => pickBy(p, (v) => v)
const nuller = (v) => v === undefined ? null : v
const makePlanImp = (p) => makePlan.apply(null, p)
const makePlanArray = (obj) => [obj.isp, obj.name, obj.down_speed, obj.up_speed, obj.limit, obj.price, obj.link].map(nuller)

module.exports = {
  toObjects: (d) => d.map(makePlanImp).map(picker),
  toArrays: (objs) => objs.map(makePlanArray)
}
