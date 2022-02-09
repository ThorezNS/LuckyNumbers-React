import Ball from "../../atoms/Ball/Ball";
import OccurrenceNumbers from "../../atoms/OccurrenceNumbers/OccurrenceNumbers";

const OccurrenceItem = ({occurrencesArray}) => {
    return (
        <li className="occurrence-item">
            <Ball smallNr={occurrencesArray[0]} small />
            <OccurrenceNumbers occurrencesArray={occurrencesArray}/>
        </li>
    )
}

export default OccurrenceItem;
