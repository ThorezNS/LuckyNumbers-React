import Ball from './Ball';
import NumbersList from './NumbersList';
import Buttons from './Buttons';

const Container = ({numbers, setNumbers, numbersList, setNumbersList, getUniqueRandomNumber}) => {

    const nrOfBalls = 6;
    const limitNr = 49;
    const emptyBallCharacter = '-';

    function addZeroToUnityNumber(number) {
        const unityNumber = number < 10;
            if (unityNumber) {
                return number = `0${number}`;
            };
        return number.toString();
    }

    function fillArrayWithCharacter() {
        const array = new Array(nrOfBalls);
        return array.fill(emptyBallCharacter);
    }

    function handleDisplayNumbersList() {
        setNumbersList((prevArray) => [numbers, ...prevArray]);
        setNumbers(fillArrayWithCharacter);
        handleGenerateNumbers();
    }

    function handleGenerateNumbers() {
        for (let i = 0; i < nrOfBalls; i++) {
        setTimeout(() => {
            return setNumbers(displayBallNumber)
        }, (i + 1) * 300);
        }
    }

    function displayBallNumber(prevArray) {
        let array = [...prevArray];
        const index = array.indexOf('-');
        array[index] = getUniqueRandomNumber(array, limitNr);
        return array;
    }

    function handleCleanAll() {
        setNumbers(fillArrayWithCharacter);
        setNumbersList([]);
    }

    return (
        <div className="container">
            <h1 className="title">Lucky Lottery Numbers</h1>
            <Ball
                numbers={numbers}
                setNumbers={setNumbers}
                numbersList={numbersList}
                addZeroToUnityNumber={addZeroToUnityNumber}
                fillArrayWithCharacter={fillArrayWithCharacter}/>
            <Buttons
                numbers={numbers}
                numbersList={numbersList}
                nrOfBalls={nrOfBalls}
                handleGenerateNumbers={handleGenerateNumbers}
                handleDisplayNumbersList={handleDisplayNumbersList}
                handleCleanAll={handleCleanAll}/>
            <NumbersList
                numbersList={numbersList}
                addZeroToUnityNumber={addZeroToUnityNumber}/>
        </div>
     );
}

export default Container;