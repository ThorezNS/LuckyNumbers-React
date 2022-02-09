import BarWithNumbers from "../BarWithNumbers/BarWithNumbers";
import './DrownNumbersWrapper.css';

const DrownNumbersWrapper = ({drownNumbers, isListShown}) => {

    return (
        <>
            {isListShown &&
            <ul className="drown-nr-wrapper">
                {drownNumbers.map((arrayWithNr, drownNrIndex) => {
                    return (
                        <BarWithNumbers
                            key={drownNrIndex}
                            arrayWithNr={arrayWithNr}
                            drownNrIndex={drownNrIndex}
                            drownNumbers={drownNumbers}
                        />
                    );
                })}
            </ul>}
        </>
    );
}

export default DrownNumbersWrapper;