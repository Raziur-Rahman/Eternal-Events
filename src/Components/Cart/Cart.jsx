import { useEffect, useState } from "react";


const Cart = () => {
    const [cards, setCards] =useState([])

    useEffect(() => {
        const donations = JSON.parse(localStorage.getItem('Evant_Cart'));
        if (donations) {
            setCards(donations);
        }
        else {
            console.log("No data Found...")
            // setNoFounds('No Data Found')
        }
    }, [])

    return (
        <div>
            cart will apear here: {cards.length}
        </div>
    );
};

export default Cart;