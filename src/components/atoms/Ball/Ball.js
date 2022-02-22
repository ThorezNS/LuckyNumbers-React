import ChangeTypeAndDecorateNumber from '../../../containers/ChangeTypeAndDecorateNumber';
import './Ball.css';

const Ball = ({ number, small }) => {
  return (
    <div
      data-testid="ball"
      className={small ? 'occurrence-item--ball' : 'balls__item'}
    >
      {number ? ChangeTypeAndDecorateNumber(number) : '-'}
    </div>
  );
};

export default Ball;
