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

  return (
    <div className="container">
        <h1 className="title">Lucky Lottery Numbers</h1>
        <Balls numbers={numbers}/>
    </div>
  );
}

export default App;