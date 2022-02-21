const ChangeTypeAndDecorateNumber = (number) => {
  return number < 10 ? `0${number}` : number.toString();
};

export default ChangeTypeAndDecorateNumber;
