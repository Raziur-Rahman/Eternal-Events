import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Footer from "../Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";



const DashBoard = () => {

    const navigate = useNavigate();

    const { user, logOut  } = useContext(AuthContext);
    const { displayName, email, emailVerified } = user;

    console.log(user);

    const handleLogout = () =>{
        logOut()
            .then(() => {
                toast("User Logged Out Successful...")
                navigate("/");
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="p-10">
                <div className="flex justify-center flex-col items-center min-h-[65vh] bg-base-300 w-fit shadow-2xl px-12 py-5 rounded-xl">
                    <div className="flex flex-col justify-center items-center space-y-5 mb-5">
                        <img className="h-50 w-50 rounded-full" src={user?.photoURL} alt="" />
                        <h1 className="text-3xl">{displayName}</h1>
                        
                    </div>
                    <div className="text-xl text-center font-semibold space-y-4">
                        <h1>{email}</h1>
                        <h1>
                            {
                                emailVerified ? <p>User Verification: <span className="badge badge-success">verified</span> </p> : <p>User Verification: <span className="badge badge-success">not verified</span></p>
                            }
                        </h1>
                        <button onClick={handleLogout} className="px-4 py-2 bg-amber-500 text-white rounded-md hover:border hover:border-gray-600">Log Out</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default DashBoard;