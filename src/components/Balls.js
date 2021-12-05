const Balls = ({numbers}) => {
    return (
        <div className="balls">
            {numbers.map((number, index) => {
               return <div key={index} className="ball">{number}</div>
            })}
        </div>
     );
}

export default Balls;