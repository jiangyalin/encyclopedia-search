const driver = require('./../../tool/driver').get()
const jsDom = require('jsdom').JSDOM
const jquery = require('jquery')
const tool = require('./../../tool')

const example = async (url, callback) => {
  try {
    await driver.get(url)
    let $ = jquery(new jsDom(await driver.getPageSource()).window)
    const table = []
    $('#使用歌曲').parent().next().find('tr').each((index, element) => {
      table.push([])
      $(element).children().each((j, node) => {
        table[index].push({
          text: $(node).text(),
          rowspan: Number($(node).attr('rowspan')) || 1,
          colspan: Number($(node).attr('colspan')) || 1
        })
      })
    })
    const array = tool.tableToArray(table).data
    setTimeout(() => {
      callback(array)
    }, 1000)
  } catch {
    console.log('异常')
  }
}

module.exports = example
