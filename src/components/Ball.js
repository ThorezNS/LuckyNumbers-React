const Ball = ({number, secondary}) => {

    return (
        <div className={secondary ? "occurrence-item--ball" : "balls__item"}>
            {secondary ?
                '49' :
                number ?
                    number < 10 ? `0${number}` : number.toString() :
                    '-'}
        </div>
     );
}

export default Ball;