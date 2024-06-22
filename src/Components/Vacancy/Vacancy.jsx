const Vacancy = () => {
    return(
        <div className="flex justify-around items-center gap-10 w-2/3 bg-white p-5 border-l-4 border-desaturated-dark-cyan">
            
            <div className="flex justify-center items-center gap-6">
                <img src="/Images/photosnap.svg" alt="" />

                <div className="flex items-start flex-col gap-2"> 
                    <div className="flex justify-center items-center gap-5">
                        <p className="text-desaturated-dark-cyan font-bold">Photosnap</p>
                    
                        <ul className="flex justify-center items-center gap-3 font-bold text-light-cyan-background text-sm">
                            <li className="bg-desaturated-dark-cyan p-2 rounded-2xl">NEW!</li>
                            <li className="bg-very-dark-cyan p-2 rounded-2xl">FEATURED</li>
                        </ul>
                    </div>

                    <p className="font-sans text-xl text-very-dark-cyan font-bold">Senior Frontend Developer</p>

                    <ul className="flex justify-center items-center text-dark-cyan text-sm gap-12">
                        <li>1d ago</li>
                        <li>Full Time</li>
                        <li>USA only</li>
                    </ul>
                </div>
            </div>

            <ul className="flex justify-center items-center font-bold text-xs text-desaturated-dark-cyan gap-6">
                <li className="bg-light-cyan-filter-tablets p-2">Frontend</li>
                <li className="bg-light-cyan-filter-tablets p-2">Senior</li>
                <li className="bg-light-cyan-filter-tablets p-2">HTML</li>
                <li className="bg-light-cyan-filter-tablets p-2">CSS</li>
                <li className="bg-light-cyan-filter-tablets p-2">JavaScript</li>
            </ul>
        </div>
    )
}

export default Vacancy;