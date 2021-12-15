import {useState} from 'react';
//import components
import Ball from './components/Ball';
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
  const [numbersList, setNumbersList] = useState([]);

  function fillWithEmptyBalls() {
    const array = new Array(nrOfBalls);
    return array.fill('-');
  }

  function handleDisplayNumbersList() {
    setNumbersList((prevArray) => [numbers, ...prevArray]);
    setNumbers(fillWithEmptyBalls);
    handleGenerateNumbers();
  }

  function handleGenerateNumbers() {
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

  const isFirstBallANumber = typeof(numbers[0]) === 'number';
  const isLastBallANumber = typeof(numbers[nrOfBalls - 1]) === 'number';
  const isDisabled = isFirstBallANumber && !isLastBallANumber;

  function cleanAll() {
    setNumbers(fillWithEmptyBalls);
    setNumbersList([]);
  }

  return (
    <div className="container">
        <h1 className="title">Lucky Lottery Numbers</h1>
        <Ball numbers={numbers}/>
        <div className="drowning">
            <button className={!isFirstBallANumber ? selectors.generator : (isLastBallANumber || numbersList.length > 0 ? selectors.hide : `${selectors.disabled} ${selectors.generator}`)}
                    disabled={isDisabled}
                    onClick={handleGenerateNumbers}>Generate numbers</button>
            <button className={!isLastBallANumber ? (numbersList.length > 0 ? `${selectors.disabled} ${selectors.clean}` : selectors.hide) : selectors.clean}
                    onClick={cleanAll}
                    disabled={isDisabled}>Clean all</button>
            <button className={!isLastBallANumber ? (numbersList.length > 0 ? `${selectors.disabled} ${selectors.next}` : selectors.hide) : selectors.next}
                    disabled={isDisabled}
                    onClick={handleDisplayNumbersList}>Next</button>
        </div>

        <div className="results">
          {numbersList.map(([...numbers], index) => {
            return <div className="numbers"><span className="counter">{numbersList.length - index}:</span>{numbers.join('  .  ')}</div>
          })}
        </div>
    </div>
  );
}

export default App;