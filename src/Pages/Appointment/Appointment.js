import React, { useState } from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import Footer from '../../Shared/Footer/Footer';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';
import BannerAppointment from './BannerAppointment/BannerAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <PageTitle title={"Appointment"}/>
            <BannerAppointment date={date} setDate={setDate} />
            <AvailableAppointment date={date} />
            <Footer />
        </div>
    );
};

export default Appointment;