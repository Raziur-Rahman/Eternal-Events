import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(() => console.log("User Logged Out Successful..."))
        .catch((error) =>{
            console.error(error)
        })

    }

    const NavLinks = <>
        <li className="font-semibold"> <NavLink to='/'>Home</NavLink> </li>

        <li className="font-semibold"> <NavLink to='/login'>LogIn</NavLink> </li>
        <li className="font-semibold"> <NavLink to='/register'>Register</NavLink> </li>
    </>

    return (
        <nav>
            <div className="navbar lg:px-32 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                    <Link to="/"> <button className="btn btn-ghost normal-case text-xl">Event Manegment</button> </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <span>{user?.displayName}</span>
                            <span><img className="w-2/3 rounded-full" src={user?.profilePic} alt="" /></span>
                            <a onClick={handleLogOut} className="btn">Sign Out</a>
                        </> : <Link to="/login"> <button className="btn ">Sign In</button> </Link>
                    }
                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar;