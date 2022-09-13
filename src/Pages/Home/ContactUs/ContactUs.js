import React from 'react';
import bg from '../../../Assets/images/appointment.png';


const ContactUs = () => {
    return (
        <section style={{ background: `url(${bg}) no-repeat center center / cover` }} className='my-14 py-10'>
            <div className="container mx-auto px-6 lg:px-0">
                <div className="flex items-center justify-center">
                    <div className='w-full lg:w-2/6 space-y-4'>
                        <div>
                            <h3 className="text-lg text-center text-primary font-semibold">Contact Us</h3>
                            <h2 className="text-2xl lg:text-3xl text-center text-white">Stay connected with us</h2>
                        </div>
                        <form className='space-y-3'>
                            <input placeholder='Email' type="email" className="focus:ring-2 ring-cyan-400 outline-none py-2 px-3 rounded-md  w-full" />
                            <input placeholder='Subject' type="text" className="focus:ring-2 ring-cyan-400 outline-none py-2 px-3 rounded-md  w-full" />
                            <textarea placeholder='Your message' className='focus:ring-2 ring-cyan-400 outline-none py-2 px-3 rounded-md w-full resize-none' name="" id="" cols="30" rows="10"></textarea>
                            <div className='text-center'>
                                <button className='px-5 text-white font-smibold py-2 bg-secondary rounded-md inline-block text-center'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;