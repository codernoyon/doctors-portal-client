import React from 'react';
import icon1 from '../../../Assets/images/fluoride.png';
import icon2 from '../../../Assets/images/cavity.png';
import icon3 from '../../../Assets/images/whitening.png';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServicesContainer = () => {
    const services = [
        {_id: 1, name: 'Fluoride Treatment', des:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the', img: `${icon1}`},
        {_id: 2, name: 'Cavity Filling', des:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the', img: `${icon2}`},
        {_id: 3, name: 'Teeth Whitening', des:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the', img: `${icon3}`},
    ];

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
            {
                services.map(service => <ServiceCard service={service} key={service._id} />)
            }
        </div>
    );
};

export default ServicesContainer;   