const Buttons = ({numbers, numbersList, nrOfBalls, handleGenerateNumbers, handleCreateNumbersList, handleCleanAll}) => {

    const selectors = {
        generator: 'generator',
        disabled: 'disabled',
        clean: 'clean generator',
        next: 'next generator',
        hide: 'hide'
    }

    const isFirstBallANumber = typeof(numbers[0]) === 'number';
    const isLastBallANumber = typeof(numbers[nrOfBalls - 1]) === 'number';
    const isDisabled = isFirstBallANumber && !isLastBallANumber;

    return (
        <div className="drowning">
            <button className={!isFirstBallANumber ? selectors.generator : (isLastBallANumber || numbersList.length > 0 ? selectors.hide : `${selectors.disabled} ${selectors.generator}`)}
                    disabled={isDisabled}
                    onClick={handleGenerateNumbers}>Generate numbers</button>
            <button className={!isLastBallANumber ? (numbersList.length > 0 ? `${selectors.disabled} ${selectors.clean}` : selectors.hide) : selectors.clean}
                    onClick={handleCleanAll}
                    disabled={isDisabled}>Clean all</button>
            <button className={!isLastBallANumber ? (numbersList.length > 0 ? `${selectors.disabled} ${selectors.next}` : selectors.hide) : selectors.next}
                    disabled={isDisabled}
                    onClick={handleCreateNumbersList}>Next</button>
        </div>
     );
}

export default Buttons;