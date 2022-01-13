import { useState, useEffect } from 'react';
import Balls from './components/Balls';
import NumbersList from './components/NumbersList';
import ButtonsContainer from './components/ButtonsContainer';
import GetUniqueRandomNumber from './containers/GetUniqueRandomNumber';

function App() {

  const limitNr = 49;
  const nrOfBalls = 6;

  const [numbers, setNumbers] = useState([]);
  const [numbersList, setNumbersList] = useState([]);

  useEffect((() =>{
    setNumbers(initialState);
  }),[numbersList]);

  const initialState = () => {
    return new Array(nrOfBalls).fill(0);
  };

  const handleGenerateNumbers = () => {
    numbers.forEach((_, i) => {
      setTimeout(() => setNumbers(randomNumbers), (i + 1) * 300);
    });
  };

  const randomNumbers = (prevState) => {
    let array = [...prevState];
    const index = array.indexOf(0);
    array[index] = GetUniqueRandomNumber(array, limitNr);
    return array;
  };

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