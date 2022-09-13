import React from 'react';
import MainButton from '../../../Shared/MainButton/MainButton'
import treatment from '../../../Assets/images/treatment.png'

const Treatment = () => {
    return (
        <div className="hero min-h-screen container mx-auto my-10">
            <div>
                <div className="hero-content flex-col lg:flex-row lg:justify-center">
                    <img src={treatment} className="max-w-[21rem] md:max-w-sm rounded-lg shadow-md hover:-translate-y-1 cursor-pointer duration-300" alt='' />
                    <div className='lg:ml-8 lg:max-w-xl mt-5 lg:mt-0 px-2 lg:px-0'>
                        <h1 className="text-4xl lg:text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <MainButton>Get Started</MainButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treatment;