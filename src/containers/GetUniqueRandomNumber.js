const GetUniqueRandomNumber = (array, limitNumber) => {

  let number;

  while (number === undefined) {
    const randomNumber = Math.floor((Math.random() * limitNumber) + 1);
    const uniqueNumber = !(array.includes(randomNumber));
    if (uniqueNumber) {
      number = randomNumber;
    };
  };
  return number;
}

export default GetUniqueRandomNumber;