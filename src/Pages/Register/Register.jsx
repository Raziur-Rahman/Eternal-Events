// import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import auth from "../../firebase/firebase.config";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";


const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [show, setShow] = useState(false);

    const {createUser} = useContext(AuthContext);

    const handleLogIn = e => {
        e.preventDefault();
        const Name = e.target.Name.value;
        const photo = e.target.Photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const isChecked = e.target.checkbox.checked;
        console.log(isChecked);
        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError("Password should be at least 6 digit");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError("password Should have at least one capital latter..");
            return;
        }
        else if (!isChecked) {
            setRegisterError("You have to accept our terms and conditions");
            return;
        }

        // create User in firebase by context api
        createUser( email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(userCredential.user)
                setSuccess("User created Successfuly")

                updateProfile(user, {
                    displayName: Name,
                    photoURL: photo
                })

            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })
    }
    return (
        <div>
            <div className="hero min-h-[90vh] bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile Photo</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name="Photo" className="input input-bordered" />
                            </div>
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
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div>
                                <p>Already Registered? <Link className="text-blue-600 link-hover" to="/login">Please Login!!!</Link></p>
                            </div>
                            {registerError && <p className="text-blue-600">{registerError}</p>
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

export default Register;