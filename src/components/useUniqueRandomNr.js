const useUniqueRandomNr = () => {

  function getUniqueRandomNr(array, limitNumber) {
    let uniqueRandomNumber;

    function getNumber() {
      const randomNumber = Math.floor((Math.random() * limitNumber) + 1);
      getUniqueNumber(randomNumber);
    }
    getNumber();

    function getUniqueNumber(number) {
      const uniqueNumber = !(array.includes(number));
      if (uniqueNumber) {
        return uniqueRandomNumber = number;
      };
    return  getNumber();
    }

    return uniqueRandomNumber;
  }

  return getUniqueRandomNr;
}

export default useUniqueRandomNr;