import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';


const Details = () => {

    const [details, setDetails] = useState({});

    const DetailsId = useParams();
    console.log(DetailsId.id);

    const data = useLoaderData();
    console.log(data)

    useEffect(() => {
        const detailsdata = data.find(item => item.service_id === DetailsId.id)
        if (detailsdata) {
            console.log(detailsdata)
            setDetails(detailsdata)
        }

    }, [DetailsId.id, data])

    const handleFavorite = () => {

        const newFav = [];

        const previousFav = JSON.parse(localStorage.getItem('Event_Favorites'));
        if (!previousFav) {
            newFav.push(details)
            localStorage.setItem('Event_Favorites', JSON.stringify(newFav))
            swal("Thank you", "Package Added to Favorites", "success");

        }
        else {

            const isExists = previousFav.find(element => element.service_id === DetailsId.id )

            if (isExists) {
                console.log("not done")
                swal("Opps!", "Already Added to the favorites", "error");
            }
            else {
                newFav.push(...previousFav, details)
                localStorage.setItem('Event_Favorites', JSON.stringify(newFav))
                swal("Thank you", "Package Added to Favorites", "success");

            }
        }
    }
    const handleAddCart = () => {

        const newToCart = [];

        const previousCart = JSON.parse(localStorage.getItem('Event_Cart'));
        if (!previousCart) {
            newToCart.push(details)
            localStorage.setItem('Event_Cart', JSON.stringify(newToCart))
            swal("Thank you", "Package Added to Cart", "success");
        }
        else {

            const isExists = previousCart.find(element => element.service_id === DetailsId.id )

            if (isExists) {
                swal("Opps!", "Already Added to the Cart", "error");
            }
            else {
                newToCart.push(...previousCart, details)
                localStorage.setItem('Event_Cart', JSON.stringify(newToCart))
                swal("Thank you", "Package Added to Cart", "success");

            }
        }
    }


    const { name, image, details_description, price } = details;
    
    return (
        <div className="px-2 lg:px-28">
            <img className="w-full" src={image} alt="" />
            <div className="flex flex-col-reverse md:flex-row md:justify-between items-center my-5  ">
                <h1 className="text-3xl lg:text-4xl font-semibold">Package: {name}</h1>
                <div className="flex flex-col md:flex-row items-center space-x-2">
                    <h1 className="text-3xl font-medium">Price: ${price}</h1>
                    <div className="my-5 mx-auto space-x-2">
                        <button onClick={handleFavorite} className="btn btn-success">Add Favorite</button>
                        <button onClick={handleAddCart} className="btn btn-success">Add to cart</button>
                    </div>
                </div>
            </div>
            <p className="text-xl font-semibold py-5">{details_description}</p>
        </div>
    );
};

export default Details;