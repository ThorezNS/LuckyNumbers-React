const Balls = ({numbers}) => {

    return (
        <div className="balls">
            {numbers.map((number, index) => {
               return <div key={index} className="balls__item">{number < 10 ? `0${number}` : number.toString()}</div>
            })}
        </div>
    );
}

export default Balls;