import uniqid from 'uniqid';

const Balls = ({numbers}) => {
    return (
        <div className="balls">
            {numbers.map((number) => {
               return <div key={uniqid()} className="ball">{number}</div>
            })}
        </div>
     );
}

export default Balls;