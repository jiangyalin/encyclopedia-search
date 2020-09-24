const driver = require('./../../tool/driver').get()
const jsDom = require('jsdom').JSDOM
const jquery = require('jquery')

const example = async (url, callback) => {
  try {
    console.log('url', url)
    await driver.get(url)
    let $ = jquery(new jsDom(await driver.getPageSource()).window)
    $('.para-title.level-2').each((index, element) => {
      const text = $(element).find('.title-text').text()
      const point = text.substring($(element).find('.title-prefix').text().length)
      console.log('index', index)
      console.log('element', point)
    })
    const name = $('#alpha-inner .asset-header h2 a').text()

    setTimeout(() => {
      callback(name)
    }, 1000)
  } catch {
    console.log('异常')
  }
}

module.exports = example
