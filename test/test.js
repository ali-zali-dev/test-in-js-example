const assert = require('assert');
const calc = require('../app/libs')
describe('Calculator Test', function(){
    it('returns 1 + 1 = 2', function(){
        x = 1
        y = 1
        // if (x + y == 2) {
        //     return true
        // } else{
        //     throw Error('false')
        // }
        // assert.equal(x + y,2)
        assert.equal(calc.sum(x,y),2)
        assert.strictEqual(calc.sum(x,y),2)
    })

    it('returns 2 * 2 = 4', function(){
        x = 2
        y = 2
        assert.equal(calc.mul(x,y),4)
        assert.strictEqual(calc.mul(x,y),4)
    })
})