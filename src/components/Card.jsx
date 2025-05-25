import {useState} from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import {toast} from "react-toastify";
function Card(prop) {
    const formalpCardzData = prop.formalpCardzData;
    const likescollector = prop.likescollector;
    const setlikescollector = prop.setlikescollector;

    const [readmore, setreadmore] = useState(false);

    const description = formalpCardzData.description.substring(0, 150);

    function readmoreClickHandler() {
        setreadmore(!readmore);
    }

    function clickHandler() {
        if (likescollector.includes(formalpCardzData.id)) {
            setlikescollector(function (formalpAsArrayofLikesCollector) {
                return formalpAsArrayofLikesCollector.filter(function (
                    formalpAsMappedwithformalpAsArrayofLikesCollector
                ) {
                    return formalpAsMappedwithformalpAsArrayofLikesCollector !== formalpCardzData.id;
                });
            });
            toast("Successfully Like Removed...");
        } else {
            if (likescollector.length === 0) {
                setlikescollector([formalpCardzData.id]);
            } else {
                setlikescollector(function (formalp) {
                    return [...formalp, formalpCardzData.id];
                });
            }
            toast("Successfully Like added...");
        }
    }

    return (
        <>
            <div className="min-h-[380px] h-[400px]  w-[300px] bg-[#22223BCC]  overflow-hidden flex flex-col justify-center items-center rounded-4xl p-7 bg-cover">
                <div className="image-box-with-button relative">
                    <div className="">
                        <img src={formalpCardzData.image.url} />
                    </div>

                    <div className=" absolute w-[30px] h-[30px] bg-white rounded-full right-2  bottom-48 left-56 grid place-items-center">
                        <button onClick={clickHandler} className="cursor-pointer  relative bottom-0">
                            {likescollector.includes(formalpCardzData.id) ? (
                                <FcLike fontSize="1.75rem" />
                            ) : (
                                <FcLikePlaceholder fontSize="1.75rem" />
                            )}
                        </button>
                    </div>

                    <div className="titleANDdescription">
                        <p className="text-white">{formalpCardzData.title}</p>

                        <p className="text-gray-400 font-bold mt-3.5 " onClick={readmoreClickHandler}>
                            {readmore ? formalpCardzData.description : `${description}...`}
                            <span className="text-green-400 cursor-pointer">{readmore ? "showless" : "readmore"}</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;
