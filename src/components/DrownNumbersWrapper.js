import BarWithNumbers from "./BarWithNumbers";

const DrownNumbersWrapper = ({drownNumbers}) => {

    return (
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
        </ul>
    );
}

export default DrownNumbersWrapper;