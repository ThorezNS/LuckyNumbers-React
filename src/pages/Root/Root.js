import { useState, useEffect } from 'react';
import Container from '../../components/templates/Container/Container';
import Sidebar from '../../components/organisms/Sidebar/Sidebar';
import CentralContainer from '../../components/organisms/CentralContainer/CentralContainer';
import Header from '../../components/atoms/Header/Header';
import Balls from '../../components/molecules/Balls/Balls';
import ButtonsContainer from '../../components/molecules/ButtonsContainer/ButtonsContainer';
import Button from '../../components/atoms/Button/Button';
import ToggleListButton from '../../components/atoms/ToggleListButton/ToggleListButton';
import DrownNumbersWrapper from '../../components/molecules/DrownNumbersWrapper/DrownNumbersWrapper';
import GetUniqueRandomNumber from '../../containers/GetUniqueRandomNumber';
import GetOccurrences from '../../containers/GetOccurrences';

function Root() {
  const [numbers, setNumbers] = useState([]);
  const [drownNumbers, setDrownNumbers] = useState([]);
  const [occurrences, setOccurrences] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [isListShown, setIsListShown] = useState(true);

  const isLastNrShown = numbers[numbers.length - 1] !== 0;
  const isFirstDrawFinished = isLastNrShown || drownNumbers.length;

  const occurrencesWithAnEvenIndex = occurrences.filter((_, i) => i % 2 === 0);
  const occurrencesWithAnOddIndex = occurrences.filter((_, i) => i % 2 !== 0);

  const limitNr = 49;
  const nrOfBalls = 6;

  useEffect(() => {
    let abortController = new AbortController();
    setNumbers(initialState);
    return () => {
      abortController.abort();
    };
  }, [drownNumbers]);

  useEffect(() => {
    let abortController = new AbortController();
    setOccurrences(GetOccurrences(numbers, drownNumbers));
    if (isLastNrShown) {
      setDisabled(false);
    }
    return () => {
      abortController.abort();
    };
  }, [numbers]);

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
    setIsListShown(true);
  };

  const handleNextDraw = () => {
    setDisabled(true);
    setDrownNumbers((prevState) => [numbers, ...prevState]);
    handleGenerateNumbers();
  };

  const handleToggleList = () => {
    setIsListShown(!isListShown);
  };

  return (
    <Container>
      <Sidebar occurrences={occurrencesWithAnEvenIndex} />
      <CentralContainer>
        <Header title={'Lucky Lottery Numbers'} />
        <Balls numbers={numbers} />
        <ButtonsContainer>
          <Button
            name={'Generate numbers'}
            disabled={disabled}
            isFirstDrawFinished={isFirstDrawFinished}
            handleGenerateNumbers={handleGenerateNumbers}
            generateBtn
          />
          <Button
            name={'Clean all'}
            disabled={disabled}
            isFirstDrawFinished={isFirstDrawFinished}
            handleCleanAll={handleCleanAll}
            cleanBtn
          />
          <Button
            name={'Next'}
            disabled={disabled}
            isFirstDrawFinished={isFirstDrawFinished}
            handleNextDraw={handleNextDraw}
            nextBtn
          />
          <ToggleListButton
            drownNumbers={drownNumbers}
            handleToggleList={handleToggleList}
            isListShown={isListShown}
          />
        </ButtonsContainer>
        <DrownNumbersWrapper
          drownNumbers={drownNumbers}
          isListShown={isListShown}
        />
      </CentralContainer>
      <Sidebar occurrences={occurrencesWithAnOddIndex} />
    </Container>
  );
}

export default Root;
