const itemCounter = () => {
  const itemsHolder = document.getElementById('items-container');
  const numberOfItems = itemsHolder.childElementCount;
  return numberOfItems - 1;
};

export default itemCounter;