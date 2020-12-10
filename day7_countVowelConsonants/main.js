function countVowelConsonant(str) {
  const regex = /a|e|i|o|u/
 
//   let mapped = str.split('').map(i => regex.test(i) ? 1 : 2)
//   let sum = mapped.reduce((acc, current) => acc += current)

    let sum = str.split('').reduce((acc, current) => {
        if(regex.test(current)) {
        return acc += 1
        } else {
        return acc += 2
        }
    }, 0)

  
  return sum
  
}



/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});

describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'aaaa';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(4);
    });
});

describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'gatbeepxmsr';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(19);
    });
});

