import { Link } from "react-router-dom";


const Error = () => {
      return (
            <div className="h-[100vh] flex justify-center items-center">
                  <h2 className="text-3xl">404 Not Found page <Link className="text-blue-600" to="/">Back to Home</Link> </h2>
            </div>
      );
};

export default Error;