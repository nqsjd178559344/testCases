var getDigitRoundNumber = require('../getDigitRoundNumber');

function fillInFixedDecimalDigits(num, digit) { // 如 digit < decimal.length 
  if (num === null || num === undefined) return num
  let [integer = '0', decimal = '0'] = (num + '').split('.')
  if (!digit) return getDigitRoundNumber(num, 0) + ''
  let len = decimal.toString().length
  if (len > digit) {
    return getDigitRoundNumber(num, digit) + ''
  }
  while (len < digit) {
    decimal += '0'
    len++
  }
  return integer + '.' + decimal
}

function toFixed(num, digit) { // 如 digit < decimal.length 
  if (num === null || num === undefined) return num
  return num.toFixed(digit)
}

module.exports = { fillInFixedDecimalDigits, toFixed }