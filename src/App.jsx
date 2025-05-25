import Navbar from "./components/Navbar";
import {FilterData, apiUrl} from "./data";
import Filter from "./components/Filter";
import {useEffect, useState} from "react";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import {toast} from "react-toastify";
function App() {
    console.log("check : ", FilterData);

    const [courses, setcourses] = useState();
    const [FilteredDataCourse, setFilterDataCourse] = useState([FilterData[0].title]);

    const [s_pinner, setspinner] = useState(false);
    useEffect(function () {
        async function fetchCourseData() {
            setspinner(true);
            try {
                let fetchedData = await fetch(apiUrl);
                let fetchedDataInJson = await fetchedData.json();
                let UseFinalApiData = fetchedDataInJson.data;
                setcourses(UseFinalApiData);
            } catch (e) {
                toast.error($`something went wrong...`);
                console.log(error);
            }
            setspinner(false);
        }
        fetchCourseData();
    }, []);

    return (
        <div className="bg-[#4A4E69] min-h-[100vh] w-[100vw] overflow-hidden flex flex-col justify-center items-center">
            <Navbar> </Navbar>

            <Filter
                setFilterDataCourse={setFilterDataCourse}
                setcourses={setcourses}
                FilterData={FilterData}
                FilteredDataCourse={FilteredDataCourse}
            >
                {" "}
            </Filter>

            {s_pinner ? (
                <Spinner />
            ) : (
                <Cards
                    FilteredDataCourse={FilteredDataCourse}
                    setFilterDataCourse={setFilterDataCourse}
                    setcourses={setcourses}
                    TheCourses={courses}
                ></Cards>
            )}
        </div>
    );
}
export default App;
