import { useContext } from "react";
import AuthProvider from "../../Provider/AuthProvider";

const DashBoard = () => {

    const Hello = useContext(AuthProvider);
    console.log(Hello);

    return (
        <div>
            <div>
                {/* <img src={user?.photoURL} alt="" /> */}
            </div>
        </div>
    );
};

export default DashBoard;