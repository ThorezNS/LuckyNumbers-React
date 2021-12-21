const Buttons = ({numbers, numbersList, nrOfBalls, handleGenerateNumbers, handleCreateNumbersList, handleCleanAll}) => {

    const selectors = {
        generator: 'generator',
        disabled: 'disabled',
        clean: 'clean generator',
        next: 'next generator',
        hide: 'hide'
    }

    const {generator, disabled, clean, next, hide} = selectors;

    const isFirstBallANumber = typeof(numbers[0]) === 'number';
    const isLastBallANumber = typeof(numbers[nrOfBalls - 1]) === 'number';
    const isDisabled = isFirstBallANumber && !isLastBallANumber;

    const generatorBtnClass = !isFirstBallANumber && numbersList.length === 0  ? generator :
    (isLastBallANumber || numbersList.length > 0 ? hide : `${disabled} ${generator}`);
    const cleanBtnClass = !isLastBallANumber ? (numbersList.length > 0 ? `${disabled} ${clean}` : hide) : clean;
    const nextBtnClass = !isLastBallANumber ? (numbersList.length > 0 ? `${disabled} ${next}` : hide) : next;

    return (
        <div className="drowning">
            <button className={generatorBtnClass}
                    disabled={isDisabled}
                    onClick={handleGenerateNumbers}>Generate numbers</button>
            <button className={cleanBtnClass}
                    onClick={handleCleanAll}
                    disabled={isDisabled}>Clean all</button>
            <button className={nextBtnClass}
                    disabled={isDisabled}
                    onClick={handleCreateNumbersList}>Next</button>
        </div>
     );
}

export default Buttons;