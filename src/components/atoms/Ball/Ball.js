import ChangeTypeAndDecorateNumber from '../../../containers/ChangeTypeAndDecorateNumber';
import './Ball.css';

const Ball = ({ number, small, smallNr }) => {
  return (
    <div
      data-testid="ball"
      className={small ? 'occurrence-item--ball' : 'balls__item'}
    >
      {small
        ? ChangeTypeAndDecorateNumber(smallNr)
        : number
        ? ChangeTypeAndDecorateNumber(number)
        : '-'}
    </div>
  );
};

export default Ball;
