import { FaArrowRight} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const {_id, img, title, price } = service;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
                <img src={img} alt="Shoes" className="rounded-lg h-60" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions text-orange-600 font-bold">
                    <p>Price: {price}</p>
                    <Link to={`/checkout/${_id}`}><span><FaArrowRight></FaArrowRight></span></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;