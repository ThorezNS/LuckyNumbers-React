const BarCounter = ({drownNumbers, drownNrIndex}) => {

    return (
        <div>
            <span className="drown-nr-wrapper__bar--counter">
                {drownNumbers.length - drownNrIndex}:
            </span>
        </div>
    )
}

export default BarCounter;
