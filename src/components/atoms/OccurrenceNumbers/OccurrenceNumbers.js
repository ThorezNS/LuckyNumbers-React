import './OccurrenceNumbers.css';

const OccurrenceNumbers = ({ occurrencesArray }) => {
  return (
    <div data-testid="OccurrenceNumbers" className="occurrence-item--numbers">
      <span className="occurrence-item--nr">{`${occurrencesArray[1]}`}</span>
      <span className="occurrence-item--percentage">{`${occurrencesArray[2]}%`}</span>
    </div>
  );
};

export default OccurrenceNumbers;
