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
              <section className="nav">
               <h1 className="display-5 main">Elena Nurullina</h1>
                <h3 className="span loader" id="loader">
                 <span className="m">S</span>
                 <span className="m">O</span>
                 <span className="m">F</span>
                 <span className="m">T</span>
                 <span className="m">W</span>
                 <span className="m">A</span>
                 <span className="m">R</span>
                 <span className="m">E</span>
                 <span className="m">&nbsp;</span>
                 <span className="m">E</span>
                 <span className="m">N</span>
                 <span className="m">G</span>
                 <span className="m">I</span>
                 <span className="m">N</span>
                 <span className="m">E</span>
                 <span className="m">E</span>
                 <span className="m">R</span>
                </h3>        
              </section>
          {/* <div className="text-dark float-right ">  */}
            {/* <h1 className="main">Elena Nurullina</h1>   */}
            <hr class="my-2"></hr>
             <h4 className="texts">
              Full-Stack Software Engineer with an economics background and various job experience, 
              equipped with a strong foundation in business principles and analytical thinking. 
              Specializing in Full-Stack development, my true passion is Front-End Development,
              where I merge creative design principles with coding expertise to create engaging and visually appealing applications.
             </h4>
           </div>
           <div className={styles.socials}>
            <SocialLink url='https://www.linkedin.com/in/elena-nurullina/' icon={<FaLinkedin color='#0a018be7' />} />
            <SocialLink url='https://github.com/ElenkaSan' icon={<FaGithub color='#AFD275' />} />
            <SocialLink url='mailto:elenka_san@yahoo.com?subject=Website Inquiry' icon={<FiMail color='#290859e7' />} />
           </div>
          </div>
          </div>
           {/* <br></br> */}
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
                  className="btn js-scroll px-4" style={{ 
                    backgroundColor:"#084e63", color:"#AFD275"
                    // backgroundColor:"#885f7fe7", color:"#0a018be7" 
                  }}
                  href="#work"
                  role="button"
                >
                  My Projects
                </a>
                <span className="input-group-btn me-2"></span>
                <a
                  className="btn js-scroll px-4" style={{ 
                    backgroundColor:"#084e63", color:"#AFD275"
                    // backgroundColor:"#885f7fe7", color:"#0a018be7" 
                  }}
//                   href="https://drive.google.com/file/d/1CjrY4sV1myB9wjflJLysGtZ-8Ok3Q5MO/view?usp=sharing"
                  href="https://drive.google.com/file/d/1EoF9U9577y6-awV7nVfdWgEFTMWmgp4v/view?usp=sharing"
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
