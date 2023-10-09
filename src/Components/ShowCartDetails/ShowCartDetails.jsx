import PropTypes from 'prop-types';

const ShowCartDetails = ({ cartItem }) => {

    const { price, image, name, category } = cartItem;

    return (
        <div>
            <tr className='grid grid-cols-3'>
                <td>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-sm opacity-50">{category}</div>
                        </div>
                    </div>
                </td>
                </td>
                <td>
                    <p className="text-xl font-medium">Price: ${price}</p>
                </td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>

        </div>
    );
};

export default ShowCartDetails;

ShowCartDetails.propTypes ={
    cartItem: PropTypes.object
}