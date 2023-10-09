import PropTypes from 'prop-types';

const Member = ({ member }) => {

    console.log(member);

    const { name, title, bio, image } = member;

    return (
        <div>
            <div className="card bg-blue-400 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <h3>{title}</h3>
                    <p>{bio}</p>
                </div>
            </div>

        </div>
    );
};

export default Member;

Member.propTypes ={
    member: PropTypes.node
}