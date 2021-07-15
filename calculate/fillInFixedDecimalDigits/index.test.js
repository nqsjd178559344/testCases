var { fillInFixedDecimalDigits, toFixed } = require('./index');
var expect = require('chai').expect;

describe('显示N位小数是否正确', function () {
  // ? 类型: num typeof !== 'number',digit = 0;
  describe(`类型: num typeof === 'undefined',digit = 0;`, function () {
    it('undefined,0 = undefined', function () {
      expect(fillInFixedDecimalDigits(undefined, 0)).to.be.equal(undefined)
    })

    it('undefined,1 = undefined', function () {
      expect(fillInFixedDecimalDigits(undefined, 1)).to.be.equal(undefined)
    })

    it('undefined,2 = undefined', function () {
      expect(fillInFixedDecimalDigits(undefined, 2)).to.be.equal(undefined)
    })
  })

  describe(`类型: num === null,digit = 0;`, function () {

    // ? 类型: num === null,digit = 0;
    it('null,0 = null', function () {
      expect(fillInFixedDecimalDigits(null, 0)).to.be.equal(null)
    })

    it('null,1 = null', function () {
      expect(fillInFixedDecimalDigits(null, 1)).to.be.equal(null)
    })

    it('null,2 = null', function () {
      expect(fillInFixedDecimalDigits(null, 2)).to.be.equal(null)
    })
  })

  describe(`类型: num === 0,digit = 0;`, function () {

    // ? 类型: num = 0,digit = 0;
    it('0,0 = 0', function () {
      expect(fillInFixedDecimalDigits(0, 0)).to.be.equal('0')
    })
  })

  describe(`类型: num === 0,digit = 0;`, function () {

    // ? 类型: num = 0,digit = 0;
    it('0,0 = 0', function () {
      expect(fillInFixedDecimalDigits(0, 0)).to.be.equal('0')
    })
  })

  describe(`类型: num === 0`, function () {

    // ? 类型: num = 0
    it('0,1 = 0.0', function () {
      expect(fillInFixedDecimalDigits(0, 1)).to.be.equal("0.0")
    })

    it('0,2 = 0.00', function () {
      expect(fillInFixedDecimalDigits(0, 2)).to.be.equal("0.00")
    })

  })

  describe(`类型: digit === 0`, function () {

    // ? 类型: digit = 0

    it('0.3,0 = 0', function () {
      expect(fillInFixedDecimalDigits(0.3, 0)).to.be.equal("0")
    })

    it('0.33,0 = 0', function () {
      expect(fillInFixedDecimalDigits(0.33, 0)).to.be.equal('0')
    })

    it('4.23,0 = 4', function () {
      expect(fillInFixedDecimalDigits(4.23, 0)).to.be.equal('4')
    })

    it('4.6,0 = 5', function () {
      expect(fillInFixedDecimalDigits(4.6, 0)).to.be.equal('5')
    })

    it('4.66666,0 = 5', function () {
      expect(fillInFixedDecimalDigits(4.66666, 0)).to.be.equal('5')
    })

    it('14360,0 = 14360', function () {
      expect(fillInFixedDecimalDigits(14360, 0)).to.be.equal('14360')
    })

  })

  describe(`类型: digit = decimal`, function () {

    // ? 类型: digit = decimal

    it('4.6,1 = 4.6', function () {
      expect(fillInFixedDecimalDigits(4.6, 1)).to.be.equal('4.6')
    })

    it('0.33,2 = 0.33', function () {
      expect(fillInFixedDecimalDigits(0.33, 2)).to.be.equal('0.33')
    })

    it('57.49,2 = 57.49', function () {
      expect(fillInFixedDecimalDigits(57.49, 2)).to.be.equal('57.49')
    })

    it('4.23,2 = 4.23', function () {
      expect(fillInFixedDecimalDigits(4.23, 2)).to.be.equal('4.23')
    })

  })

  describe(`类型: digit > decimal`, function () {

    // ? 类型: digit > decimal [位数小于小数位数]
    it('4.6,2 = 4.60', function () {
      expect(fillInFixedDecimalDigits(4.6, 2)).to.be.equal('4.60')
    })

    it('0.33,3 = 0.330', function () {
      expect(fillInFixedDecimalDigits(0.33, 3)).to.be.equal('0.330')
    })

    it('2321.32133,7 = 2321.3213300', function () {
      expect(fillInFixedDecimalDigits(2321.32133, 7)).to.be.equal('2321.3213300')
    })

  })

  describe(`类型: digit < decimal`, function () {

    // ? 类型: digit < decimal [位数大于小数位数]

    it('0.33,1 = 0.3', function () {
      expect(fillInFixedDecimalDigits(0.33, 1)).to.be.equal('0.3')
    })

    it('4.23,1 = 4.2', function () {
      expect(fillInFixedDecimalDigits(4.23, 1)).to.be.equal('4.2')
    })

    it('4.66666,1 = 4.7', function () {
      expect(fillInFixedDecimalDigits(4.66666, 1)).to.be.equal('4.7')
    })

    it('4.66666,2 = 4.67', function () {
      expect(fillInFixedDecimalDigits(4.66666, 2)).to.be.equal('4.67')
    })

    it('4.66666,3 = 4.667', function () {
      expect(fillInFixedDecimalDigits(4.66666, 3)).to.be.equal('4.667')
    })

    it('4.3212142342,2 = 4.32', function () {
      expect(fillInFixedDecimalDigits(4.3212142342, 2)).to.be.equal('4.32')
    })

    it('23.123,2 = 23.12', function () {
      expect(fillInFixedDecimalDigits(23.123, 2)).to.be.equal('23.12')
    })

    it('23.76861221323,3 = 23.769', function () {
      expect(fillInFixedDecimalDigits(23.76861221323, 3)).to.be.equal('23.769')
    })

    it('57.4354,1 = 57.4', function () {
      expect(fillInFixedDecimalDigits(57.4354, 1)).to.be.equal('57.4')
    })
  })

})

describe('toFixed_显示N位小数是否正确', function () {
  // ? 类型: num typeof !== 'number',digit = 0;
  it('undefined,0 = 0', function () {
    expect(toFixed(undefined, 0)).to.be.equal(undefined)
  })

  it('undefined,1 = 0.0', function () {
    expect(toFixed(undefined, 1)).to.be.equal(undefined)
  })

  it('undefined,2 = 0.00', function () {
    expect(toFixed(undefined, 2)).to.be.equal(undefined)
  })

  // ? 类型: num typeof !== 'number',digit = 0;
  it('null,0 = null', function () {
    expect(toFixed(null, 0)).to.be.equal(null)
  })

  it('null,1 = null', function () {
    expect(toFixed(null, 1)).to.be.equal(null)
  })

  it('null,2 = null', function () {
    expect(toFixed(null, 2)).to.be.equal(null)
  })

  // ? 类型: num = 0,digit = 0;
  it('0,0 = 0', function () {
    expect(toFixed(0, 0)).to.be.equal('0')
  })

  // ? 类型: num = 0
  it('0,1 = 0.0', function () {
    expect(toFixed(0, 1)).to.be.equal("0.0")
  })

  it('0,2 = 0.00', function () {
    expect(toFixed(0, 2)).to.be.equal("0.00")
  })

  // ? 类型: digit = 0

  it('0.3,0 = 0', function () {
    expect(toFixed(0.3, 0)).to.be.equal("0")
  })

  it('0.33,0 = 0', function () {
    expect(toFixed(0.33, 0)).to.be.equal('0')
  })

  it('4.23,0 = 4', function () {
    expect(toFixed(4.23, 0)).to.be.equal('4')
  })

  it('4.6,0 = 5', function () {
    expect(toFixed(4.6, 0)).to.be.equal('5')
  })

  it('4.66666,0 = 5', function () {
    expect(toFixed(4.66666, 0)).to.be.equal('5')
  })

  it('14360,0 = 14360', function () {
    expect(toFixed(14360, 0)).to.be.equal('14360')
  })

  // ? 类型: digit = decimal

  it('4.6,1 = 4.6', function () {
    expect(toFixed(4.6, 1)).to.be.equal('4.6')
  })

  it('0.33,2 = 0.33', function () {
    expect(toFixed(0.33, 2)).to.be.equal('0.33')
  })

  it('57.49,2 = 57.49', function () {
    expect(toFixed(57.49, 2)).to.be.equal('57.49')
  })

  it('4.23,2 = 4.23', function () {
    expect(toFixed(4.23, 2)).to.be.equal('4.23')
  })

  // ? 类型: digit > decimal [位数小于小数位数]

  it('4.6,2 = 4.6', function () {
    expect(toFixed(4.6, 2)).to.be.equal('4.60')
  })

  it('0.33,3 = 0.33', function () {
    expect(toFixed(0.33, 3)).to.be.equal('0.330')
  })

  it('2321.32133,7 = 2321.32133', function () {
    expect(toFixed(2321.32133, 7)).to.be.equal('2321.3213300')
  })

  // ? 类型: digit < decimal [位数大于小数位数]

  it('0.33,1 = 0.3', function () {
    expect(toFixed(0.33, 1)).to.be.equal('0.3')
  })

  it('4.23,1 = 4.2', function () {
    expect(toFixed(4.23, 1)).to.be.equal('4.2')
  })

  it('4.66666,1 = 4.7', function () {
    expect(toFixed(4.66666, 1)).to.be.equal('4.7')
  })

  it('4.66666,2 = 4.67', function () {
    expect(toFixed(4.66666, 2)).to.be.equal('4.67')
  })

  it('4.66666,3 = 4.667', function () {
    expect(toFixed(4.66666, 3)).to.be.equal('4.667')
  })

  it('4.3212142342,2 = 4.32', function () {
    expect(toFixed(4.3212142342, 2)).to.be.equal('4.32')
  })

  it('23.123,2 = 23.12', function () {
    expect(toFixed(23.123, 2)).to.be.equal('23.12')
  })

  it('23.76861221323,3 = 23.769', function () {
    expect(toFixed(23.76861221323, 3)).to.be.equal('23.769')
  })

  it('57.4354,1 = 517.4', function () {
    expect(toFixed(57.4354, 1)).to.be.equal('57.4')
  })
})