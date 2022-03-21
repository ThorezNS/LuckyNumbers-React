import BarCounter from '../../atoms/BarCounter/BarCounter';
import NumberInTheBar from '../../atoms/NumberInTheBar/NumberInTheBar';
import './BarWithNumbers.css';

const BarWithNumbers = ({ drownNrIndex, arrayWithNr, drownNumbers }) => {
  return (
    <li className="drown-nr-wrapper__bar">
      <BarCounter drownNumbers={drownNumbers} drownNrIndex={drownNrIndex} />
      <NumberInTheBar arrayWithNr={arrayWithNr} />
    </li>
  );
};

export default BarWithNumbers;
