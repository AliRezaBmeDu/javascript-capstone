const itemCounter = () => {
  const itemsHolder = document.getElementById('items-container');
  const numberOfItems = itemsHolder.childElementCount;
  return numberOfItems;
};

export default itemCounter;