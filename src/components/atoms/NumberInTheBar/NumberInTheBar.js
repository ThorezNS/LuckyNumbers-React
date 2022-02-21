import ChangeTypeAndDecorateNumber from '../../../containers/ChangeTypeAndDecorateNumber';

const NumberInTheBar = ({ arrayWithNr }) => {
  return (
    <>
      {arrayWithNr.map((number, i) => {
        const isLastNr = arrayWithNr.length - 1 === i;
        const nr = ChangeTypeAndDecorateNumber(number);
        return isLastNr ? nr : `${nr}  .  `;
      })}
    </>
  );
};

export default NumberInTheBar;
