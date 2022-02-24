import ChangeTypeAndDecorateNumber from '../../../containers/ChangeTypeAndDecorateNumber';

const NumberInTheBar = ({ arrayWithNr }) => {
  return (
    <div data-testid="numberInTheBar">
      {arrayWithNr.map((number, i) => {
        const isLastNr = arrayWithNr.length - 1 === i;
        const nr = ChangeTypeAndDecorateNumber(number);
        return isLastNr ? nr : `${nr}  .  `;
      })}
    </div>
  );
};

export default NumberInTheBar;
