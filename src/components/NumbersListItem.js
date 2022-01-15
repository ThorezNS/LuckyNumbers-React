const NumbersListItem = ({numbers, counter}) => {

    const getDecoratedNumbers = () => {
        const zeroAddedNumbers =  numbers.map((number) => {
            return number < 10 ? `0${number}` : number.toString();
       });
       return zeroAddedNumbers.join('  .  ');
    };

    return (
        <div className="numbers-list__item">
            <span className="numbers-list__item--counter">
                {counter}:
            </span>
            {getDecoratedNumbers()}
        </div>
    )
}

export default NumbersListItem;
