import { useEffect, useState } from "react";
import ShowCartDetails from "../ShowCartDetails/ShowCartDetails";


const Cart = () => {
    const [cards, setCards] = useState([])
    const [nofound, setNoFound] = useState('');

    useEffect(() => {
        const cartStorage = JSON.parse(localStorage.getItem('Event_Cart'));
        if (cartStorage) {
            setCards(cartStorage);
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

export default Cart;