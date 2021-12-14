import {useEffect, useState} from 'react';
//import components
import Balls from './components/Balls';
import useUniqueRandomNr from './components/useUniqueRandomNr';

function App() {
  const selectors = {
    generator: 'generator',
    disabled: 'disabled',
    clean: 'clean generator',
    next: 'next generator',
    hide: 'hide'
}

  const nrOfBalls = 6;
  const limitNr = 49;
  const getUniqueRandomNr = useUniqueRandomNr();
  const [numbers, setNumbers] = useState(fillWithEmptyBalls);
  const [generatorBtnClass, setGeneratorBtnClass] = useState(selectors.generator);
  const [cleanBtnClass, setCleanBtnClass] = useState(`${selectors.clean} ${selectors.hide}`);
  const [nextBtnClass, setNextBtnClass] = useState(`${selectors.next} ${selectors.hide}`);
  const [disabled, setDisabled] = useState(false);

  function fillWithEmptyBalls() {
    const array = new Array(nrOfBalls);
    return array.fill('-');
  }

  function handleGenerateNumbers() {
    setGeneratorBtnClass(`${selectors.disabled} ${selectors.generator}`);
    setDisabled(true);
    for (let i = 0; i < nrOfBalls; i++) {
      setTimeout(() => {
        return setNumbers(displayBallNumber)
      }, (i + 1) * 300);
    }
  }

  function displayBallNumber(prevArray) {
    let array = [...prevArray];
    const index = array.indexOf('-');
    array[index] = getUniqueRandomNr(array, limitNr);
    return array;
  }

  useEffect(() => {
    swapButtons();
  },[numbers])

  function swapButtons() {
    const isLastBallANumber = typeof(numbers[nrOfBalls - 1]) === 'number';
    if (isLastBallANumber) {
      setCleanBtnClass(`${selectors.generator} ${selectors.clean}`);
      setNextBtnClass(`${selectors.generator} ${selectors.next}`);
      setGeneratorBtnClass(selectors.hide);
    }
  }

  return (
    <div className="container">
        <h1 className="title">Lucky Lottery Numbers</h1>
        <Balls numbers={numbers}/>
        <div className="drowning">
            <button className={generatorBtnClass}
                    disabled={disabled}
                    onClick={handleGenerateNumbers}>Generate numbers</button>
            <button className={cleanBtnClass}>Clean all</button>
            <button className={nextBtnClass}>Next</button>
        </div>
    </div>
  );
}

export default App;