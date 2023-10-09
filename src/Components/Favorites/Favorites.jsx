import { useEffect, useState } from "react";
import ShowCartDetails from "../ShowCartDetails/ShowCartDetails";


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
            {
                nofound ? <p>No data found</p> : <>
                    <div >
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
    );
};

export default Favorites;