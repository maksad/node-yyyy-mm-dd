'use strict'

module.exports = function (date) {
  date = date || new Date()

  var year = date.getFullYear()
  var month = twoDigit(date.getMonth() + 1)
  var day = twoDigit(date.getDate())

  return year + '-' + month + '-' + day
}

module.exports.withTime = function (datetime) {
  datetime = datetime || new Date()

  var date = this(datetime)
  var hour = twoDigit(datetime.getHours())
  var minutes = twoDigit(datetime.getMinutes())
  var seconds = twoDigit(datetime.getSeconds())

  return date + ' ' + hour + ':' + minutes + ':' + seconds
}

function twoDigit (n) {
  return ('0' + n).slice(-2)
}
