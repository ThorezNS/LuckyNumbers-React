import { useState, useEffect } from 'react';
import Balls from './components/Balls';
import NumbersList from './components/NumbersList';
import ButtonsContainer from './components/ButtonsContainer';
import UniqueRandomNumber from './containers/UniqueRandomNumber';

function App() {

  const limitNr = 49;
  const nrOfBalls = 6;
  const emptyBallCharacter = '-';

  const [numbers, setNumbers] = useState([]);
  const [numbersList, setNumbersList] = useState([]);

  useEffect((() =>{
    setNumbers(fillArrayWithCharacter);
  }),[numbersList])

  function fillArrayWithCharacter() {
    const array = new Array(nrOfBalls);
    return array.fill(emptyBallCharacter);
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
      const index = array.indexOf(emptyBallCharacter);
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