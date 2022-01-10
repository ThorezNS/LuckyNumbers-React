import { useState, useEffect } from 'react';
import Balls from './components/Balls';
import NumbersList from './components/NumbersList';
import ButtonsContainer from './components/ButtonsContainer';
import UniqueRandomNumber from './containers/UniqueRandomNumber';

function App() {

  const limitNr = 49;
  const nrOfBalls = 6;

  const [numbers, setNumbers] = useState([]);
  const [numbersList, setNumbersList] = useState([]);

  useEffect((() =>{
    setNumbers(initialNumbersState);
  }),[numbersList])

  function initialNumbersState() {
    return new Array(nrOfBalls).fill(0);
  }

  function handleGenerateNumbers() {
    for (let i = 0; i < nrOfBalls; i++) {
      setTimeout(() => {
          return setNumbers(replaceCharacterWithNumber)
      }, (i + 1) * 300);
    }
  }

  function replaceCharacterWithNumber(prevArray) {
    let array = [...prevArray];
    const index = array.indexOf(0);
    array[index] = UniqueRandomNumber(array, limitNr);
    return array;
  }

  return (
    <div className="container">
      <h1 className="header">Lucky Lottery Numbers</h1>
      <Balls
          numbers={numbers}
      />
      <ButtonsContainer
          numbers={numbers}
          numbersList={numbersList}
          setNumbersList={setNumbersList}
          handleGenerateNumbers={handleGenerateNumbers}
      />
      <NumbersList
          numbersList={numbersList}
      />
    </div>
  );
}

export default App;