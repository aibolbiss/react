const Cars = (props) => {
    return (
        <div className="cars">
            <h1>{props.mark}</h1>
            <h1>{props.model}</h1>
            <h1>{props.year}</h1>
            <hr />
        </div>
    )
}

export default Cars