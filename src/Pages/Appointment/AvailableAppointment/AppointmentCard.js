import React from 'react';

const AppointmentCard = ({ appointment, setTreatment }) => {
    const { name, slots } = appointment;

    return (
        <div className='px-4 py-8 shadow-md rounded-xl text-center space-y-2'>
            <h3 className="text-lg text-primary font-semibold">{name}</h3>
            <p className='text-sm block font-medium'>
                {slots.length > 1 ? <span>{slots[0]}</span> : <span className='text-red-400'> Try another day</span>}
            </p>
            <small className='block uppercase'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</small>
            <label onClick={() => setTreatment(appointment)} htmlFor="my-modal" className={`btn btn-primary modal-button text-white font-bold bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l disabled:bg-gray-400`} disabled={slots.length === 0} >Book Appointment</label>
        </div>
    );
};

export default AppointmentCard;