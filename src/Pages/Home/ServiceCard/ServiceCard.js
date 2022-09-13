import React from 'react';

const ServiceCard = ({ service }) => {
    const { img, des, name } = service;
    return (
        <div className='text-center py-16 px-5 shadow-md duration-300 hover:shadow-lg hover:shadow-secondary rounded-xl space-y-2 border-t border-gray-50'>
            <div className='max-w-[6rem] inline-block'>
                <img className='w-full h-24' src={img} alt="" />
            </div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p>{des}</p>
        </div>
    );
};

export default ServiceCard;