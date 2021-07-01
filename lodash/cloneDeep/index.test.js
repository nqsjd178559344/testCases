var cloneDeep = require('./index')
var data = require('./data.json')
var lodash_clonedeep = require('lodash.clonedeep')
var expect = require('chai').expect

describe('深拷贝是否正确_基本数据类型', function () {
    it('number cloneDeep', function () {
        var number = 2333
        var numberClone = cloneDeep(number)
        expect(numberClone).to.be.equal(number)
    })

    it('string cloneDeep', function () {
        var string = 'aaaaa'
        var stringClone = cloneDeep(string)
        expect(stringClone).to.be.equal(string)
    })

    it('boolean cloneDeep', function () {
        var boolean = true
        var booleanClone = cloneDeep(boolean)
        expect(booleanClone).to.be.equal(boolean)
    })
})

describe('深拷贝是否正确_引用数据类型', function () {
    describe('only Array', function () {
        describe('Array<number>', function () {
            let numberList = [1, 2, 3, 4, 5]
            const numberCloneList = cloneDeep(numberList)
            it('Array<number> cloneDeep', function () {
                expect(numberList).to.be.deep.equal(numberCloneList)
            })

            it('Array<number> change_cloneDeep', function () {
                numberList[1] = 20
                expect(numberCloneList[1]).to.be.equal(2)
            })
        })

        describe('Array<string>', function () {
            let stringList = ['1', '2', '3', '4', '5']
            const stringCloneList = cloneDeep(stringList)
            it('Array<string> cloneDeep', function () {
                expect(stringList).to.be.deep.equal(stringCloneList)
            })

            it('Array<string> change_cloneDeep', function () {
                stringList[1] = '20'
                expect(stringCloneList[1]).to.be.equal('2')
            })
        })

        describe('Array<boolean>', function () {
            let booleanList = [true, false, true, false, true]
            const booleanCloneList = cloneDeep(booleanList)
            it('Array<boolean> cloneDeep', function () {
                expect(booleanList).to.be.deep.equal(booleanCloneList)
            })

            it('Array<boolean> change_cloneDeep', function () {
                booleanList[1] = true
                expect(booleanCloneList[1]).to.be.not.ok
            })
        })
    })

    describe('only Object', function () {
        describe('Object<number>', function () {
            let numberObj = { 1: 1, 2: 2, 3: 3 }
            const numberObjClone = cloneDeep(numberObj)

            it('Object<number> cloneDeep', function () {
                expect(numberObj).to.be.deep.equal(numberObjClone)
            })

            it('Object<number> change_cloneDeep', function () {
                numberObj[1] = 4
                expect(numberObjClone[1]).to.be.equal(1)
            })
        })

        describe('Object<string>', function () {
            let stringObj = { a: 'a', b: 'b', c: 'c' }
            const stringObjClone = cloneDeep(stringObj)
            it('Object<string> cloneDeep', function () {
                expect(stringObj).to.be.deep.equal(stringObjClone)
            })

            it('Object<string> change_cloneDeep', function () {
                stringObj.a = 'd'
                expect(stringObjClone.a).to.be.equal('a')
            })
        })

        describe('Object<boolean>', function () {
            let booleanObj = { a: true, b: false, c: true }
            const booleanCloneList = cloneDeep(booleanObj)
            it('Object<boolean> cloneDeep', function () {
                expect(booleanObj).to.be.deep.equal(booleanCloneList)
            })

            it('Object<boolean> change_cloneDeep', function () {
                booleanObj.a = false
                expect(booleanCloneList.a).to.be.ok
            })
        })
    })

    describe('both', function () {
        describe('1', function () {
            let mixinData = [{ a: 1, b: [{ c: 2333, d: [1] }] }]
            const mixinDataClone = cloneDeep(mixinData)
            const mixinDataLodashClone = lodash_clonedeep(mixinData)

            it('cloneDeep', function () {
                expect(mixinData).to.be.deep.equal(mixinDataClone)
            })

            it('change_cloneDeep', function () {
                mixinData[0].b = 4
                expect(mixinDataClone[0].b).not.to.be.equal(4)
                expect(mixinData).not.to.be.deep.equal(mixinDataClone)
                expect(mixinDataLodashClone).to.be.deep.equal(mixinDataClone)
            })
        })

        describe('2', function () {
            let mixinData = [{ a: 1, b: [{ c: 2333, d: [{ a: [2333] }, { d: [12138, { f: 1 }] }] }] }];
            const mixinDataClone = cloneDeep(mixinData)
            const mixinDataLodashClone = lodash_clonedeep(mixinData)

            it('cloneDeep', function () {
                expect(mixinData).to.be.deep.equal(mixinDataClone)
            })

            it('change_cloneDeep', function () {
                mixinData[0].b[0].c = 2
                expect(mixinDataClone[0].b[0].c).not.to.be.equal(2)
                expect(mixinData).not.to.be.deep.equal(mixinDataClone)
                expect(mixinDataLodashClone).to.be.deep.equal(mixinDataClone)
            })
        })

        describe('3', function () {
            let mixinData = [{ a: 1, b: [{ c: 2333, d: [{ a: [2333] }, { d: [12138, { f: 1 }] }] }] }];
            const mixinDataClone = cloneDeep(mixinData)
            const mixinDataLodashClone = lodash_clonedeep(mixinData)

            it('cloneDeep', function () {
                expect(mixinData).to.be.deep.equal(mixinDataClone)
            })

            it('change_cloneDeep', function () {
                mixinData[0].b[0].d = [{ a: [2444] }, { d: [12138, { f: 1 }] }]
                expect(mixinDataClone[0].b[0].d[0].a).not.to.be.equal(2333)
                expect(mixinData).not.to.be.deep.equal(mixinDataClone)
                expect(mixinDataLodashClone).to.be.deep.equal(mixinDataClone)
            })
        })

        describe('4 jd_data', function () {
            let mixinData = data
            const mixinDataClone = cloneDeep(mixinData)
            const mixinDataLodashClone = lodash_clonedeep(mixinData)

            it('cloneDeep', function () {
                expect(mixinData).to.be.deep.equal(mixinDataClone)
            })

            it('change_cloneDeep', function () {
                mixinData.data.skuPage.result[0] = 1
                expect(mixinDataClone.data.skuPage.result[0]).not.to.be.equal(1)
                expect(mixinData).not.to.be.deep.equal(mixinDataClone)
                expect(mixinDataLodashClone).to.be.deep.equal(mixinDataClone)
            })
        })
    })
})