const GetOccurrences = (currentlyDrawnNumbers, drownNumbers) => {
  const zeroFilteredNumbers = currentlyDrawnNumbers.filter(
    (number) => number !== 0
  );
  const joinedArrays = [].concat(...zeroFilteredNumbers, ...drownNumbers);

  //Calculating occurrences numbers
  const occurrencesObject = {};
  joinedArrays.forEach((nr) => {
    occurrencesObject[nr] = (occurrencesObject[nr] || 0) + 1;
  });

  const occurrencesArray = Object.entries(occurrencesObject);

  const addPercentage = occurrencesArray.map((array) => {
    const calculatePercentage = (
      (array[1] / joinedArrays.length) *
      100
    ).toFixed(1);
    const joinWithPercentage = [...array, calculatePercentage];
    const convertedToNumbers = joinWithPercentage.map((nr) => parseFloat(nr));
    return convertedToNumbers;
  });

  const sortOccurrences = addPercentage.sort((a, b) => {
    return b[1] - a[1];
  });

  return sortOccurrences;
};

export default GetOccurrences;
