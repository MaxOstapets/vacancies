import Header from "@/Components/Header/Header";
import Vacancy from "@/Components/Vacancys/Vacancy/Vacancy"
import Filter from "@/Components/Filters/Filter/Filter";
import useSWR from "swr";
import { fetchVacancy } from "@/Utils/fetchVacancy";

const Main = () => {
    const url = "https://6679d66418a459f63951972e.mockapi.io/vacancies"
    const { data, error, isLoading } = useSWR(url, fetchVacancy)
    console.log(data);

    return(
        <>
            <Header />
            
            <Filter />
            
            <div className="flex justify-center items-center flex-col">
                {!isLoading && data.map(el => 
                    <Vacancy 
                        imageUrl = {el.logo}
                        companyName = {el.company}
                        positionTitle = {el.position}
                    />
                )}
            </div>
        </>
    )
}

export default Main;