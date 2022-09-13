import React from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import Footer from '../../Shared/Footer/Footer';
import AppointmentSection from './AppoinmentSection/AppointmentSection';
import ContactUs from './ContactUs/ContactUs';
import HeroSection from './HeroSection/HeroSection';
import Info from './Info/Info';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import Treatment from './Treatment/Treatment';

const Home = () => {
    return (
        <div>
            <PageTitle title={'Home'}/>
            <HeroSection/>
            <Info/>
            <Services/>
            <Treatment/>
            <AppointmentSection/>
            <Testimonial/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Home;