const ButtonsContainer = ({numbers, numbersList, setNumbersList, handleGenerateNumbers}) => {

    const selectors = {
        generator: 'buttons__generator',
        next: 'buttons__next buttons__generator',
        disabled: 'buttons__disabled',
        hide: 'buttons__hide'
    }

    const {generator, next, disabled, hide} = selectors;

    const isFirstBallANumber = numbers[0] !== 0;
    const isLastBallANumber = numbers[numbers.length - 1] !== 0;
    const isDisabled = isFirstBallANumber && !isLastBallANumber;

    const generatorBtnClass = !isFirstBallANumber && numbersList.length === 0  ? generator :
    (isLastBallANumber || numbersList.length > 0 ? hide : `${disabled} ${generator}`);
    const cleanBtnClass = !isLastBallANumber ? (numbersList.length > 0 ? `${disabled} ${generator}` : hide) : generator;
    const nextBtnClass = !isLastBallANumber ? (numbersList.length > 0 ? `${disabled} ${next}` : hide) : next;

    return (
        <div className="buttons">
            <button className={generatorBtnClass}
                    disabled={isDisabled}
                    onClick={handleGenerateNumbers}
            >Generate numbers
            </button>
            <button className={cleanBtnClass}
                    onClick={() => setNumbersList([])}
                    disabled={isDisabled}
            >Clean all
            </button>
            <button className={nextBtnClass}
                    disabled={isDisabled}
                    onClick={() => {
                        setNumbersList((prevArray) => [numbers, ...prevArray]);
                        handleGenerateNumbers();
                    }}
            >Next
            </button>
        </div>
     );
}

export default ButtonsContainer;