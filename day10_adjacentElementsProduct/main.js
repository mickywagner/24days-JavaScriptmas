function adjacentElementsProduct(nums) {
    let product = 0
    for(let i=1; i < nums.length; i++) {
        let multiplied = nums[i]*nums[i-1]
        if(multiplied > product) {
            product = multiplied
        }
    }
    return product
}



/**
* Test Suite 
*/
describe('adjacentElementsProduct()', () => {
    it('returns largest product of adjacent values', () => {
        // arrange
        const nums = [3, 6, -2, -5, 7, 3];
        
        // act
        const result = adjacentElementsProduct(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(21);
    });
});