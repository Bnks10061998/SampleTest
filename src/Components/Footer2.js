import React from 'react';
import './Footer2.css';
import img from './Leastactionlogo.jpeg';

function Footer2() {
    return (
        <div className='foot-main'>
            <div className='foot-bg'>
                <div className='foot-hd1'>
                    <h2>What we do</h2>
                    <p>Least Action Pvt Ltd is a <br /> young and a creative web design <br />
                        and web development company. <br /> Started with young professionals <br />
                        with proper knowledge and <br /> hands-on experience in design <br /> and development.
                    </p>
                </div>
                <div className='foot-hd2'>
                    <h2>Menus</h2>
                    <a href='#'>Home</a><br /><br />
                    <a href='#'>Services</a><br /><br />
                    <a href='#'>Products</a><br /><br />
                    <a href='#'>About us</a><br /><br />
                    <a href='#'>Contact us</a><br /><br />
                </div>
                <div className='foot-hd3'>
                    <h2>Service</h2>
                    <a href='#'>UI UX Designing</a><br /><br />
                    <a href='#'>Web Development</a><br /><br />
                    <a href='#'>Cloud Services</a><br /><br />
                    <a href='#'>Mobile Development</a><br /><br />
                    <a href='#'>AI & ML Services</a><br /><br />
                </div>
                <div className='foot-hd3'>
                    <h2>Help</h2>
                    <a href='#'>Terms and conditions</a><br /><br />
                    <a href='#'>Privacy Policy</a><br /><br />
                    <a href='#'>Refund and cancellation</a><br /><br />
                    <a href='#'>Helps</a><br /><br />
                    <a href='#'>FAQs</a><br /><br />
                </div>
                <div className='foot-hd4'>
                    <div className='logo-bg'>
                        <img className='la-logo' src={img} alt='LeastAction logo' /><h3>LEAST ACTION</h3>
                    </div>
                    <h2>Contact us</h2>
                    <a href='#'><i className='fa fa-map-marker'></i>No 9, Thendral Nagar, Sathuvachari(SP office back side), <br /> Vellore - 632009</a><br />
                    <a href='#'><i className="fa fa-phone"></i> +91 9597366741</a><br />
                    <a href='#'><i className='fa fa-envelope'></i>leastactioncompany@gmail.com</a>
                </div>
            </div>
        </div>
    )
}

export default Footer2