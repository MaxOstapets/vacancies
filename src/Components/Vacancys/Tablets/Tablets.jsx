const Tablets = ({tablets}) => {
    return(
        <ul className="flex justify-center items-center font-bold text-xs text-desaturated-dark-cyan gap-6 sm:gap-5 sm:grid sm:grid-cols-4">
            {tablets && tablets.map(el => 
                <li className="bg-light-cyan-filter-tablets p-2 flex justify-center items-center cursor-pointer hover:bg-desaturated-dark-cyan 
                hover:text-light-cyan-filter-tablets sm:w-18 sm:w-16">{el}</li>
            )}
        </ul>
    )
}

export default Tablets