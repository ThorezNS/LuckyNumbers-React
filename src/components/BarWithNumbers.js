import BarCounter from "./BarCounter";
import NumberInTheBar from "./NumberInTheBar";

const BarWithNumbers = ({drownNrIndex, arrayWithNr, drownNumbers}) => {

    return (
        <div className="drown-nr-wrapper__bar">
            <BarCounter drownNumbers={drownNumbers} drownNrIndex={drownNrIndex} />
            <NumberInTheBar arrayWithNr={arrayWithNr} />
        </div>
    )
}

export default BarWithNumbers;
