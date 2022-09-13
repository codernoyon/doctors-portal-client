import axios from 'axios';
import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../../Firebase/Firebase.init';


const AppointmentModal = ({ treatement, date, setTreatment, refetch }) => {
    const { name, slots, _id } = treatement;
    const [user] = useAuthState(auth);

    const handleSubmitForm = async event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const formatedDate = format(date, "PP")
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value,
        }

        const {data} = await axios.post("https://frozen-fortress-52042.herokuapp.com/booking", booking);

        console.log(data);
        if(data.success){
            toast.success(`Appointment is set ${formatedDate} at ${slot}`)
        }else{
            toast.error(`Appointment already set ${data?.booking.date} at ${data.booking.slot}`)
        }
        refetch();
        setTreatment(null)
    
    }
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="my-modal" className="btn btn-sm bg-red-400 text-white btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-primary mb-5">Treatment for: {name}</h3>
                    <form onSubmit={handleSubmitForm} className='space-y-3'>
                        <input disabled value={format(date, 'PP')} type="text" placeholder="Time" className="input input-bordered input-primary w-full" />
                        <select name='slot' className="select select-bordered w-full input-primary">
                             {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input value={user.displayName} disabled type="text"  placeholder="Full name" className="input input-bordered input-primary w-full" />
                        <input name='phone' type="text" placeholder="Phone number" className="input input-bordered input-primary w-full" />
                        <input value={user.email} disabled type="email" placeholder="Email" className="input input-bordered input-primary w-full" />
                        <button type='submit' className='px-5 text-white font-smibold py-2 bg-secondary rounded-md block w-full text-center'>Submit</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;