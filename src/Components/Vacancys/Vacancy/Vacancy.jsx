import Tablets from "../Tablets/Tablets"
import GrayList from "../GrayList/GrayList";
import Updates from "../Updates/Updates";

const Vacancy = () => {
    return(
        <div className="font-sans flex justify-around items-center gap-10 w-2/3 bg-white p-5 border-l-4 border-desaturated-dark-cyan mt-6 sm:w-80 sm:flex-col sm:pt-10">
            <div className="flex justify-center items-center gap-6">
                <img src="/Images/photosnap.svg" className="sm:w-12 sm:h-12 sm:absolute sm:top-1/4 sm:left-11" alt="" />

                <div className="flex items-start flex-col gap-2"> 
                    <div className="flex justify-center items-center gap-5">
                        <p className="text-desaturated-dark-cyan font-bold sm:text-sm">Photosnap</p>
    
                        <Updates />
                    </div>

                    <p className="text-xl text-very-dark-cyan font-bold hover:text-desaturated-dark-cyan cursor-pointer sm:text-base">Senior Frontend Developer</p>

                    <GrayList />
                </div>
            </div>
            
           <Tablets />
        </div>
    )
}

export default Vacancy;