import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../../Components/Loading/Loading';
import auth from '../../../Firebase/Firebase.init';
import AppointmentSingleRow from '../AppointmentSingleRow/AppointmentSingleRow';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(`https://frozen-fortress-52042.herokuapp.com/booking?patient=${user.email}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    }
                });
                setAppointments(data.data);
                console.log(data);

            } catch (error) {
                const status = error.response.status

                if (status === 403 || status === 401) {
                    signOut(auth);
                }
            }
            setLoading(false);
        })()
    }, [user]);



    return (
        <div className='container mx-auto px-3 lg:px-24 py-3'>
            <div className="flex justify-between items-center w-full mb-6">
                <h3 className="text-xl">My Appointment</h3>
                <select className="select select-primary select-bordered w-full max-w-xs">
                    <option disabled >Large</option>
                    <option>Large Apple</option>
                    <option>Large Orange</option>
                    <option>Large Tomato</option>
                </select>
            </div>
            {
                loading ? <Loading /> : <div className="overflow-x-auto overflow-y-hidden">
                    {
                        appointments.length ? <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Serial</th>
                                    <th>Name</th>
                                    <th>date</th>
                                    <th>Time</th>
                                    <th>Treatment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    appointments.map((appointmentItem, index) => <AppointmentSingleRow appointmentItem={appointmentItem} key={appointmentItem._id} index={index} /> )
                                }
                            </tbody>
                        </table> : <h2 className="text-3xl text-red-400 text-center">No data found</h2>
                    }
                </div>
            }
        </div>
    );
};

export default MyAppointment;