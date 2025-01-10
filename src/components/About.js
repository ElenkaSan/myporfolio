import React from "react";
import { SiJavascript, SiPostgresql, SiFlask, SiVisualstudiocode, SiNextdotjs, SiJest, SiJquery, SiRedux, SiTypescript, SiMongodb, SiMaterialui, SiJinja, SiDatadog } from 'react-icons/si'
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaJenkins } from 'react-icons/fa'
import portfoliophoto from '../img/Elenkasan.jpg'
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
                        <ToolkitIcon icon={<SiJinja color='#1e1d1b' className="bg-light card"/>} name='Jinja' />
                        <ToolkitIcon icon={<FaDatabase color='#f29111' />} name='SQL' />
                        <ToolkitIcon icon={<SiPostgresql color='#AFD275' className="bg-secondary card"/>} name='PostgreSQL' />
                        <ToolkitIcon icon={<SiMongodb color='rgb(54, 213, 62)' />} name='MongoDB' />
                        <ToolkitIcon icon={<SiDatadog color='#ff00ff' />} name='Datadog' />
                        <ToolkitIcon icon={<FaJenkins color='#ffff00' />} name='Jenkins' />
                        <ToolkitIcon icon={<SiJest color='#e34c26' className="bg-warning card" />} name='Jest' />
                        <ToolkitIcon icon={<SiJquery color='#78cff5' />} name='JQuery' />
                        <ToolkitIcon icon={<FaGitAlt color='f34f29' />} name='Git' />
                        <ToolkitIcon icon={<SiVisualstudiocode color='#0078d7' />} name='VS Code' />
                        <ToolkitIcon icon={<FaBootstrap color='#563d7c' className="bg-light card"/>} name='Bootstrap' />
                        <ToolkitIcon icon={<SiMaterialui color='#153ddd' />} name='MUI' />
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
                        <p className="texts lead"> 
                         I'm a dedicated Full-Stack Software Engineer with hands-on experience in both front-end and back-end technologies. <br></br>
                         I worked on several personal projects as well as for companies, gaining valuable application development 
                         experience supporting ranging from front-end to back-end technologies and stacks with experience in designing, developing, 
                         and operationalizing cloud-native applications using Agile methodologies. I have built full-stack web applications, such as food recipes 
                         and flight/hotel searching websites, developed the mobile layout, and created a media query for tablet and desktop versions using Bootstrap and MUI Frameworks.
                         <br></br>
                         I have a true passion for Front-End development, where I can combine my creativity with logical design principles to create 
                         visually appealing and user-friendly interfaces. <br></br> I'm adaptable and open to 100% remote work opportunities, possessing the discipline
                         and motivation to thrive in remote environments. I'm excited to contribute to an innovative and collaborative team, 
                         leveraging my diverse skill set and continuous improvement mindset to make a meaningful impact in the field of software engineering.
                        </p>
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
