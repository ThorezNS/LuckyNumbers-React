const NumbersList = ({numbersList}) => {

    function decorateNumbers(array, character) {
        const zeroDecoratedArray =  array.map((number) => {
            return number < 10 ? `0${number}` : number.toString();
       })
       return zeroDecoratedArray.join(character);
    }

    return (
        <div className="numbers-list">
            {numbersList.map((numbers, index) => {
                return <div key={index}
                            className="numbers-list__item">
                                <span className="numbers-list__item--counter">{numbersList.length - index}:</span>
                            {decorateNumbers(numbers, '  .  ')}
                        </div>
            })}
        </div>
    );
}

export default NumbersList;