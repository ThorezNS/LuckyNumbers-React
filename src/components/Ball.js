const Ball = ({number}) => {
    return (
        <div className="balls__item">
            {number < 10 ? `0${number}` : number.toString()}
        </div>
     );
}

export default Ball;