import React from 'react';

const ServiceCard = ({ service }) => {

    const { img, title, price } = service;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
                <img src={img} alt="Shoes" className="rounded-lg h-60" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions">
                    <p className='text-orange-600 font-bold'>Price: {price}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;