import Balls from './Balls';
import NumbersList from './NumbersList';
import ButtonsContainer from './ButtonsContainer';

const Container = ({numbers, setNumbers, numbersList, setNumbersList, handleGenerateNumbers, handleCreateNumbersList}) => {
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

export default Container;