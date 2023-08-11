import itemCounter from "./addCounter";


describe('Testing itemCounter', () => {
    it('should give an error when there is no input parameter', () => {
        expect(() => itemCounter()).toThrow(Error);
    });

    it('should return the number of items in the specific div', () => {
        const listDivMock = document.createElement('div');
        // Spy on the appendChild method to check if it's called with the correct parameters
        const appendChildSpy = jest.spyOn(listDivMock, 'appendChild');
        const count = 5;
        for (let i=0; i<count; i+=1){
            listDivMock.appendChild(document.createElement('div'));
        }
        const totalItems = itemCounter(listDivMock);
        //Expect the number of items
        expect(totalItems).toBe(count);
    });

    it('should return zero when the div has no item', () => {
        const listDivMock = document.createElement('div');
        const totalItems = itemCounter(listDivMock);
        //Expect the number of items=0
        expect(totalItems).toBe(0);
      });

})