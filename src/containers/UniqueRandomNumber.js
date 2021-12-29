const UniqueRandomNumber = (array, limitNumber) => {

    let uniqueRandomNumber;
        
    while (uniqueRandomNumber === undefined) {
      const randomNumber = Math.floor((Math.random() * limitNumber) + 1);
      const uniqueNumber = !(array.includes(randomNumber));
      if (uniqueNumber) {
        return uniqueRandomNumber = randomNumber;
      };
    };
    return uniqueRandomNumber;
}
 
export default UniqueRandomNumber;