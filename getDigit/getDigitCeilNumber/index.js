/**
 * 向上取整
 * num 数字
 * digit 位数
 */
const getDigitCeilNumber = (num, digit) => {
    return Math.ceil(num * Math.pow(10, digit)) / Math.pow(10, digit)
}

const getDigitCeilNumberByString = (num, digit) => {
    if (!num) return 0
    const [integer, decimal] = (num + '').split('.')
    let decimalLen = decimal ? decimal.length : 0
    let initUnitRate = num
    /**
     * *变化的情况
     *  ? 1. digit = 0
     * A: digit = 0,integer = 0, decimal !== 0 : => 1
     * B: digit = 0,integer !== 0, decimal = 0 : => num
     * C: digit = 0,integer !== 0, decimal !== 0 : => num + 1
     * *digit < decimalLen
     * C: integer = 0, decimal !== 0 : => dec + 1
     * D: integer !== 0, decimal !== 0 : => dec + 1
     */
    if (!digit) {
        if (decimal) {
            initUnitRate = Number(integer) + 1
        }
    } else if (digit < decimalLen) {
        let dec = Number(decimal.slice(0, digit))
        if (decimal) {
            initUnitRate = integer + '.' + (dec + 1)
        }
    }

    if (!isNaN(initUnitRate)) return Number(initUnitRate)
}

module.exports = { getDigitCeilNumber, getDigitCeilNumberByString }
