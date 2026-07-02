import "./NotFound.css";
import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

function NotFound() {

    return (

        <div className="notfound">

            <div className="notfound-card">

                <FaExclamationTriangle className="error-icon"/>

                <h1>404</h1>

                <h2>Page Not Found</h2>

                <p>

                    Sorry! The page you are looking for
                    doesn't exist or has been moved.

                </p>

                <Link to="/">

                    <button>

                        <FaHome />

                        Back to Home

                    </button>

                </Link>

            </div>

        </div>

    );

}

export default NotFound;