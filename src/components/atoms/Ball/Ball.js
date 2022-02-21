import './Ball.css';

const Ball = ({ number, small, smallNr }) => {
  return (
    <div
      data-testid="ball"
      className={small ? 'occurrence-item--ball' : 'balls__item'}
    >
      {small
        ? smallNr < 10
          ? `0${smallNr}`
          : smallNr.toString()
        : number
        ? number < 10
          ? `0${number}`
          : number.toString()
        : '-'}
    </div>
  );
};

export default Ball;
