import React from 'react';
import qout from '../../../Assets/icons/quote.svg'
import TestimonialContainer from '../TestimonialContainer/TestimonialContainer';

const Testimonial = () => {
    return (
        <section>
            <div className="container mx-auto lg:px-0 px-5">
                <div className="flex justify-between mb-10">
                    <div className='space-3'>
                        <h3 className="text-lg text-primary">Testimonial</h3>
                        <h2 className="text-2xl">What our Patients Says</h2>
                    </div>
                    <div className='w-20 lg:w-36'>
                        <img className='w-full' src={qout} alt="" />
                    </div>
                </div>
                <TestimonialContainer/>
            </div>
        </section>
    );
};

export default Testimonial;