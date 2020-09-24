const server = require('./server')
const tool = require('./../../tool')
const platform = require('./../../config').platform

module.exports = ({ name, type }) => {
  const url = platform + tool.encodeUtf8(name) + '#' + tool.encodeUtf8('使用歌曲')
  server(url, data => {
    console.log('data', data)
  })
}
