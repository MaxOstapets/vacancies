const Tablets = () => {
    const tablets = [
        "Frontend",
        "Senior",
        "HTML",
        "CSS",
        "JavaScript"
    ]
    
    return(
        <ul className="flex justify-center items-center font-bold text-xs text-desaturated-dark-cyan gap-6">
            {tablets && tablets.map(el => 
                <li className="bg-light-cyan-filter-tablets p-2 cursor-pointer hover:bg-desaturated-dark-cyan hover:text-light-cyan-filter-tablets">{el}</li>
            )}
        </ul>
    )
}

export default Tablets