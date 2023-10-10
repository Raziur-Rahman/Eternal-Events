import { useEffect, useState } from "react";
import ShowCartDetails from "../ShowCartDetails/ShowCartDetails";
import Footer from "../Footer/Footer";


const Favorites = () => {
    const [cards, setCards] = useState([])
    const [nofound, setNoFound] = useState('');

    useEffect(() => {
        const favoriteStorage = JSON.parse(localStorage.getItem('Event_Favorites'));
        if (favoriteStorage) {
            setCards(favoriteStorage);
        }
        else {
            console.log("No data Found...")
            setNoFound('No Data Found')
        }
    }, [])

    return (
        <div>
            <div>
                {
                    nofound ? <p>No data found</p> : <>
                        <div className="p-16 bg-base-200">
                            <table className="table">
                                <tbody>
                                    {
                                        cards.map(item => <ShowCartDetails key={item.service_id} cartItem={item}></ShowCartDetails>)
                                    }
                                </tbody>

                            </table>
                        </div>
                    </>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Favorites;