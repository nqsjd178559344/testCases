const getDigitFloorNumber = (num, digit = 2) => {
    const [integer, decimal = '0'] = (num + '').split('.')
    let initUnitRate
    if (!digit) { // 保留整数
        initUnitRate = integer
    } else {
        initUnitRate = integer + '.' + decimal.slice(0, digit)
    }
    if (!isNaN(initUnitRate)) return initUnitRate
}

const getDigitRoundNumber = (num, digit) => {
    return Math.round(num * Math.pow(10, digit)) / Math.pow(10, digit)
}

function getAmount(unitRate, unitNum) {
    let initUnitRate = getDigitFloorNumber(unitRate)
    let initUnitNum = getDigitFloorNumber(unitNum, 0)
    let amount = initUnitRate * initUnitNum
    return getDigitRoundNumber(amount, 2)
}

module.exports = getAmount