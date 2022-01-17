import NumberItem from "./NumberItem";

const NumbersList = ({numbersList}) => {

    return (
        <div className="numbers-list">
            {numbersList.map((numbers, i) => {
                const counter = numbersList.length - i;
                return (
                    <div key={i} className="numbers-list__item">
                        <span className="numbers-list__item--counter">
                            {counter}:
                        </span>
                        <NumberItem numbers={numbers} />
                    </div>
                );
            })}
        </div>
    );
}

export default NumbersList;