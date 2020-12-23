// function sumOfTwo(nums1, nums2, value) {
//     let arrayOfSums = []
    
//     for(let i = 0; i < nums1.length; i++) {
//        for(let j=0; j < nums2.length; j++) {
//            arrayOfSums.push(nums1[i] + nums2[j])
//        }
//     }

//     return arrayOfSums.indexOf(value) !== -1 ? true : false
// }

// Another solution

function sumOfTwo(nums1, nums2, value) {
    const map = {};
    
    for(let num of nums1) {
        const difference = value - num;
        map[difference] = difference;
    }
    
    for(let num of nums2) {
        if(map.hasOwnProperty(num)) {
            return true;
        }
    }
    
    return false;
}


/**
* Test Suite 
*/
describe('sumOfTwo()', () => {
    it('returns true if a value can be found that by adding one number from each list', () => {
        // arrange
        const nums1 = [1, 2, 3];
        const nums2 = [10, 20, 30, 40];
        const value = 42;
        
        // act
        const result = sumOfTwo(nums1, nums2, value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(true);
    });
});