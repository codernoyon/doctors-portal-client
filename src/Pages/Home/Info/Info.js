import React from 'react';
import clock from '../../../Assets/icons/clock.svg';
import marker from '../../../Assets/icons/marker.svg';
import phone from '../../../Assets/icons/phone.svg';
import InfoCard from '../InfoCard/InfoCard';


const Info = () => {
    return (
        <div className="container mx-auto py-5 px-6 lg:px-0">
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <InfoCard 
                img={clock} title={'Opening Hours'} 
                des={'Lorem Ipsum is simply dummy text of the pri'} 
                bgClass={'bg-gradient-to-r from-secondary to-primary'}/>
                <InfoCard 
                img={marker} 
                title={'Visit our location'} 
                des={'Brooklyn, NY 10036, United States'} 
                bgClass={'bg-accent'}/>
                <InfoCard 
                img={phone} 
                title={'Contact us now'} 
                des={'+000 123 456789'} 
                bgClass={'bg-gradient-to-r from-secondary to-primary'}/>
            </div>
        </div>
    );
};

export default Info;