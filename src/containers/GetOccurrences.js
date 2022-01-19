const GetOccurrences = (currentlyDrawnNumbers, drownNumbers) => {

    const countsObject = {};
    const zeroFilteredNumbers = currentlyDrawnNumbers.filter(number => number !== 0);

    //Creating an array with filtered numbers and calculating the occurrences
    [].concat(...zeroFilteredNumbers, ...drownNumbers)
      .forEach((nr) => {
        countsObject[nr] = (countsObject[nr] || 0) + 1;
      });

    const countsArray = Object.entries(countsObject);
    const sortedOccurrences = countsArray.sort((a, b) => {
      return b[1] - a[1];
    });

  return sortedOccurrences;
};

export default GetOccurrences;