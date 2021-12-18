import { useState } from 'react';
import Container from './components/Container';

function App() {

  const [numbers, setNumbers] = useState([]);
  const [numbersList, setNumbersList] = useState([]);

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

  return (
    <>
      <Container
        getUniqueRandomNumber={getUniqueRandomNumber}
        numbers={numbers}
        setNumbers={setNumbers}
        numbersList={numbersList}
        setNumbersList={setNumbersList} />
    </>
  );
}

export default App;