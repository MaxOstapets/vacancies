const GrayList = () => {
    const grayList = [
        "1d ago",
        "Full Time",
        "USA only"
    ]

    return(
        <ul className="flex justify-center items-center text-dark-cyan text-sm gap-12">
            {grayList && grayList.map(el =><li>{el}</li>)}
        </ul>
    )
}

export default GrayList;