var getAmount = require('./index');
var getDigitCeilNumber = getAmount.getDigitCeilNumber
var getDigitCeilNumberByString = getAmount.getDigitCeilNumberByString
var expect = require('chai').expect;

describe('getDigitCeilNumber_向上取整是否正确', function () {
  it('4.6,2 = 4.6', function () {
    expect(getDigitCeilNumber(4.6, 2)).to.be.equal(4.6)
  })

  it('4.66666,2 = 4.67', function () {
    expect(getDigitCeilNumber(4.66666, 2)).to.be.equal(4.67)
  })

  it('4.3212142342,2 = 4.32', function () {
    expect(getDigitCeilNumber(4.3212142342, 2)).to.be.equal(4.33)
  })

  it('23.123,2 = 23.12', function () {
    expect(getDigitCeilNumber(23.123, 2)).to.be.equal(23.13)
  })

  it('23.76861221323,3 = 23.769', function () {
    expect(getDigitCeilNumber(23.76821221323, 3)).to.be.equal(23.769)
  })

  //! 有误差
  it('2321.32133,7 = 2321.32133', function () {
    expect(getDigitCeilNumber(2321.32133, 7)).to.be.equal(2321.32133)
  })

  it('57.4954,1 = 517.41', function () {
    expect(getDigitCeilNumber(57.4354, 1)).to.be.equal(57.5)
  })

  it('57.49,2 = 57.49', function () {
    expect(getDigitCeilNumber(57.49, 2)).to.be.equal(57.49)
  })

  it('0.3,0 = 0', function () {
    expect(getDigitCeilNumber(0.3, 0)).to.be.equal(1)
  })
})

describe('getDigitCeilNumberByString_向上取整是否正确', function () {
  // ? 类型: num = 0,digit = 0;
  it('0,0 = 0', function () {
    expect(getDigitCeilNumberByString(0, 0)).to.be.equal(0)
  })

  // ? 类型: num = 0
  it('0,1 = 0', function () {
    expect(getDigitCeilNumberByString(0, 1)).to.be.equal(0)
  })

  it('0,2 = 0', function () {
    expect(getDigitCeilNumberByString(0, 2)).to.be.equal(0)
  })

  // ? 类型: digit = 0

  it('0.3,0 = 1', function () {
    expect(getDigitCeilNumberByString(0.3, 0)).to.be.equal(1)
  })

  it('0.33,0 = 1', function () {
    expect(getDigitCeilNumberByString(0.33, 0)).to.be.equal(1)
  })

  it('4.23,0 = 5', function () {
    expect(getDigitCeilNumberByString(4.23, 0)).to.be.equal(5)
  })

  it('4.6,0 = 5', function () {
    expect(getDigitCeilNumberByString(4.6, 0)).to.be.equal(5)
  })

  it('4.66666,0 = 5', function () {
    expect(getDigitCeilNumberByString(4.66666, 0)).to.be.equal(5)
  })

  it('14360,0 = 14360', function () {
    expect(getDigitCeilNumberByString(14360, 0)).to.be.equal(14360)
  })

  // ? 类型: digit = decimal

  it('4.6,1 = 4.6', function () {
    expect(getDigitCeilNumberByString(4.6, 1)).to.be.equal(4.6)
  })

  it('0.33,2 = 0.33', function () {
    expect(getDigitCeilNumberByString(0.33, 2)).to.be.equal(0.33)
  })

  it('57.49,2 = 57.49', function () {
    expect(getDigitCeilNumberByString(57.49, 2)).to.be.equal(57.49)
  })

  it('4.23,2 = 4.23', function () {
    expect(getDigitCeilNumberByString(4.23, 2)).to.be.equal(4.23)
  })

  // ? 类型: digit > decimal [位数小于小数位数]

  it('4.6,2 = 4.6', function () {
    expect(getDigitCeilNumberByString(4.6, 2)).to.be.equal(4.6)
  })

  it('0.33,3 = 0.33', function () {
    expect(getDigitCeilNumberByString(0.33, 3)).to.be.equal(0.33)
  })

  it('2321.32133,7 = 2321.32133', function () {
    expect(getDigitCeilNumberByString(2321.32133, 7)).to.be.equal(2321.32133)
  })

  // ? 类型: digit < decimal [位数大于小数位数]

  it('0.33,1 = 0.4', function () {
    expect(getDigitCeilNumberByString(0.33, 1)).to.be.equal(0.4)
  })

  it('4.23,1 = 4.3', function () {
    expect(getDigitCeilNumberByString(4.23, 1)).to.be.equal(4.3)
  })
  
  it('4.66666,1 = 4.7', function () {
    expect(getDigitCeilNumberByString(4.66666, 1)).to.be.equal(4.7)
  })

  it('4.66666,2 = 4.67', function () {
    expect(getDigitCeilNumberByString(4.66666, 2)).to.be.equal(4.67)
  })

  it('4.66666,3 = 4.667', function () {
    expect(getDigitCeilNumberByString(4.66666, 3)).to.be.equal(4.667)
  })


  it('4.3212142342,2 = 4.33', function () {
    expect(getDigitCeilNumberByString(4.3212142342, 2)).to.be.equal(4.33)
  })


  it('23.123,2 = 23.13', function () {
    expect(getDigitCeilNumberByString(23.123, 2)).to.be.equal(23.13)
  })


  it('23.76861221323,3 = 23.769', function () {
    expect(getDigitCeilNumberByString(23.76821221323, 3)).to.be.equal(23.769)
  })


  it('57.4354,1 = 517.5', function () {
    expect(getDigitCeilNumberByString(57.4354, 1)).to.be.equal(57.5)
  })
})

