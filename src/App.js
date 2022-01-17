import { useState, useEffect } from 'react';
import Container from './components/Container';
import Header from './components/Header';
import Balls from './components/Balls';
import ButtonsContainer from './components/ButtonsContainer';
import Button from './components/Button';
import NumbersList from './components/NumbersList';
import GetUniqueRandomNumber from './containers/GetUniqueRandomNumber';

function App() {

  const limitNr = 49;
  const nrOfBalls = 6;

  const [numbers, setNumbers] = useState([]);
  const [numbersList, setNumbersList] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect((() =>{
    setNumbers(initialState);
  }),[numbersList]);

  const initialState = () => {
    return new Array(nrOfBalls).fill(0);
  };

  const handleGenerateNumbers = () => {
    setDisabled(true);
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

  const handleCleanAll = () => {
    setNumbersList([]);
  };

  const handleNextDraw = () => {
    setDisabled(true);
    setNumbersList((prevState) => [numbers, ...prevState]);
    handleGenerateNumbers();
  };

  const isLastNrShown = numbers[numbers.length - 1] !== 0;

  useEffect(() => {
    if (isLastNrShown) {
      setDisabled(false);
    }
  },[numbers]);

  return (
    <Container>
      <Header title={'Lucky Lottery Numbers'} />
      <Balls numbers={numbers} />
      <ButtonsContainer>
          <Button
            name={'Generate numbers'}
            disabled={disabled}
            isLastNrShown={isLastNrShown}
            numbersList={numbersList}
            handleGenerateNumbers={handleGenerateNumbers}
            generateBtn
          />
          <Button
            name={'Clean all'}
            disabled={disabled}
            isLastNrShown={isLastNrShown}
            numbersList={numbersList}
            handleCleanAll={handleCleanAll}
            cleanBtn
          />
          <Button
            name={'Next'}
            disabled={disabled}
            isLastNrShown={isLastNrShown}
            numbersList={numbersList}
            handleNextDraw={handleNextDraw}
            nextBtn
          />
      </ButtonsContainer>
      <NumbersList numbersList={numbersList} />
    </Container>
  );
}

export default App;