function Filter(prop)
{
    const FilterData = prop.FilterData;         
    const setFilterDasetFilterDataCourse= prop.setFilterDataCourse;
    const FilteredDataCourse=prop.FilteredDataCourse;
    function ClickHandler(formalP)
    {
        setFilterDasetFilterDataCourse(formalP);
        console.log("ch: ",formalP);
    }


    return(
        <div className="flex flex-row justify-center items-center space-x-3 fixed top-20 z-20">
            {

            FilterData.map (function (formalpMattedWithFilteredDataToFetchValue) {
                    return (
                        
                        
                        <button onClick={function ()  {
                            ClickHandler(formalpMattedWithFilteredDataToFetchValue.title);
                        } }
                         className={` scale-100 cursor-pointer text-lg , px-2 , py-1 , rounded-md , font-semibold  bg-black , hover:bg-opacity-50  border-2  hover:scale-110 transition-all duration-300 
                             
                                ${ FilteredDataCourse===formalpMattedWithFilteredDataToFetchValue.title ? "bg-opacity-10  border-white text-red-400": "text-gray-400" }
                             `}  
                         key={formalpMattedWithFilteredDataToFetchValue.id  }
                         
                         >
                            
                            
                            
                            {formalpMattedWithFilteredDataToFetchValue.title }
                            
                            
                            
                            </button>
                    )
            })
            }
        </div>
    );
}

export default Filter