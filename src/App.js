import { useState, useEffect } from 'react';
import Container from './components/Container';
import Sidebar from './components/Sidebar';
import CentralContainer from './components/CentralContainer';
import Header from './components/Header';
import Balls from './components/Balls';
import ButtonsContainer from './components/ButtonsContainer';
import Button from './components/Button';
import DrownNumbersWrapper from './components/DrownNumbersWrapper';
import GetUniqueRandomNumber from './containers/GetUniqueRandomNumber';

function App() {

  const limitNr = 49;
  const nrOfBalls = 6;

  const [numbers, setNumbers] = useState([]);
  const [drownNumbers, setDrownNumbers] = useState([]);
  const [occurrences, setOccurrences] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect((() =>{
    setNumbers(initialState);
  }),[drownNumbers]);

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
    setDrownNumbers([]);
  };

  const handleNextDraw = () => {
    setDisabled(true);
    setDrownNumbers((prevState) => [numbers, ...prevState]);
    handleGenerateNumbers();
  };

  const isLastNrShown = numbers[numbers.length - 1] !== 0;

  useEffect(() => {
    setOccurrences(getOccurrences());
    if (isLastNrShown) {
      setDisabled(false);
    }
  },[numbers]);

  const getOccurrences = () => {
    const countsObject = {};
    const zeroFilteredNumbers = numbers.filter(number => number !== 0);

    //Creating an array with filtered numbers and calculating the occurrences
    [].concat(...zeroFilteredNumbers, ...drownNumbers)
      .forEach((nr) => {
        countsObject[nr] = (countsObject[nr] || 0) + 1;
      });

    const countsArray = Object.entries(countsObject);
    const sortedOccurrences = countsArray.sort((a, b) => {
      return b[1] - a[1];
    });
    return sortedOccurrences;
  };




  return (
    <Container>
      <Sidebar />
      <CentralContainer>
        <Header title={'Lucky Lottery Numbers'} />
        <Balls numbers={numbers} />
        <ButtonsContainer>
            <Button
              name={'Generate numbers'}
              disabled={disabled}
              isLastNrShown={isLastNrShown}
              drownNumbers={drownNumbers}
              handleGenerateNumbers={handleGenerateNumbers}
              generateBtn
            />
            <Button
              name={'Clean all'}
              disabled={disabled}
              isLastNrShown={isLastNrShown}
              drownNumbers={drownNumbers}
              handleCleanAll={handleCleanAll}
              cleanBtn
            />
            <Button
              name={'Next'}
              disabled={disabled}
              isLastNrShown={isLastNrShown}
              drownNumbers={drownNumbers}
              handleNextDraw={handleNextDraw}
              nextBtn
            />
        </ButtonsContainer>
        <DrownNumbersWrapper drownNumbers={drownNumbers} />
      </CentralContainer>
      <Sidebar />
    </Container>
  );
}

export default App;