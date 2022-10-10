import React from "react";
import Typed from "react-typed";
import { FiMail } from 'react-icons/fi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import styles from '../styles/Home.module.css'
import SocialLink from './SocialLink'

const Intro = () => {

    return (
      <div className='jumbotron p-4'>
      <div id="home" className="intro route bg-image" >
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
        <div className={`${styles.content} para-animate`}>
          <div className="text-dark"> 
          {/* <div className="text-dark float-right ">  */}
            <h1 className="main">Elena Nurullina</h1>  
            <hr class="my-2"></hr>
            <h4 className="texts">Full-Stack Software Engineer with 10+ years of experience in a bank and travel agency (5 years). 
            Having an Economics degree, it helps me to take any challenges. I like to specialize in Full-Stack, 
            but especially in Front-End Development. <br/> I am passionate about combining creative design with code.</h4>
            </div>
          <div className={styles.socials}>
            <SocialLink url='https://www.linkedin.com/in/elena-nurullina/' icon={<FaLinkedin color='#0077B5' />} />
            <SocialLink url='https://github.com/ElenkaSan' icon={<FaGithub color='rgb(218, 78, 18)' />} />
            <SocialLink url='mailto:elenka_san@yahoo.com?subject=Website Inquiry' icon={<FiMail color='#4d0489' />} />
          </div>
          </div>
          </div>
           <br></br>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider main">
                  <Typed
                    strings={[
                      "Front End Developer",
                      "Back End Developer",
                      "Full-Stack Software Developer",
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-dark js-scroll px-4" style={{ 
                     textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue" }}
                  href="#work"
                  role="button"
                >
                  My Projects
                </a>
                <span className="input-group-btn me-2"></span>
                <a
                  className="btn btn-dark js-scroll px-4" style={{
                     textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue" }}
                  href="https://drive.google.com/file/d/1gA8lQiTj4Jqmvf8TTBPhfyMQy6Go-dwW/view?usp=sharing"
                  role="button"
                > My Resume </a>
              </p>
            </div>
          </div>
        </div>
      </div> 
    );
  
}

export default Intro;
