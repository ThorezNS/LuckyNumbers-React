import './Button.css';

const Button = ({
    name,
    disabled,
    isLastNrShown,
    drownNumbers,
    generateBtn,
    cleanBtn,
    nextBtn,
    handleGenerateNumbers,
    handleCleanAll,
    handleNextDraw}) => {

    const styles = {
        generator: 'buttons__generator',
        next: 'buttons__next buttons__generator',
        disabled: 'buttons__disabled',
        hide: 'buttons__hide'
    }

    const isBtnCircle = nextBtn ? styles.next : styles.generator;
    const isBtnDisabled = disabled ? `${styles.disabled} ${isBtnCircle}` : isBtnCircle;
    const isFirstDrawFinished = isLastNrShown || drownNumbers.length;

    const generateBtnClass = isFirstDrawFinished ? styles.hide : isBtnDisabled;
    const cleanAndNextBtnClass = isFirstDrawFinished ? isBtnDisabled : styles.hide;

    return (
        <>
            <button
                disabled={disabled}
                className={
                    (generateBtn && generateBtnClass) ||
                    ((cleanBtn || nextBtn) && cleanAndNextBtnClass)}
                onClick={
                    (generateBtn && handleGenerateNumbers) ||
                    (cleanBtn && handleCleanAll) ||
                    (nextBtn && handleNextDraw)}
                >{name}
            </button>
        </>
    )
}

export default Button;