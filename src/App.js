import {useState} from 'react';
//import components
import Balls from './components/Balls';

function App() {
  const [nrOfBalls, setNrOfBalls] = useState(6);
  const [numbers, setNumbers] = useState(fillWithEmptyBalls);

  function fillWithEmptyBalls() {
    const array = new Array(nrOfBalls);
    return array.fill('-');
  }

  function generateNumbers() {
    let array = [...numbers];
    const index = array.indexOf('-');
    array[index] = 'nr';
    setNumbers(array);
  }

  return (
    <div className="container">
        <h1 className="title">Lucky Lottery Numbers</h1>
        <Balls numbers={numbers}/>
        <div className="drowning">
            <button className="generator"
                    onClick={generateNumbers}>Generate numbers</button>
        </div>
    </div>
  );
}

export default App;