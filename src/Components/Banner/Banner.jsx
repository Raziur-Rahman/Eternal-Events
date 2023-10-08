import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Banner = () => {

    const {user} = useContext(AuthContext);

    return (
        <div className="hero min-h-[80vh] my-5" style={{ backgroundImage: 'url(https://i.ibb.co/cv4rQr0/banner.jpg)', backgroundSize:"cover" }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className=" px-7 lg:px-24">
                    <h1 className="mb-5 text-5xl text-white font-bold">{
                        user ? <span>Hello {user?.displayName}</span> 
                        : <span>Hello Sir!!</span>
                    }</h1>
                    <p className="mb-5 text-xl text-white">Welcome to our Event Management Hub, where every occasion becomes an unforgettable celebration. From weddings to retirement parties, we curate moments that linger in the heart. Immerse yourself in a world of expert planning, exquisite details, and seamless execution. Let us turn your dreams into cherished memories.</p>
                    <button className="btn btn-primary">Our Services</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;