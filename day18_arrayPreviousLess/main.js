function arrayPreviousLess(nums) {
    let shiftedArray = []
    for(let i = nums.length - 1; i > -1; i--) {
        if(nums[i] > nums[i-1]) {
            ahiftedArray.unshift(nums[i - 1])
        } else {
            ahiftedArray.unshift(-1)
        }
    }
    
    return shiftedArray
    
}



/**
* Test Suite 
*/
describe('arrayPreviousLess()', () => {
    it('shift previous postions from the left to a smaller value or store -1', () => {
        // arrange
        const nums = [3, 5, 2, 4, 5];
        
        // act
        const result = arrayPreviousLess(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([-1, 3, -1, 2, 4]);
    });
    
    it('shift previous postions from the left to a smaller value or store -1', () => {
        // arrange
        const nums = [7, 5, 10, -1, 6];
        
        // act
        const result = arrayPreviousLess(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([-1, -1, 5, -1, -1]);
    });
});