'use strict'

// npm
const pickBy = require('lodash.pickby')

const makePlan = (isp, name, downloadSpeed, uploadSpeed, bandwidthLimit, price, link) => {
  return { isp: isp, name: name, down_speed: downloadSpeed, up_speed: uploadSpeed, limit: bandwidthLimit, price: price, link: link }
}
const picker = (p) => pickBy(p, (v) => v)
const nuller = (v) => v === undefined ? null : v
const makePlanImp = (p) => makePlan.apply(null, p)
const makePlanArray = (obj) => [obj.isp, obj.name, obj.down_speed, obj.up_speed, obj.limit, obj.price, obj.link].map(nuller)

module.exports = {
  plans: (d) => d.map(makePlanImp).map(picker),
  plans2: (objs) => objs.map(makePlanArray)
}
