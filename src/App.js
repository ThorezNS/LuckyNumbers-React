import { useState, useEffect } from 'react';

function App() {

    const data = {
        numbers: [],
        counter: 0
    };

    const status = {
        limitNumber: 49,
        amountOfBalls: 6
    };

    // let {counter} = data;
    const {numbers} = data;
    const {limitNumber, amountOfBalls} = status;

    const selectors = {
        ballsContainer:'.balls',
        ballsElements: '.ball',
        numbersContainer: '.results',
        generatorBtn: 'generator',
        nextBtn: 'generator next',
        hide: 'hide',
        disable: 'disabled'
    };

    const [uiNumbers, setUInumbers] = useState([]);
    const [generatorBtnClass, setGeneratorBtnClass] = useState(selectors.generatorBtn);
    const [cleanBtnClass, setCleanBtnClass] = useState(selectors.hide);
    const [nextBtnClass, setNextBtnClass] = useState(selectors.hide);
    //const [disable, setDisable] = useState(false);

    // const numbersContainer = document.querySelector(selectors.numbersContainer);
    // const generatorBtn = document.querySelector(selectors.generatorBtn);
    // const cleanBtn = document.querySelector(selectors.clean);
    // const nextBtn = document.querySelector(selectors.nextBtn);

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
        printBallNumber();
        buttons.display();
    };

    // function displayNumbersList() {
    //     counter++;
    //     putNumbersIntoList(counter);
    //     resetNumbers();
    //     generateNumbers();
    // };

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

    function printBallNumber() {
        //const number = numbers[numbers.length -1];
        //document.querySelector(`.ball_${numbers.length}`).textContent = number;
        setUInumbers(numbers)
    };

    // function putNumbersIntoList(itemNumber) {
    //     const element = `<div class="numbers"><span class="counter">${itemNumber}:</span>${numbers.join('  .  ')}</div>`;
    //     numbersContainer.insertAdjacentHTML('afterbegin', element);
    // };

    // function resetNumbers() {
    //     document.querySelectorAll(selectors.ballsElements).forEach(element => element.textContent = "-" );
    //     numbers.length = 0;
    //     buttons.disable();
    // };

    const generatorButton = {
    //     disable() {
    //         setDisable(true);
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
            <button className={ generatorBtnClass } onClick={ generateNumbers }>Generate numbers </button>
            <button className={ cleanBtnClass }>Clean all</button>
            <button className={ nextBtnClass }>Next</button>
        </div>

        <div className="results">
            {/* <div class="numbers"><span class="counter">1:</span>5 . 7 . 14 . 42 . 12 . 18</div> */}
        </div>

    </div>
  );
}

export default App;
