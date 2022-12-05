import React from "react";
import { FaTwitter } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import sakura from "../img/sakura.jpeg";
import SocialLink from './SocialLink';
import styles from '../styles/SocialLink.module.css';

class Contact extends React.Component {
  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route" 
        style={{ backgroundImage: "url(" + sakura + ")",
         backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: "center"
      }}
      >
        {/* <div className="overlay-mf"></div> */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full card change"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">Contact</h5>
                      </div>
                      <div>
                        <form
                          action="https://formspree.io/f/meqdabjn"
                          method="POST"
                          className="contactForm"
                        >
                          <div id="sendmessage">
                            Your message has been sent. Thank you!
                          </div>
                          <div id="errormessage"></div>
                           <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="name"
                                  placeholder="Your Name"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 4 chars"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Your Email"
                                  data-rule="email"
                                  data-msg="Please enter a valid email"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 8 chars of subject"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  rows="5"
                                  data-rule="required"
                                  data-msg="Please write something for us"
                                  placeholder="Message"
                                ></textarea>
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button type="submit"
                                className="btn js-scroll px-4" style={{
                                   backgroundColor:"#069286", color:"#e5c6ff"
                                  // textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue" 
                                  }}>
                                Send
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h2 className="">Get in Touch</h2>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          Simply fill the from and send me an email.
                          <br/>
                          Feel free to improve or contribute. 
                        </p>
                      </div>
                      <div className="socials">
                      <div className={styles.socialLinks}>
			             		  <h1> <SocialLink
                         url="https://twitter.com/Elenka_San"
                         icon={<FaTwitter color="#00fcda" />}
                         /> 
                        <SocialLink
                         url="https://www.linkedin.com/in/elena-nurullina"
                         icon={<AiFillLinkedin color="#63d3ff" />}
                        /></h1>
			</div>
		      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                </div>
              </div>
            </div>
          </div>
        </footer>
        <footer>
	<span className="text-light lead">&copy; 2022 Elena Nurullina</span>
	</footer>
      </section>
    );
  }
}

export default Contact;
