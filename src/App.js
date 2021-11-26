import { useState, useEffect } from 'react';

function App() {

    const numbers = [];
    const limitNumber = 49;
    const amountOfBalls = 6;

    const selectors = {
        generatorBtn: 'generator',
        nextBtn: 'generator next',
        hide: 'hide',
        disable: 'disabled'
    };

    const [numbersList, setNumbersList] = useState([]);
    const [uiNumbers, setUInumbers] = useState([]);
    const [generatorBtnClass, setGeneratorBtnClass] = useState(selectors.generatorBtn);
    const [cleanBtnClass, setCleanBtnClass] = useState(selectors.hide);
    const [nextBtnClass, setNextBtnClass] = useState(selectors.hide);

    useEffect(()=>{
            fillTheArray();
    },[])

    function fillTheArray() {
        let numbers = [];
        for (let i = 0; i < amountOfBalls; i++) {
            numbers.push('-');
        };
        setUInumbers(numbers);
    };

    function generateNumbers() {
        // generatorButton.disable();
        for (let i = 0; i < amountOfBalls; i++) {
            displayBallNumber();
        };
    };

    // function cleanAll() {
    //     counter = 0;
    //     numbersContainer.innerHTML = '';
    //     generatorButton.enable();
    //     generatorButton.show();
    //     buttons.hide();
    //     resetNumbers();
    // };

    function displayBallNumber() {
        const number = getRandomNumber(limitNumber);
        putNumberToData(number);
        setUInumbers(numbers);
        buttons.display();
    };

    function displayNumbersList() {
        putNumbersIntoList();
        resetNumbers();
        generateNumbers();
    };

    function getRandomNumber(limitNumber) {
       return Math.floor((Math.random() * limitNumber) + 1);
    };

    function addZeroIfUnity(number) {
        const unityNumber = number < 10;
        if (unityNumber) {
            return number = `0${number}`;
        };
        return number.toString();
    };

    function putNumberToData(number) {
        const uniqueNumber = !(numbers.includes(addZeroIfUnity(number)));
        if (uniqueNumber) {
            return numbers.push(addZeroIfUnity(number));
        };
        return  displayBallNumber();
    };

    function putNumbersIntoList() {
        const decoratedNumbers = uiNumbers.join('  .  ');
        numbersList.unshift(decoratedNumbers);
        setNumbersList(numbersList);
    };

    function resetNumbers() {
       fillTheArray();
        //buttons.disable();
    };

    const generatorButton = {
    //     disable() {
    //         generatorBtn.classList.add(selectors.disable);
    //         generatorBtn.setAttribute('disabled', '');
    //     },

    //     enable() {
    //         generatorBtn.classList.remove(selectors.disable);
    //         generatorBtn.removeAttribute('disabled', '');
    //     },

        hide() {
            setGeneratorBtnClass(selectors.hide);
        },

    //     show() {
    //         generatorBtn.classList.remove(selectors.hide);
    //     }
    };

    const buttons = {
    //     disable() {
    //         nextBtn.classList.add(selectors.disable);
    //         nextBtn.setAttribute('disabled', '');
    //         cleanBtn.classList.add(selectors.disable);
    //         cleanBtn.setAttribute('disabled', '');
    //     },

    //     enable() {
    //         nextBtn.classList.remove(selectors.disable);
    //         nextBtn.removeAttribute('disabled', '');
    //         cleanBtn.classList.remove(selectors.disable);
    //         cleanBtn.removeAttribute('disabled', '');
    //     },

    //     hide() {
    //         nextBtn.classList.add(selectors.hide);
    //         cleanBtn.classList.add(selectors.hide);
    //     },

        show() {
            setNextBtnClass(selectors.nextBtn)
            setCleanBtnClass(selectors.generatorBtn);
        },

        display() {
            const lastBall = numbers.length === amountOfBalls;
            if (lastBall) {
                generatorButton.hide();
                // buttons.enable();
                buttons.show();
            };
        }
    };

  return (
    <div className="container">

        <h1 className="title">Lucky Lottery Numbers</h1>

        <div className="balls">
            { uiNumbers.map((e, i) => {
                return <div key={ i } className='ball'>{ e }</div>
            }) }
        </div>

        <div className="drowning">
            <button className={ generatorBtnClass } onClick={ generateNumbers }>Generate numbers</button>
            <button className={ cleanBtnClass }>Clean all</button>
            <button className={ nextBtnClass } onClick={ displayNumbersList }>Next</button>
        </div>

        <div className="results">
            { numbersList.map((e , i) => {
                return <div key={ i } className="numbers">
                            <span className="counter">{ (i - numbersList.length) * -1 }:</span>
                            { e }
                        </div>
            }) }
        </div>

    </div>
  );
}

export default App;