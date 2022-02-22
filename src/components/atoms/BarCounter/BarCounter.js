import './BarCounter.css';

const BarCounter = ({ drownNumbers, drownNrIndex }) => {
  return (
    <span data-testid="barCounter" className="drown-nr-wrapper__bar--counter">
      {`${drownNumbers.length - drownNrIndex}:`}
    </span>
  );
};

export default BarCounter;
