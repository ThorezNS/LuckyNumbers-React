import OccurrenceItem from "./OccurrenceItem";

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
