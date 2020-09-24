// 表格转二维数组
module.exports = table => {
  const array = []
  for (let i = 0; i < table.filter(item => item.length !== 1).length - 1; i++) {
    array.push(new Array(table[0].length))
  }
  const title = table[0]
  let count = 0
  table.filter((item, i) => i !== 0).forEach((item, i) => { // 行
    if (item.length === 1) {
      count++
    } else {
      let col = 0
      item.forEach(node => { // 列
        for (let j = 0; j < node.colspan; j++) { // 跨列
          for (let k = 0; k < node.rowspan; k++) { // 跨行
            let index = 0
            for (let m = 0; m < 8; m++) {
              const value = array[i - count + k][col + j + m]
              if (value) {
                index++
              } else {
                m = 8
              }
            }
            array[i - count + k][col + j + index] = node.text.replace(/(^\s*)|(\s*$)/g, '').replace(/《/g, '').replace(/》/g, '')
          }
        }
        col += node.colspan
      })
    }
  })
  return {
    title,
    data: array
  }
}
