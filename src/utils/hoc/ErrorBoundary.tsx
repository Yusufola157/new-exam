
import { useNavigate } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";

const ErrorBoundary = () => {
    const navigate = useNavigate();
    const back = () => {
      navigate(-1);
    };
    return (
      <div className="w-[100%] h-[100vh] flex justify-center items-center">
        <div>
          <div>
            <div className="mb-[10px]">
              <BiErrorCircle />
            </div>
            <div>Sorry,Something went wrong</div>
            <div>That didnt work.Please have another go</div>
          </div>
          <button onClick={back} className="w-[200px] h-[40px] rounded-[10px] bg-[blue] text-white mt-[30px] flex justify-center items-center cursor-pointer">
            Go Back to prev page
          </button>
        </div>
      </div>
    );
  };
  
  export default ErrorBoundary;