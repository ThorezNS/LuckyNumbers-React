import uniqueId from 'uniqid';

const Balls = ({numbers}) => {
    function addZeroToUnityNr(number) {
        const unityNumber = number < 10;
        if (unityNumber) {
            return number = `0${number}`;
        };
        return number.toString();
    };
    return (
        <div className="balls">
            {numbers.map((number) => {
               return <div key={uniqueId()} className="ball">{addZeroToUnityNr(number)}</div>
            })}
        </div>
     );
}

export default Balls;