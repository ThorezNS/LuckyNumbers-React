const Buttons = ({numbers, numbersList, nrOfBalls, handleGenerateNumbers, handleCreateNumbersList, handleCleanAll}) => {

    const selectors = {
        generator: 'buttons__generator',
        next: 'buttons__next buttons__generator',
        disabled: 'buttons__disabled',
        hide: 'buttons__hide'
    }

    const {generator, next, disabled, hide} = selectors;

    const isFirstBallANumber = typeof(numbers[0]) === 'number';
    const isLastBallANumber = typeof(numbers[nrOfBalls - 1]) === 'number';
    const isDisabled = isFirstBallANumber && !isLastBallANumber;

    const generatorBtnClass = !isFirstBallANumber && numbersList.length === 0  ? generator :
    (isLastBallANumber || numbersList.length > 0 ? hide : `${disabled} ${generator}`);
    const cleanBtnClass = !isLastBallANumber ? (numbersList.length > 0 ? `${disabled} ${generator}` : hide) : generator;
    const nextBtnClass = !isLastBallANumber ? (numbersList.length > 0 ? `${disabled} ${next}` : hide) : next;

    return (
        <div className="buttons">
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