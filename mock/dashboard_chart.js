function chart(method) {
  let res = null
  switch(method) {
    case 'GET':
      res = [10,20,15,30,20,50]
      break
    default:
      res = null
  }
  return res
}

module.exports = chart