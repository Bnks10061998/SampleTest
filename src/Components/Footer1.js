import React from 'react';
import './Footer1.css';

function Footer1() {
    const socialLinks = [
        {
          name: 'Facebook',
          username: 'Least Action Pvt Ltd',
          logo: 'https://kosuketechnologies.com/assets/img/facebook.svg',
        },
        {
          name: 'Linkedin',
          username: 'Least Action Pvt Ltd',
          logo: 'https://kosuketechnologies.com/assets/img/linkedin.svg',
        },
        {
          name: 'X.com',
          username: 'Least Action Pvt Ltd',
          logo: 'https://kosuketechnologies.com/assets/img/twitter.svg',
        },
        {
          name: 'Youtube',
          username: 'Least Action Pvt Ltd',
          logo: 'https://kosuketechnologies.com/assets/img/youtube.svg',
        },
        {
          name: 'Instagram',
          username: 'Least Action Pvt Ltd',
          logo: 'https://kosuketechnologies.com/assets/img/instagram.svg',
        },
      ];
      
  return (
    <div className="social-container">
      <a href='+91 9597366741'> <span class="float-button call-btn" title='Call Least Action Pvt Ltd'><i class="fas fa-phone"></i></span></a>
      <a href='#'> <span class="float-button whatsapp-btn" title='Whatsapp Least Action Pvt Ltd'><i class="fab fa-whatsapp"></i></span></a>
      <h3 className="social-title">Social Media</h3>
      <h2 className="social-subtitle">Follow us for the latest updates</h2>

      <div className="social-icons">
        {socialLinks.map((e, index) => (
          <div className="social-card" key={index}>
            <img src={e.logo} alt={e.name} />
            <div className="text">
              <h2>{e.name}</h2>
              <p>{e.username}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer1;
