import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ShowCartDetails = ({ cartItem }) => {

    const { price, image, name, category, short_description, service_id } = cartItem;

    return (
        <tr className='border-base-300 rounded-lg'>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image[1]} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{category}</div>
                    </div>
                </div>
            </td>
            <td>Packege price: ${price}</td>
            <td>{short_description}</td>
            <th>
                <Link to={`/details/${service_id}`}><button className="btn btn-ghost btn-xs">details</button></Link>
            </th>
        </tr>
        // <tr className='grid grid-cols-3 items-center'>
        //     <td>
        //         <th>
        //             <label>
        //                 <input type="checkbox" className="checkbox" />
        //             </label>
        //         </th>
        //         <td>
        //             <div className="flex items-center space-x-3">
        //                 <div className="avatar">
        //                     <div className="mask mask-squircle w-12 h-12">
        //                         <img src={image} alt="Avatar Tailwind CSS Component" />
        //                     </div>
        //                 </div>
        //                 <div>
        //                     <div className="font-bold">{name}</div>
        //                     <div className="text-sm opacity-50">{category}</div>
        //                 </div>
        //             </div>
        //         </td>
        //     </td>
        //     <td>
        //         <p className="text-xl font-medium">Price: ${price}</p>
        //     </td>
        //     <th>
        //         <Link to={`/details/${service_id}`}><button className="btn btn-ghost btn-xs">details</button></Link>
        //     </th>
        // </tr>

    );
};

export default ShowCartDetails;

ShowCartDetails.propTypes = {
    cartItem: PropTypes.object
}