function domainType(domains) {
    let domainEnding = domains.map(domain => domain.split(".")).map(array => array[array.length - 1])
    let domainTypeArray = []
    
    for(let i = 0; i < domainEnding.length; i++) {
        if(domainEnding[i] === 'com') {
            domainTypeArray.push("commercial")
        } else if (domainEnding[i] === "net") {
            domainTypeArray.push("network")
        } else if (domainEnding[i] === "info") {
            domainTypeArray.push("information") 
        } else if (domainEnding[i] === "org") {
            domainTypeArray.push("organization")
        } else {
           null
        }
    }
    
    
    return domainTypeArray
}



/**
* Test Suite 
*/
describe('domainType()', () => {
    it('returns list of domain types', () => {
        // arrange
        const domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"];
        
        // act
        const result = domainType(domains);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual(["organization", "commercial", "network", "information"]);
    });
});