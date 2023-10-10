import { useEffect, useState } from "react";
import ShowCartDetails from "../ShowCartDetails/ShowCartDetails";
import Footer from "../Footer/Footer";


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
            <div className="overflow-x-auto px-5 py-5 bg-base-200 m-5 rounded-lg">
                {nofound ? <p>No data found</p> :
                    <table className="table table-lg">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Package Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cards.map(item => <ShowCartDetails key={item.service_id} cartItem={item}></ShowCartDetails>)
                            }
                        </tbody>
                        {/* foot */}
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Package Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th></th>
                            </tr>
                        </tfoot>

                    </table>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Cart;