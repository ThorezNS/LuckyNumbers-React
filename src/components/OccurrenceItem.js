import Ball from "./Ball";
import OccurrenceNumbers from "./OccurrenceNumbers";

const OccurrenceItem = ({occurrencesArray}) => {
    return (
        <li className="occurrence-item">
            <Ball smallNr={occurrencesArray[0]} small />
            <OccurrenceNumbers occurrencesArray={occurrencesArray}/>
        </li>
    )
}

export default OccurrenceItem;
