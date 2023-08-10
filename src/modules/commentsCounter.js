const commentsCounter = (ULid) => {
    
    const CommentsHolder = document.getElementById(`ul-${ULid}`);
    const commentsNumber = CommentsHolder.childElementCount;
    return commentsNumber;

  };

  export default commentsCounter;