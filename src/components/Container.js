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

    function handleGenerateNumbers() {
        for (let i = 0; i < nrOfBalls; i++) {
        setTimeout(() => {
            return setNumbers(replaceCharacterWithNumber)
        }, (i + 1) * 300);
        }
    }

    function replaceCharacterWithNumber(prevArray) {
        let array = [...prevArray];
        const index = array.indexOf(emptyBallCharacter);
        array[index] = getUniqueRandomNumber(array, limitNr);
        return array;
    }

    function handleCreateNumbersList() {
        setNumbersList((prevArray) => [numbers, ...prevArray]);
        startNextDraw();
    }

    function startNextDraw() {
        setNumbers(fillArrayWithCharacter);
        handleGenerateNumbers();
    }

    function handleCleanAll() {
        setNumbers(fillArrayWithCharacter);
        setNumbersList([]);
    }

    return (
        <div className="container">
            <h1 className="header">Lucky Lottery Numbers</h1>
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
                handleCreateNumbersList={handleCreateNumbersList}
                handleCleanAll={handleCleanAll}/>
            <NumbersList
                numbersList={numbersList}
                addZeroToUnityNumber={addZeroToUnityNumber}/>
        </div>
     );
}

export default Container;