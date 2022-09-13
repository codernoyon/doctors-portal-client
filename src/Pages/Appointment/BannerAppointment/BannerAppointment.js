import React from 'react';
import chair from '../../../Assets/images/chair.png';
import bg from '../../../Assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const BannerAppointment = ({date, setDate}) => {

    return (
        <section className="hero min-h-screen container mx-auto px-2 lg:px-0" style={{ background: `url(${bg}) no-repeat center center / cover`, }}>
            <div className="">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="overflow-hidden max-w-[21rem] md:max-w-lg rounded-lg shadow-xl cursor-pointer duration-300" alt='' />
                    <div className='lg:mr-16 shadow-md  bg-white rounded-xl'>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerAppointment;