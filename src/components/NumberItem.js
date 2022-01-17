const NumberItem = ({numbers}) => {

    return (
        <>
            {numbers.map((number, i) => {
                const isUnitNr = number < 10;
                const isLastNr = numbers.length - 1 === i;
                const nr = isUnitNr ? `0${number}` : number.toString();
                return isLastNr ? nr : `${nr}  .  `;
            })}
        </>
    )
}

export default NumberItem;