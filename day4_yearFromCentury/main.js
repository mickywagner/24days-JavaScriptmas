function centuryFromYear(year) {
    if(year % 100 === 0) {
        return year / 100
    } else {
        return Math.floor(year/100) + 1
    }
}



/**
* Test Suite 
*/
describe('centuryFromYear()', () => {
    it('returns current century', () => {
        // arrange
        const year = 1905;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 1: " ,result);
        
        // assert
        expect(result).toBe(20);
    });
    
    it('returns current century for edge case of start of century', () => {
        // arrange
        const year = 1700;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(17);
    });    
    
    it('returns current century for edge case of start of century', () => {
        // arrange
        const year = 1600;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 3: ", result);
        
        // assert
        expect(result).toBe(16);
    });
    
    it('returns current century for edge case of start of century', () => {
        // arrange
        const year = 902;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 4: ", result);
        
        // assert
        expect(result).toBe(10);
    });
});