import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Components/Loading/Loading';
import AppointmentCard from './AppointmentCard';
import AppointmentModal from './AppointmentModal';

const AvailableApointmentContainer = ({ date }) => {
    const [treatement, setTreatment] = useState(null);
    const formatedDate = format(date, "PP");
    const { data: appointments, isLoading, refetch } = useQuery(['available', formatedDate], () => fetch(`https://frozen-fortress-52042.herokuapp.com/available?date=${formatedDate}`)
        .then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14`}>
                {
                    appointments?.map(appointment => <AppointmentCard appointment={appointment} setTreatment={setTreatment} key={appointment._id} />)
                }
            </div>
            {
                treatement && <AppointmentModal refetch={refetch} setTreatment={setTreatment} date={date} treatement={treatement} />
            }
        </div>
    );
};

export default AvailableApointmentContainer;