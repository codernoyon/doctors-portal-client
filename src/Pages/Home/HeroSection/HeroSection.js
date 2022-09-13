import React from 'react';
import chair from '../../../Assets/images/chair.png';
import bg from '../../../Assets/images/bg.png';
import MainButton from '../../../Shared/MainButton/MainButton';

const HeroSection = () => {
    return (
        <div className="hero min-h-screen container mx-auto px-2 lg:px-0" style={{ background: `url(${bg}) no-repeat center center / cover`, }}>
            <div className="">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-[21rem] md:max-w-lg rounded-lg shadow-2xl hover:-translate-y-1 cursor-pointer duration-300" alt='' />
                    <div className='lg:mr-16'>
                        <h1 className="text-4xl lg:5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <MainButton>Get Started</MainButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;