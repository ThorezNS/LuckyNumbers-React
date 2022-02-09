const NumberInTheBar = ({arrayWithNr}) => {

    return (
        <>
            {arrayWithNr.map((number, i) => {
                const isUnitNr = number < 10;
                const isLastNr = arrayWithNr.length - 1 === i;
                const nr = isUnitNr ? `0${number}` : number.toString();
                return isLastNr ? nr : `${nr}  .  `;
            })}
        </>
    )
}

export default NumberInTheBar;