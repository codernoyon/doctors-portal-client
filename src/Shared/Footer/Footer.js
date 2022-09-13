import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../Assets/images/footer.png'

const Footer = () => {
    return (
        <footer style={{background: `url(${bg}) no-repeat center center / cover`}}>
            <div className="container mx-auto px-6 lg:px-0">
                <div className="footer gap-5">
                    <div>
                        <span className="footer-title">Services</span>
                        <Link to='/' className="link link-hover">Branding</Link>
                        <Link to='/' className="link link-hover">Design</Link>
                        <Link to='/' className="link link-hover">Marketing</Link>
                        <Link to='/' className="link link-hover">Advertisement</Link>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <Link to='/' className="link link-hover">About us</Link>
                        <Link to='/' className="link link-hover">Contact</Link>
                        <Link to='/' className="link link-hover">Jobs</Link>
                        <Link to='/' className="link link-hover">Press kit</Link>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <Link to='/' className="link link-hover">Terms of use</Link>
                        <Link to='/' className="link link-hover">Privacy policy</Link>
                        <Link to='/' className="link link-hover">Cookie policy</Link>
                    </div>
                </div>
            </div>
            <div className="footer footer-center p-4">
                <div>
                    <p>Copyright © 2022 - All right reserved by Doctors Portal</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;