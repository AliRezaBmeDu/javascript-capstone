import commentsCounter from './commentsCounter';

// Mock getElementById method
const getElementByIdMock = jest.spyOn(document, 'getElementById');
describe('Comments Counter test', () => {
it('Should return 0 for empty UL element', () => {
  const testUL = document.createElement('ul');
  testUL.id = 'ul-1';
  getElementByIdMock.mockReturnValue(testUL); 
  
  const result = commentsCounter(1);
  
  expect(result).toBe(0);
});

it('Should return the correct count for UL element with child elements', () => {
  const testUL = document.createElement('ul');
  testUL.id = 'ul-2';
  
  const testChild1 = document.createElement('li');
  const testChild2 = document.createElement('li');
  const testChild3 = document.createElement('li');

  testUL.appendChild(testChild1);
  testUL.appendChild(testChild2);
  testUL.appendChild(testChild3);

  getElementByIdMock.mockReturnValue(testUL); // Modify the mock behavior
  
  const result = commentsCounter(2);
  
  expect(result).toBe(3);
});
});