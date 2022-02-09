import Ball from "../../atoms/Ball/Ball";
import './Balls.css';

const Balls = ({numbers}) => {

    return (
        <div className="balls">
            {numbers.map((number, index) => {
               return <Ball number={number} key={index}/>
            })}
        </div>
    );
}

export default Balls;