import React from 'react';
import TestimonialCard from '../TestimonilCard/TestimonialCard';
import people1 from '../../../Assets/images/people1.png'
import people2 from '../../../Assets/images/people2.png'
import people3 from '../../../Assets/images/people3.png'

const TestimonialContainer = () => {
    const testimonils = [
        {
            _id: 1, des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde amet nostrum est rem porro laudantium animi consequuntur recusandae velit. Illum voluptatem nesciunt dolor deleniti cum.',
            img: `${people1}`,
            name:'Jhon Doe',
            address: 'California'
        },
        {
            _id: 2, des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde amet nostrum est rem porro laudantium animi consequuntur recusandae velit. Illum voluptatem nesciunt dolor deleniti cum.',
            img: `${people2}`,
            name:'Lily',
            address: 'New work'
        },
        {
            _id: 3, des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde amet nostrum est rem porro laudantium animi consequuntur recusandae velit. Illum voluptatem nesciunt dolor deleniti cum.',
            img: `${people3}`,
            name:'Kiso akta',
            address: 'Dhaka'
        },
    ];

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                testimonils.map(testimonial => <TestimonialCard key={testimonial._id} testimonial={testimonial}/>)
            }
        </div>
    );
};

export default TestimonialContainer;