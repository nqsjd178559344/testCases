var myInstanceof = require('./index')
var expect = require('chai').expect

describe('myInstanceof 检测', function () {
    it('array', function () {
        let array = []
        expect(myInstanceof(array, Array)).to.be.ok
    })

    it('p P', function () {
        function P (){

        }
        let p = new P()
        expect(myInstanceof(p, P)).to.be.ok
    })

    it('object', function () {
        let obj = {}
        expect(myInstanceof(obj, Object)).to.be.ok
    })
})