import "jasmine";
describe("Addition", function () {

    it("1+1==2", () => {
        // Arrange => Initialise les conditions du test
        let a = 1;
        let b = 1;

        // Act 
        let c = a + b;

        // Assert
        expect(c).withContext("1+1 n'est pas égal à deux").toBe(3);

    });


});