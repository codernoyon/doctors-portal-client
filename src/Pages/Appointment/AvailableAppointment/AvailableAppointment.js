import { format } from 'date-fns';
import React from 'react';
import AvailableApointmentContainer from './AvailableApointmentContainer';

const AvailableAppointment = (props) => {
    const date = props.date;

    return (
        <section className='py-16'>
            <div className="container mx-auto px-6 lg:px-0">
                <h4 className="text-xl text-primary text-center">Available Appointments on {format(date, 'PP')}</h4>
                <div className='py-5'>
                <AvailableApointmentContainer date={date} />
                </div> 
            </div>
        </section>
    );
};

export default AvailableAppointment;