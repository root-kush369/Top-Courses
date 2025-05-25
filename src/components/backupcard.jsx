import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import {toast} from "react-toastify";
function Card(prop) {
    //         //very important
    //         Is It True? for @11x
    // Yes, your understanding is correct:

    // You can't directly assign to likescollector in the component where it's a state variable because it's managed by React's state.
    // As a prop, likescollector is just an array, so you can manipulate it in the child component, but direct mutations won't affect the parent's state unless you use the state updater function.
    // If you have a specific code snippet or behavior you're confused about, share it, and I can provide a more tailored explanation!
    const formalpCardzData = prop.formalpCardzData;
    const likescollector = prop.likescollector;
    const setlikescollector = prop.setlikescollector;

    function clickHandler() {
        //means setlikescollection ke andr function  as predicate leekh kr mai usko as array lekr mai further uspe logic lgara hu

        // ye if is traah dekh kush ke ye specific value nahi balki sbke leeye dekhrhaa in array
        //bcoz clickhandler kuch nahi bhej rha h as parameter ..//it means given likescollector array mai koe b id jo liked ho
        //..again koe b id ho usko remove krdena...

        if (likescollector.includes(formalpCardzData.id)) {
            setlikescollector(function (formalpAsArrayofLikesCollector) {
                //means setlikescollection ke andr function  as predicate leekh kr mai usko as array lekr mai further uspe logic lgara hu

                return formalpAsArrayofLikesCollector.filter(function (
                    formalpAsMappedwithformalpAsArrayofLikesCollector
                ) {
                    return formalpAsMappedwithformalpAsArrayofLikesCollector !== formalpCardzData.id;
                });
            });
            toast("Successfully Like Removed...");
        } else {
            if (likescollector.length === 0) {
                setlikescollector([formalpCardzData.id]); //first time added like
            } else {
                setlikescollector(function (formalp) {
                    return [...formalp, formalpCardzData.id]; //means ...formalp being existing array usme
                    //..data daalrha hu as formalpCardzData.id
                });
            }
            toast("Successfully Like added...");
        }
    }

    return (
        // 1
        <>
            {/* <div className="card-box-as-individual min-h-[400px] h-[100px]  w-[370px] rounded-md overflow-hidden flex flex-col justify-center items-center bg-[gray] space-y-40 overflow-x-hidden"> */}
            <div className="min-h-[380px] h-[400px]  w-[300px] bg-[#22223BCC] rounded-md overflow-hidden flex flex-col justify-center items-center">
                {/* 1 */}
                <div className="image-box-with-button relative">
                    <div className="">
                        <img src={formalpCardzData.image.url} />
                    </div>

                    {/* // 2 */}
                    <div className=" absolute w-[30px] h-[30px] bg-white rounded-full right-2  bottom-3 grid place-items-center">
                        <button onClick={clickHandler}>
                            {likescollector.includes(formalpCardzData.id) ? (
                                <FcLike fontSize="1.75rem" />
                            ) : (
                                <FcLikePlaceholder fontSize="1.75rem" />
                            )}
                        </button>
                    </div>

                    {/* 3 */}
                    <div className="titleANDdescription">
                        <p>{formalpCardzData.title}</p>

                        <p>{formalpCardzData.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;
