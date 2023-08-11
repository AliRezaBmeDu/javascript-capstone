const itemCounter = (itemContainer) => {
  if (!itemContainer){
    throw new Error('No Container found to calculate the number of items');
  }
  const directChildDivElements = Array.from(itemContainer.children).filter(child => child.tagName === 'DIV');
  const numberOfItems = directChildDivElements.length;

  return numberOfItems;
};

export default itemCounter;