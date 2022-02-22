import Ball from '../../atoms/Ball/Ball';
import OccurrenceNumbers from '../../atoms/OccurrenceNumbers/OccurrenceNumbers';
import './OccurrenceItem.css';

const OccurrenceItem = ({ occurrencesArray }) => {
  return (
    <li className="occurrence-item">
      <Ball number={occurrencesArray[0]} small />
      <OccurrenceNumbers occurrencesArray={occurrencesArray} />
    </li>
  );
};

export default OccurrenceItem;
