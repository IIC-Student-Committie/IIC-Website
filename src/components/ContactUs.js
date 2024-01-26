import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactUs.css'; // Import custom CSS file for additional styling

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="row">
        <div className="col-md-6 contact-image">
          {/* Replace the image source with your own */}
          <img src="contact.png" alt="contact" />
        </div>
        <div className="col-md-6">
          <form>
            <div className="form-row">
              <div className="form-group col-md-12" >
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Your Name"/>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-12">
                <label htmlFor="phone">Phone Number</label>
                <input type="text" className="form-control" id="phone" placeholder="Your Phone Number" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-12">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
