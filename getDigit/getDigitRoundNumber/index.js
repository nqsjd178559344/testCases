const getDigitRoundNumber = (num, digit) => {
    if (!isNumber(Number(num))) {
        return num
    }
    return Number(Number(num).toFixed(digit)) // toFixed 自动补至digit位
}

const isNumber = (value) => {
    return !isNaN(value)
}

module.exports = getDigitRoundNumber