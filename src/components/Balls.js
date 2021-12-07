import uniqueId from 'uniqid';

const Balls = ({numbers}) => {
    return (
        <div className="balls">
            {numbers.map((number) => {
               return <div key={uniqueId()} className="ball">{number}</div>
            })}
        </div>
     );
}

export default Balls;