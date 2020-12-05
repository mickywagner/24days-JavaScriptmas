function chunkyMonkey(values, size) {
   const firstHalf = values.slice(0, size)
   const secondHalf = values.slice(size)
   
   return [[...firstHalf], [...secondHalf]]

     
}



/**
* Test Suite 
*/
describe('chunkyMonkey()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const values = ["a", "b", "c", "d"];
        const size = 2;
        
        // act
        const result = chunkyMonkey(values, size);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([["a", "b"], ["c", "d"]]);
    });
});

describe('chunkyMonkey()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const values = [0, 1, 2, 3, 4, 5];
        const size = 4;
        
        // act
        const result = chunkyMonkey(values, size);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([[0,1,2,3], [4,5]]);
    });
});