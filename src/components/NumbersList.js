const NumbersList = ({numbersList, addZeroToUnityNumber}) => {

    function decorateNumbers(array, character) {
        const zeroDecoratedArray =  array.map((number) => {
            return addZeroToUnityNumber(number);
       })
       return zeroDecoratedArray.join(character);
    }

    return (
        <div className="results">
            {numbersList.map((numbers, index) => {
                return <div key={index}
                            className="numbers">
                                <span className="counter">{numbersList.length - index}:</span>
                            {decorateNumbers(numbers, '  .  ')}
                        </div>
            })}
        </div>
    );
}

export default NumbersList;