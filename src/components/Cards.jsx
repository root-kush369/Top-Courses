import {useState} from "react";
import Card from "./Card";

function Cards(prop) {
    const TheCourseData = prop.TheCourses;
    const setFilterData = prop.setFilterData;
    const FilteredDataCourse = prop.FilteredDataCourse;

    const [likescollector, setlikescollector] = useState([]);

    if (!TheCourseData) return [];

    console.log("FilteredData: ", FilteredDataCourse);
    function getcourses() {
        if (FilteredDataCourse == "All") {
            let allcourse = [];
            Object.values(TheCourseData).forEach(function (formalP) {
                formalP.forEach(function (subformalp) {
                    console.log(subformalp);
                    allcourse.push(subformalp);
                });
            });
            return allcourse;
        } else {
            return TheCourseData[FilteredDataCourse];
        }
    }

    return (
        <div className="cardsall w-[1080px] mx-auto grid grid-cols-3  auto-rows-auto bg-[#4A4E69]  overflow-x-hidden gap-3.5 mt-9 relative top-30 z-10">

            {getcourses().map(function (formalpCardzData, index) {
                return (
                    <Card
                        key={index}
                        formalpCardzData={formalpCardzData}
                        likescollector={likescollector}
                        setlikescollector={setlikescollector}
                    />
                );
            })}
        </div>
    );
}
export default Cards;
