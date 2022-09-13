import React from 'react';
import ServicesContainer from '../ServicesContainer/ServicesContainer';

const Services = () => {
    return (
        <div className='container mx-auto py-14 px-6 lg:px-0'>
            <h3 className="text-xl text-primary font-bold text-center">OUR SERVICES</h3>
            <h2 className="text-2xl text-center text-accent">Services We Provide</h2>
            <ServicesContainer/>
        </div>
    );
};

export default Services;