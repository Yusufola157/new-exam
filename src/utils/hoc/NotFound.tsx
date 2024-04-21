import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();
    const back = () => {
      navigate(-1);
    };
    return (
        <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
        <div className="rounded-lg bg-white p-8 text-center shadow-xl">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="text-gray-600">Oops! The page you are looking for could not be found.</p>
          <button className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600" onClick={back}> Go back to Home </button>
        </div>
      </div>
    );
  };
  
  export default NotFoundPage;
