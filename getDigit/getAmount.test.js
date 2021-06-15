var getAmount = require('./getAmount');
var expect = require('chai').expect;

describe('向下取整是否正确', function () {
    it('4.6,100 = 460', function () {
        expect(getAmount(4.6, 100)).to.be.equal(460)
    })

    it('233.33,7 = 1633.31', function () {
        expect(getAmount(233.33, 7)).to.be.equal(1633.31)
    })

    it('2345.32425,99 = 232186.68', function () {
        expect(getAmount(2345.32425, 43)).to.be.equal(100848.76)
    })

    it('23.123,3 = 460', function () {
        expect(getAmount(23.123, 3)).to.be.equal(69.36)
    })

    it('23.76861221323,3 = 71.28', function () {
        expect(getAmount(23.76861221323, 3)).to.be.equal(71.28)
    })

    it('2321.32133,7 = 16249.24', function () {
        expect(getAmount(2321.32133, 7)).to.be.equal(16249.24)
    })

    it('57.4954,9 = 517.41', function () {
        expect(getAmount(57.4954, 9)).to.be.equal(517.41)
    })

    it('0.3,4 = 1.2', function () {
        expect(getAmount(0.3, 4)).to.be.equal(1.2)
    })
})