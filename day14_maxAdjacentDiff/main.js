function arrayMaximalAdjacentDifference(nums) {
    let maxDifference = Math.abs(nums[0] - nums[1])
    
    for(let i = 1; i < nums.length; i++) {
        let adjacentDifference =  Math.abs(nums[i] - nums[i + 1])
        
        if(adjacentDifference > maxDifference) {
            maxDifference = adjacentDifference
        }
    }
    
    return maxDifference 
}



/**
* Test Suite 
*/
describe('arrayMaximalAdjacentDifference()', () => {
    it('returns largest difference between adjacent values', () => {
        // arrange
        const nums = [2, 4, 1, 0];
        
        // act
        const result = arrayMaximalAdjacentDifference(nums);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(3);
    });

    it('returns largest difference between adjacent values example 2', () => {
        // arrange
        const nums = [2, 9, 1, 0];
        
        // act
        const result = arrayMaximalAdjacentDifference(nums);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});