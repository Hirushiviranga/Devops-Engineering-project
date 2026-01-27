import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://98.94.14.156:5000/api/contact", formData);
      alert(" Message sent successfully !");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert(" Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>
            I’m always excited to connect with new people, whether it’s to collaborate on a project, share ideas, or explore opportunities. Feel free to drop me a message.I’d love to hear from you!
          </p>
        </div>

        <div className="row" data-aos="fade-in">

          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>231, Manosiri, Kinchigune, Medamulana.</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>hirushiviranga89@gmail.com</p>
              </div>

              <h4>Find Me at</h4>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.3801575966468!2d80.18938967474934!3d6.079368393906785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1714b88f66a7b%3A0x8a7feea89839a01a!2sFaculty%20of%20Engineering%20-%20University%20of%20Ruhuna!5e0!3m2!1sen!2slk!4v1759639212926!5m2!1sen!2slk"
                width="300"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" name="name" className="form-control" id="name" required value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email" required value={formData.email} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" required value={formData.subject} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" name="message" rows="10" required value={formData.message} onChange={handleChange}></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
              <div className="text-center mt-3">
  <a href="/login" className="admin-link">
    Go to Admin Page
  </a>
</div>

              
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;