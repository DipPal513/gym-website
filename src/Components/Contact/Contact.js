import React from "react";
import '../../Styles/Contact.css';
const Contact = () => {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div
              className="wrapper img"
              style={{
                backgroundImage: `url('http://zwin.io/html/moristan/assets/img/contact/cable-call-communication.png')`,
                backgroundSize:'cover',
                backgroundPosition:'center'
              }}
            >
              <div className="row py-5">
                <div className="col-md-8 col-lg-12">
                  <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4 text-uppercase fw-bold">Get in touch with <span style ={{color:'#e1193e'}}>us</span></h3>
                    <div id="form-message-warning" className="mb-4"></div>

                    <form
                      method="POST"
                      id="contactForm"
                      name="contactForm"
                      className="contactForm"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                           
                            <input
                            style={{background:'transparent'}}
                              type="text"
                              className="form-control mb-4"
                              name="name"
                              id="name"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                          
                            <input
                            style={{background:'transparent'}}
                              type="email"
                              className="form-control mb-4"
                              name="email"
                              id="email"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                      
                        <div className="col-md-12">
                          <div className="form-group">
                            
                            <textarea
                            style={{background:'transparent'}}
                              name="message"
                              className="form-control"
                              id="message"
                              cols="30"
                              rows="6"
                              placeholder="Message"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-lg-1 mt-3">
                          <div className="form-group ms-auto">
                            <input
                              type="submit"
                              value="Send Message"
                              className="contact-btn ms-auto"
                            />
                            <div className="submitting"></div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
