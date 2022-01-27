const GetOccurrences = (currentlyDrawnNumbers, drownNumbers) => {

    const occurrencesObject = {};
    const zeroFilteredNumbers = currentlyDrawnNumbers.filter(number => number !== 0);
    const joinedArrays = [].concat(...zeroFilteredNumbers, ...drownNumbers);

    //Calculating occurrences numbers
      joinedArrays.forEach((nr) => {
        occurrencesObject[nr] = (occurrencesObject[nr] || 0) + 1;
      });

    const occurrencesArray = Object.entries(occurrencesObject);

    const addedPercentage = occurrencesArray.map((array) => {
      const calculatePercentage = ((array[1] / joinedArrays.length) * 100).toFixed(1);
      const joinWithPercentage = [...array, calculatePercentage]
      const convertedToNumbers =  joinWithPercentage.map(nr => parseFloat(nr));
      return convertedToNumbers;
    });

    const sortedOccurrences = addedPercentage.sort((a, b) => {
      return b[1] - a[1];
    });

  return sortedOccurrences;
};

export default GetOccurrences;