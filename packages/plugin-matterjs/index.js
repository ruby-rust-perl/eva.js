'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/plugin-matterjs.cjs.prod.js')
} else {
  module.exports = require('./dist/plugin-matterjs.cjs.js')
}
