import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const LogIn = () => {
    const [LogInError, setLogInError] = useState('');
    const [success, setSuccess] = useState('');
    const [show, setShow] = useState(false);

    const { UserLogIn } = useContext(AuthContext);


    const handleLogIn = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email , password);

        setLogInError('');
        setSuccess('')

        UserLogIn( email, password)
        .then(result =>{
            setSuccess("Logged In Successful");
            console.log(result.user);
        })
        .catch(error => {
            setLogInError(error.message);
            console.error(error);
        })
    }
    return (
        <div>
            <div className="hero min-h-[90vh] bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input type={show ? "text" : "password"} placeholder="password" name="password" className="input input-bordered w-full" required />
                                    <span className="absolute top-4 right-3" onClick={() => setShow(!show)}>
                                        {
                                            show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                <input type="checkbox" name="checkbox" id="" />
                                <span className="ml-2">Please accept our <a href="" className="text-blue-700 link-hover ">terms and condition</a> </span>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="text-center">
                                <p>New Here? <Link className="text-blue-600 link-hover" to="/register">Please Register</Link></p>
                            </div>
                            {LogInError && <p className="text-blue-600">{LogInError}</p>
                            }
                            {success && <p className="text-blue-600">{success}</p>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;