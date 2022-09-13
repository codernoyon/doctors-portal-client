import React from 'react';
import doctor from '../../../Assets/images/doctor-small.png'
import MainButton from '../../../Shared/MainButton/MainButton';
import bg from '../../../Assets/images/appointment.png'

const AppointmentSection = () => {
    return (
        <section className='my-16 lg:my-28'  style={{background: `url(${bg}) no-repeat center center / cover`,}}>
            <div className="container mx-auto px-6 lg:px-0">
                <div className="flex items-center">
                    <img className='flex-1 lg:max-w-xl -mt-32 hidden lg:block' src={doctor} alt="" />
                    <div className="flex-1 text-white space-y-4 py-10">
                        <h3 className="text-lg text-primary">Appointment</h3>
                        <h2 className="text-4xl lg:text-5xl">Make an appointment Today</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod accusantium, vitae facilis qui et, asperiores nam aliquam quia adipisci repellendus sit. Sequi tempore soluta possimus aperiam, optio dignissimos tenetur quae cumque, porro adipisci provident vero non accusantium quisquam nam sapiente!</p>
                        <MainButton>Get Started</MainButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentSection;