import {useState} from 'react';
//import components
import Balls from './components/Balls';

function App() {
  const nrOfBalls = 6;
  const [numbers, setNumbers] = useState(fillWithEmptyBalls);

  function fillWithEmptyBalls() {
    const array = new Array(nrOfBalls);
    return array.fill('-');
  }

  function generateNumbers() {
    //generatorButton.disable();
    for (let i = 0; i < nrOfBalls; i++) {
      setTimeout(() => {
        return setNumbers(displayBallNumber)
      }, (i + 1) * 300);
    }
  }

  function displayBallNumber(prevArray) {
    let array = [...prevArray];
    const index = array.indexOf('-');
    array[index] = 'nr';
    return array;
  }

  return (
    <div className="container">
        <h1 className="title">Lucky Lottery Numbers</h1>
        <Balls numbers={numbers}/>
        <div className="drowning">
            <button className="generator"
                    onClick={() => generateNumbers(numbers)}>Generate numbers</button>
        </div>
    </div>
  );
}

export default App;