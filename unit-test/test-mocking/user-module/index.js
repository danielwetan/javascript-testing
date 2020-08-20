const request = require('./request')

const _ = require('lodash')

const getUser = () => {
  const users = request()
  return _.head(users)
}

module.exports = getUser