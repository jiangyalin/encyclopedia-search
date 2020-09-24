const createFolder = require('./create-folder')
const driver = require('./driver')
const readData = require('./read-data')
const writeData = require('./write-data')
const decodeUtf8 = require('./decode-utf8')
const encodeUtf8 = require('./encode-utf8')
const tableToArray = require('./table-to-array')

module.exports = {
  createFolder,
  driver,
  readData,
  writeData,
  encodeUtf8, // 字符串转编码
  decodeUtf8, // 将以UTF-8编码的字节序列解码为String
  tableToArray
}
