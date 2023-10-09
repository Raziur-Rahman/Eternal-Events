import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {

    const [details, setDetails] = useState({});

    const DetailsId = useParams();
    console.log(DetailsId.id);

    const data = useLoaderData();

    useEffect(() => {
        const detailsdata = data.find(item => item.service_id === DetailsId.id)
        if (detailsdata) {
            console.log(detailsdata)
            setDetails(detailsdata)
        }

    }, [DetailsId.id, data])

    const { name, image, details_description, price } = details;
    console.log(details?.service_id);

    return (
        <div className="px-2 lg:px-28">
            <img className="w-full" src={image} alt="" />
            <div className="flex flex-col-reverse md:flex-row md:justify-between items-center my-5  ">
                <h1 className="text-3xl lg:text-4xl font-semibold">Package: {name}</h1>
                <div className="flex flex-col md:flex-row items-center space-x-2">
                    <h1 className="text-3xl font-medium">Price: ${price}</h1>
                    <div className="my-5 mx-auto space-x-2">
                        <button className="btn btn-success">Add Favorite</button>
                        <button className="btn btn-success">Add to cart</button>
                    </div>
                </div>

            </div>
            <p className="text-xl font-semibold">{details_description}</p>

        </div>
    );
};

export default Details;