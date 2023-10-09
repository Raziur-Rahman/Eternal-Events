import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const Services = ({service}) => {

    const navigate = useNavigate();

    const {category, short_description, price, image, service_id} = service;


    return (
        <div>
            <div className="card h-[500px] glass">
                <figure><img className="h-[250px]" src={image[0]} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{category}</h2>
                    <p>{short_description}</p>
                    <div className="card-actions justify-between items-center">
                        <p className="border font-semibold px-2 py-2 rounded-md max-w-fit">Price: $<span>{price}</span></p>
                        <button onClick={()=>navigate(`/details/${service_id}`)} className="btn text-white bg-amber-500">Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;

Services.propTypes ={
    service: PropTypes.object
}