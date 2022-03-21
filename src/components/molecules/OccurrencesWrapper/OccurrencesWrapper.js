import OccurrenceItem from "../OccurrenceItem/OccurrenceItem";
import './OccurrencesWrapper.css';

const OccurrencesWrapper = ({occurrences}) => {

    return (
        <ul className="occurrences-wrapper">
            {occurrences.map((occurrencesArray, i) => {
                return <OccurrenceItem key={i} occurrencesArray={occurrencesArray}/>
            })}
        </ul>
    )
}

export default OccurrencesWrapper;
