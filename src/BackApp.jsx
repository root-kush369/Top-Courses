import Navbar from "./components/Navbar";
import {FilterData, apiUrl} from "./data"; //filtered data is variable so had to use curly braces //this filter is just fetching data from data.jsx so i had to keep name FilterData acc to that
import Filter from "./components/Filter";
import {useEffect, useState} from "react";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
// import Card from "./components/Card"
import {toast} from "react-toastify";
function App() {
    console.log("check : ", FilterData);

    const [courses, setcourses] = useState(); //it became object later //courses became array of object by taking api data which have data
    //..in form of array of objects..
    const [FilteredDataCourse, setFilterDataCourse] = useState([FilterData[0].title]);

    const [s_pinner, setspinner] = useState(false);
    // part of point3
    useEffect(function () {
        async function fetchCourseData() {
            setspinner(true);
            try {
                let fetchedData = await fetch(apiUrl);
                let fetchedDataInJson = await fetchedData.json();
                let UseFinalApiData = fetchedDataInJson.data;
                // console.log(UseFinalApiData);
                setcourses(UseFinalApiData); //taki mai array with subscript wala khel khel sku when showing data in Cards.jsx if and else
            } catch (e) {
                toast.error($`something went wrong...`);
                // toast.error("some");
                console.log(error);
            }
            setspinner(false);
        }
        fetchCourseData();
    }, []);

    return (
        <div className="bg-[#4A4E69] min-h-[100vh] w-[100vw] overflow-hidden">
            {/* 1 */}
            <Navbar> </Navbar>

            {/*2  */}
            <Filter
                setFilterDataCourse={setFilterDataCourse}
                setcourses={setcourses}
                FilterData={FilterData}
                FilteredDataCourse={FilteredDataCourse}
            >
                {" "}
            </Filter>

            {/* 3 */}
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
