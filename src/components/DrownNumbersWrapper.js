import BarWithNumbers from "./BarWithNumbers";

const DrownNumbersWrapper = ({drownNumbers}) => {

    return (
        <div className="drown-nr-wrapper">
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
        </div>
    );
}

export default DrownNumbersWrapper;