import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='sb_footer section_padding'>
        <div className='sb_footer-links'>
          <div className='sb_footer-links-div'>
            <h4>Company</h4>
            <a href='#'>
              <p>About Us</p>
            </a>
            <a href='#'>
              <p>Careers</p>
            </a>
            <a href='#'>
              <p>Press</p>
            </a>
          </div>
          <div className='sb_footer-links-div'>
            <h4>Help</h4>
            <a href='#'>
              <p>Customer Service</p>
            </a>
            <a href='#'>
              <p>Order Status</p>
            </a>
            <a href='#'>
              <p>Returns</p>
            </a>
          </div>
          <div className='sb_footer-links-div'>
            <h4>Community</h4>
            <a href='#'>
              <p>Events</p>
            </a>
            <a href='#'>
              <p>Blog</p>
            </a>
            <a href='#'>
              <p>Social Media</p>
            </a>
          </div>
          <div className='sb_footer-links-div'>
            <h4>Legal</h4>
            <a href='#'>
              <p>Privacy Policy</p>
            </a>
            <a href='#'>
              <p>Terms of Use</p>
            </a>
            <a href='#'>
              <p>Accessibility</p>
            </a>
            <a href='#'>
              <p>CA Supply Chains Act</p>
            </a>
          </div>
          <div className='sb_footer-links-div'>
            <h4>Connect</h4>
            <div className='socialmedia'>
              <a href='https://www.instagram.com/nike/' target='_blank' rel='noopener noreferrer'>
                Instagram
              </a>
              <a href='https://twitter.com/nike' target='_blank' rel='noopener noreferrer'>
                Twitter
              </a>
              <a href='https://www.facebook.com/nike' target='_blank' rel='noopener noreferrer'>
                Facebook
              </a>
            </div>
          </div>
        </div>
        <hr className='erena'/>
        <div className='sb_footer-below'>
          <div className='sb_footer-copyright'>
            <p>&copy; {new Date().getFullYear()} Nike, Inc. All rights reserved.</p>
          </div>
          <div className='sb_footer-below-links'>
            <a href='#'><div><p>Terms and Conditions</p></div></a>
            <a href='#'><div><p>Privacy Policy</p></div></a>
            <a href='#'><div><p>Accessibility</p></div></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
