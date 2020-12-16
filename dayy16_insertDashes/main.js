function insertDashes(arr) {
    const array = arr.split(' ')
    const mapped = array.map(val => {
        return val.split('').join('-')
    })
    
    return mapped.join(' ')
}



/**
* Test Suite 
*/
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "aba caba";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("a-b-a c-a-b-a");
    });
});

describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "i love noodles";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("i l-o-v-e n-o-o-d-l-e-s");
    });
});