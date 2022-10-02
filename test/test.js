const assert = require('chai').assert;
const expect = require('chai').expect;
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
        expect(calc.sum(x,y)).to.equal(2)

    })

    it('returns 2 * 2 = 4', function(){
        x = 2
        y = 2
        assert.equal(calc.mul(x,y),4)
        assert.strictEqual(calc.mul(x,y),4)
    })
})

describe('First Item Test', function(){

    it('return first item',function(){
        
        assert.equal(calc.firstItem([1,2,3]),1)
        expect(calc.firstItem([1,2,3])).to.equal(1)

    })
})

describe('async test' , () => {
    it('callback : eventually returns the results' , (done) => {
        let input = [1,2,3,4,5,6,7,8,9];
        let filter = (item) => item % 2 == 0;

        calc.delayedFilterwithCallback(input , filter , (result) => {
            assert.deepEqual(result , [2,4,6,8])
            done();
        })
    })

    it('promise : eventually returns the results' , () => {
        let input = [1,2,3,4,5,6,7,8,9];
        let filter = (item) => item % 2 == 0;

        return calc.delayedFilterwithPromise(input , filter).then(result => {
            assert.deepEqual(result , [2,4,6,8])
        })
    })

    it('async : eventually returns the results' , async () => {
        let input = [1,2,3,4,5,6,7,8,9];
        let filter = (item) => item % 2 == 1;

        let result = await calc.delayedFilterwithPromise(input , filter);
        assert.deepEqual(result , [1,3,5,7,9]);
    })
})