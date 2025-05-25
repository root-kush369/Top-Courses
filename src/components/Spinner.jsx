// import react from "@vitejs/plugin-react-swc";
import "./Spinner.css";
function Spinner() {
    return (
        <div className="flex flex-col justify-center items-center h-[100vh] w-[100vw]">
            <div className="spinner flex-col  items-center justify-center space-y-2"></div>
            <p className="text-shadow-black text-lg font-semibold">Loading.....</p>
        </div>
    );
}

export default Spinner;
