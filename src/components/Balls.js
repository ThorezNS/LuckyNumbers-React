import Ball from "./Ball";

const Balls = ({numbers}) => {

    return (
        <div className="balls">
            {numbers.map((number, index) =>
                <Ball number={number} key={index}/>
            )}
        </div>
    );
}

export default Balls;