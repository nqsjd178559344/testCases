var groupBy = require('./index')
var lodashStable = require('lodash')
// import lodashStable from 'lodash';
// var lodash_groupby = require('lodash.groupby')
var expect = require('chai').expect

describe('groupby是否正确_基本数据类型', function () {
    var array = [6.1, 4.2, 6.3];
    it('should transform keys by `iteratee`', function () {
        var actual = groupBy(array, Math.floor);
        expect(actual).to.be.deep.equal({ '4': [4.2], '6': [6.1, 6.3] });
    });
})