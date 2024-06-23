import Header from "@/Components/Header/Header";
import Vacancy from "@/Components/Vacancys/Vacancy/Vacancy"
import Filter from "@/Components/Filters/Filter/Filter";

const Main = () => {
    return(
        <>
            <Header />
            
            <Filter />

            <div className="flex justify-center items-center mt-6">
                <Vacancy />
            </div>
        </>
    )
}

export default Main;