import React from 'react';

const TestimonialCard = ({testimonial}) => {
    const {img, des, name, address} = testimonial;
    return (
        <div className='shadow-md p-7 rounded-2xl duration-300 hover:-translate-y-1 hover:shadow-primary'>
            <p className='mb-5'>{des}</p>
            <div className='flex space-x-4'>
                <img className='w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={img} alt="" />
                <div>
                    <h4 className="text-lg font-semibold">{name}</h4>
                    <small>{address}</small>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;