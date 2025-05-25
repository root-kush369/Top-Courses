function Filter(prop)
{
    const FilterData = prop.FilterData;         
    // const setcourses= prop.setcourses;
    const setFilterDasetFilterDataCourse= prop.setFilterDataCourse;
    const FilteredDataCourse=prop.FilteredDataCourse;
    function ClickHandler(formalP)
    {
        setFilterDasetFilterDataCourse(formalP); //its variable is FilteredDataCourse
        console.log("ch: ",formalP);
    }


    return(
        <div className="flex flex-row justify-center items-center space-x-3">
            {

            FilterData.map (function (formalpMattedWithFilteredDataToFetchValue) {
                    return (
                        // <div className="bg-red-200">  //hr ek ke leeye div bnra ye
                        
                        
                        <button onClick={function ()  { //so mai ek dm se na bheju just call kru yaa parameter ke time muje predicate use krna hota h
                            ClickHandler(formalpMattedWithFilteredDataToFetchValue.title);
                        } }
                         className={` scale-100 cursor-pointer text-lg , px-2 , py-1 , rounded-md , font-semibold  bg-black , hover:bg-opacity-50  border-2  hover:scale-110 transition-all duration-300 
                             
                                ${ FilteredDataCourse===formalpMattedWithFilteredDataToFetchValue.title ? "bg-opacity-10  border-white text-red-400": "text-gray-400" }
                             `}  
                         key={formalpMattedWithFilteredDataToFetchValue.id  }
                         
                         >
                            
                            
                            
                            {formalpMattedWithFilteredDataToFetchValue.title }
                            
                            
                            
                            </button>
                        // /</div>
                    )
            })
            }
        </div>
    );
}

export default Filter