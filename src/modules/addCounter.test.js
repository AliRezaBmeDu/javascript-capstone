import itemCounter from "./addCounter";

// Mock getElementById method to provide a fake listDiv element
jest.spyOn(document, 'getElementById').mockReturnValue(document.createElement('div'));

describe('Item Count', () => {
    it('should return the number of items in the specific div', () => {
        const listDivMock = document.createElement('div');
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