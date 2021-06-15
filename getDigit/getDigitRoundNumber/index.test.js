var getAmount = require('./index');
var expect = require('chai').expect;

describe('四舍五入是否正确', function () {
    it('4.6,2 = 4.6', function () {
        expect(getAmount(4.6, 2)).to.be.equal(4.6)
    })

    it('4.66666,2 = 4.67', function () {
        expect(getAmount(4.66666, 2)).to.be.equal(4.67)
    })

    it('4.3212142342,2 = 4.32', function () {
        expect(getAmount(4.3212142342, 2)).to.be.equal(4.32)
    })

    it('23.123,2 = 23.12', function () {
        expect(getAmount(23.123, 2)).to.be.equal(23.12)
    })

    it('23.76861221323,3 = 23.769', function () {
        expect(getAmount(23.76861221323, 3)).to.be.equal(23.769)
    })

    it('2321.32133,7 = 2321.32133', function () {
        expect(getAmount(2321.32133, 7)).to.be.equal(2321.32133)
    })

    it('57.4954,1 = 517.41', function () {
        expect(getAmount(57.4954, 1)).to.be.equal(57.5)
    })

    it('0.3,0 = 0', function () {
        expect(getAmount(0.3, 0)).to.be.equal(0)
    })
})