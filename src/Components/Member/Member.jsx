import PropTypes from 'prop-types';

const Member = ({ member }) => {


    const { name, title, bio, image } = member;

    return (
        <div>
            <div className="card h-[550px] bg-blue-400 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body px-2 items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <h3 className='font-semibold'>{title}</h3>
                    <p>{bio}</p>
                </div>
            </div>

        </div>
    );
};

export default Member;

Member.propTypes ={
    member: PropTypes.object
}