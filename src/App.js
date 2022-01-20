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
import GetOccurrences from './containers/GetOccurrences';

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
    setOccurrences(GetOccurrences(numbers, drownNumbers));
    if (isLastNrShown) {
      setDisabled(false);
    }
  },[numbers]);

  return (
    <Container>
      <Sidebar occurrences={occurrences.filter((_,i) => i % 2 === 0)}/>
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
      <Sidebar occurrences={occurrences.filter((_,i) => i % 2 !== 0)}/>
    </Container>
  );
}

export default App;