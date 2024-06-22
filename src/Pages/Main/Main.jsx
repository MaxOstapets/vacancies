import Header from "../../Components/Header/Header";
import Vacancy from "../../Components/Vacancy/Vacancy"

const Main = () => {
    return(
        <>
            <Header />
            
            <div className="flex justify-center items-center mt-6">
                <Vacancy />
            </div>
        </>
    )
}

export default Main;