import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEnvelope, FaLock, FaVideo } from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {

        e.preventDefault();

        console.log({
            email,
            password
        });

        alert("Login Successful!");

    };

    return (

        <>

            <Navbar />

            <section className="login">

                <div className="login-card">

                    <div className="login-logo">

                        <FaVideo className="video-icon"/>

                        <h1>MeetSphere</h1>

                    </div>

                    <h2>Welcome Back</h2>

                    <p>

                        Login to continue your meetings.

                    </p>

                    <form onSubmit={handleLogin}>

                        <div className="input-box">

                            <FaEnvelope />

                            <input

                                type="email"

                                placeholder="Enter Email"

                                value={email}

                                onChange={(e)=>setEmail(e.target.value)}

                                required

                            />

                        </div>

                        <div className="input-box">

                            <FaLock />

                            <input

                                type="password"

                                placeholder="Enter Password"

                                value={password}

                                onChange={(e)=>setPassword(e.target.value)}

                                required

                            />

                        </div>

                        <button className="login-btn">

                            Login

                        </button>

                    </form>

                    <div className="login-links">

                        <Link to="/register">

                            Create Account

                        </Link>

                        <Link to="#">

                            Forgot Password?

                        </Link>

                    </div>

                </div>

            </section>

            <Footer />

        </>

    );

}

export default Login;