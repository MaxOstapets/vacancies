import Header from "../../Components/Header/Header";
import Vacancy from "../../Components/Vacancy/Vacancy"
import Filters from "../../Components/Filters/Filters/Filters";

const Main = () => {
    return(
        <>
            <Header />
            
            <Filters />

            <div className="flex justify-center items-center mt-6">
                <Vacancy />
            </div>
        </>
    )
}

export default Main;