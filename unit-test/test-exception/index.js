const request = (url) => {
  if (!url) {
    throw new Error('url empty')
  }
  return 'success'
}

module.exports = request