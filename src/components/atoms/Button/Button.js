import './Button.css';

const Button = ({
  name,
  disabled,
  isFirstDrawFinished,
  generateBtn,
  cleanBtn,
  nextBtn,
  handleGenerateNumbers,
  handleCleanAll,
  handleNextDraw,
}) => {
  const styles = {
    generator: 'buttons__generator',
    next: 'buttons__next buttons__generator',
    disabled: 'buttons__disabled',
  };

  const isBtnCircle = nextBtn ? styles.next : styles.generator;
  const isBtnDisabled = disabled
    ? `${styles.disabled} ${isBtnCircle}`
    : isBtnCircle;

  const isCleanAndNextBtnHidden =
    !isFirstDrawFinished && (cleanBtn || nextBtn) ? true : false;
  const hidden =
    isFirstDrawFinished && generateBtn ? true : isCleanAndNextBtnHidden;

  return (
    <>
      <button
        disabled={disabled}
        hidden={hidden}
        className={
          (generateBtn && isBtnDisabled) ||
          ((cleanBtn || nextBtn) && isBtnDisabled)
        }
        onClick={
          (generateBtn && handleGenerateNumbers) ||
          (cleanBtn && handleCleanAll) ||
          (nextBtn && handleNextDraw)
        }
      >
        {name}
      </button>
    </>
  );
};

export default Button;
