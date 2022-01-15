import NumbersListItem from "./NumbersListItem";

const NumbersList = ({numbersList}) => {

    return (
        <div className="numbers-list">
            {numbersList.map((numbers, i) => {
                const counter = numbersList.length - i;
                return <NumbersListItem
                    numbers={numbers}
                    counter={counter}
                    key={i}
                />
            })}
        </div>
    );
}

export default NumbersList;