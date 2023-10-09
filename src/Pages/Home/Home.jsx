
import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Ourteams from "../../Components/OurTeams/Ourteams";
import SuccessfullProjects from "../../Components/SuccesfullProjects/SuccessfullProjects";
import Services from "../../Components/Services/Services";


const Home = () => {

    const data = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <h1 className="text-4xl my-5 text-amber-600 font-semibold text-center">Our Services</h1>
            <div className="grid lg:grid-cols-4 gap-4 px-10">
                {
                    data.map(item => <Services key={item.service_id} service={item} ></Services> )
                }
            </div>
            <SuccessfullProjects></SuccessfullProjects>
            <Ourteams></Ourteams>
            <Footer></Footer>
        </div>
    );
};

export default Home;