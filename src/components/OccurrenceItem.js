import Ball from "./Ball";
import OccurrenceNumbers from "./OccurrenceNumbers";

const OccurrenceItem = () => {
    return (
        <li className="occurrence-item">
            <Ball secondary />
            <OccurrenceNumbers />
        </li>
    )
}

export default OccurrenceItem;
