import React from "react";
import { SiJavascript, SiPostgresql, SiFlask, SiVisualstudiocode, SiNextdotjs, SiJest, SiJquery, SiRedux, SiTypescript, SiMongodb } from 'react-icons/si'
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt } from 'react-icons/fa'
import portfoliophoto from '../img/portfoliophoto.jpg'
import styles from '../styles/Home.module.css'
import ToolkitIcon from './ToolkitIcon'

// class About extends React.Component {
const About = () => {

    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full card bg-transparent" >
                <div className="row">
                  <div className="col-md-6 texts">
                    <div className={styles.toolKit}>
                      <div className={styles.tools}>
                        <ToolkitIcon icon={<FaHtml5 color='#FF5733' />} name='HTML' />
                        <ToolkitIcon icon={<FaCss3Alt color='#264de4' />} name='CSS' />
                        <ToolkitIcon icon={<SiJavascript color='#F0DB4F' />} name='JavaScript' />
                        <ToolkitIcon icon={<FaReact color='#61DBFB' />} name='React' />
                        <ToolkitIcon icon={<SiRedux color='#4dc0b5' className="bg-success card" />} name='Redux' />
                        <ToolkitIcon icon={<FaNodeJs color='#85dcba' className="bg-primary card"/>} name='Node/Express' />
                        <ToolkitIcon icon={<SiNextdotjs color='#000' />} name='Next' />
                        <ToolkitIcon icon={<SiTypescript color='#007acc' />} name='Typescript' />
                        <ToolkitIcon icon={<FaPython color='#4b8bbe' />} name='Python' />
                        <ToolkitIcon icon={<SiFlask color='fccb2b' className="bg-dark card"/>} name='Flask' />
                        <ToolkitIcon icon={<FaDatabase color='#f29111' />} name='SQL' />
                        <ToolkitIcon icon={<SiPostgresql color='#AFD275' className="bg-secondary card"/>} name='PostgreSQL' />
                        <ToolkitIcon icon={<FaBootstrap color='#563d7c' className="bg-light card"/>} name='Bootstrap' />
                        <ToolkitIcon icon={<FaGitAlt color='f34f29' />} name='Git' />
                        <ToolkitIcon icon={<SiJest color='#e34c26' className="bg-warning card" />} name='Jest' />
                        <ToolkitIcon icon={<SiJquery color='#78cff5' />} name='JQuery' />
                        <ToolkitIcon icon={<SiVisualstudiocode color='#0078d7' />} name='VS Code' />
                        <ToolkitIcon icon={<SiMongodb color='rgb(54, 213, 62)' />} name='MongoDB' />
                      </div>
                      <div className={styles.toolkitTitle}>
                      <h1 className="span loader fw-bold" id="loader">
                        <span className='stagger-in4'>T</span>
                      </h1>
                      <h1 className="span loader fw-bold" id="loader">
                        <span className='stagger-in4'>O</span>
                      </h1>
                      <h1 className="span loader fw-bold" id="loader">
                        <span className='stagger-in4'>O</span>
                      </h1>
                      <h1 className="span loader fw-bold" id="loader">
                        <span className='stagger-in4'>L</span>
                      </h1>
                      <h1 className="span loader fw-bold" id="loader">
                        <span className='stagger-in4'>K</span>
                      </h1>
                      <h1 className="span loader fw-bold" id="loader">
                        <span className='stagger-in4'>I</span>
                      </h1>
                      <h1 className="span loader fw-bold" id="loader">
                        <span className='stagger-in4'>T</span>
                      </h1>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                      <img src={portfoliophoto} className="card-img-top img-thumbnail"
                           alt='author' objectFit='cover' quality={75} loading='eager'/> 
                      <hr></hr>
                        <h2 className="main">About Me</h2>
                      <div className={`${styles.contentT} para-animate`}>
                        <p className="texts lead">I am a Full-Stack Software Engineer with a passion for working to achieve personal and team goals.
                          I also recently completed the Software Engineering Career Track where I learned the latest Web Development skills
                          from top industry professionals to stay modernized in the ever-changing tech landscape. 
                          I am most passionate about Front-End development since it incorporates both creativity and logical design. 
                          I continue to learn more and develop in this direction and improve my skills. Open to employment 100% remote work.</p>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About;
