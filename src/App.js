import { useState, useEffect } from 'react';
import Balls from './components/Balls';
import NumbersList from './components/NumbersList';
import ButtonsContainer from './components/ButtonsContainer';

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

  function getUniqueRandomNumber(array, limitNumber) {
    let uniqueRandomNumber;

    function getNumber() {
        const randomNumber = Math.floor((Math.random() * limitNumber) + 1);
        getUniqueNumber(randomNumber);
      }
    getNumber();

    function getUniqueNumber(number) {
        const uniqueNumber = !(array.includes(number));
        if (uniqueNumber) {
          return uniqueRandomNumber = number;
        };
    return  getNumber();
    }
      return uniqueRandomNumber;
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
    array[index] = getUniqueRandomNumber(array, limitNr);
    return array;
}

function handleCreateNumbersList() {
    setNumbersList((prevArray) => [numbers, ...prevArray]);
    handleGenerateNumbers();
}

  return (
    <div className="container">
      <h1 className="header">Lucky Lottery Numbers</h1>
      <Balls
          numbers={numbers}
          setNumbers={setNumbers}
          numbersList={numbersList}
      />
      <ButtonsContainer
          numbers={numbers}
          numbersList={numbersList}
          setNumbersList={setNumbersList}
          handleGenerateNumbers={handleGenerateNumbers}
          handleCreateNumbersList={handleCreateNumbersList}
      />
      <NumbersList
          numbersList={numbersList}
      />
    </div>
  );
}

export default App;