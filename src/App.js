import {useState} from 'react';
//import components
import Balls from './components/Balls';
import useUniqueRandomNr from './components/useUniqueRandomNr';

function App() {
  const selectors = {
    generator: 'generator',
    disabled: 'disabled'
};

  const nrOfBalls = 6;
  const limitNr = 49;
  const getUniqueRandomNr = useUniqueRandomNr();
  const [numbers, setNumbers] = useState(fillWithEmptyBalls);
  const [generatorBtnClass, setGeneratorBtnClass] = useState(selectors.generator);
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

  return (
    <div className="container">
        <h1 className="title">Lucky Lottery Numbers</h1>
        <Balls numbers={numbers}/>
        <div className="drowning">
            <button className={generatorBtnClass}
                    disabled={disabled}
                    onClick={handleGenerateNumbers}>Generate numbers</button>
        </div>
    </div>
  );
}

export default App;