const GetUniqueRandomNumber = (array, limitNumber) => {
  let number = false;

  while (!number) {
    const randomNumber = Math.floor(Math.random() * limitNumber + 1);
    const uniqueNumber = !array.includes(randomNumber);
    if (uniqueNumber) {
      number = randomNumber;
    }
  }
  return number;
};

export default GetUniqueRandomNumber;
