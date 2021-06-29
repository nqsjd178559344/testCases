/**
 * 向上取整
 * num 数字
 * digit 位数
 */
const getDigitCeilNumber = (num, digit) => {
    return Math.ceil(num * Math.pow(10, digit)) / Math.pow(10, digit)
}

const getDigitCeilNumberByString = (num, digit) => {
    const [integer, decimal = '0'] = (num + '').split('.')
    let initUnitRate
    if(!num && !digit) return 0
    if (!integer) { // 无整数位,仅小数
        initUnitRate = 1
    } else if (!digit) { // 无小数位,仅整数
        initUnitRate = Number(integer) + 1
    } else {
        let dec = Number(decimal.slice(0, digit))
        let decimalLen = decimal.toString().length
        if (decimalLen > digit) {
            dec = dec + 1
        }
        initUnitRate = integer + '.' + dec
    }
    if (!isNaN(initUnitRate)) return Number(initUnitRate)
}
module.exports = { getDigitCeilNumber, getDigitCeilNumberByString }
