import { useEffect } from "react";

const Balls = ({numbers, setNumbers, addZeroToUnityNumber, fillArrayWithCharacter}) => {

    useEffect((() =>{
        setNumbers(fillArrayWithCharacter);
    }),[])

    return (
        <div className="balls">
            {numbers.map((number, index) => {
               return <div key={index} className="balls__item">{addZeroToUnityNumber(number)}</div>
            })}
        </div>
    );
}

export default Balls;