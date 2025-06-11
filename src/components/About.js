import React from "react";
import { SiJavascript, SiPostgresql, SiFlask, SiVisualstudiocode, SiNextdotjs, SiJest, SiJquery, SiRedux, SiTypescript, SiMongodb, SiMui, SiJinja, SiDatadog, SiIntellijidea, SiMysql, SiJunit5, SiMocha } from 'react-icons/si'
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaJenkins, FaJava, FaDocker } from 'react-icons/fa'
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
                        <ToolkitIcon icon={<FaJava color='#153ddd' className="bg-warning card"/>} name='Java' />
                        <ToolkitIcon icon={<FaPython color='#4b8bbe' />} name='Python' />
                        <ToolkitIcon icon={<SiFlask color='#fccb2b' className="bg-dark card"/>} name='Flask' />
                        <ToolkitIcon icon={<SiJinja color='#1e1d1b' className="bg-light card"/>} name='Jinja' />
                        <ToolkitIcon icon={<FaDatabase color='#f29111' />} name='SQL' />
                        <ToolkitIcon icon={<SiPostgresql color='#AFD275' className="bg-secondary card"/>} name='PostgreSQL' />
                        <ToolkitIcon icon={<SiMysql color='#264de7' className="bg-light card"/>} name='MySQL' />
                        <ToolkitIcon icon={<SiMongodb color='rgb(54, 213, 62)' />} name='MongoDB' />
                        <ToolkitIcon icon={<SiDatadog color='#ff00ff' />} name='Datadog' />
                        <ToolkitIcon icon={<FaJenkins color='#ffff00' />} name='Jenkins' />
                        <ToolkitIcon icon={<FaDocker color='#264de4' />} name='Docker' />
                        <ToolkitIcon icon={<SiJest color='#e34c26' className="bg-warning card" />} name='Jest' />
                        <ToolkitIcon icon={<SiMocha color='#64485cd8' className="bg-light card" />} name='Mocha' />
                        <ToolkitIcon icon={<SiJunit5 color='#e34c26' className="bg-warning card" />} name='JUnit' />
                        <ToolkitIcon icon={<SiJquery color='#78cff5' />} name='JQuery' />
                        <ToolkitIcon icon={<FaGitAlt color='#f34f29' />} name='Git' />
                        <ToolkitIcon icon={<SiVisualstudiocode color='#0078d7' />} name='VS Code' />
                        <ToolkitIcon icon={<SiIntellijidea color='#ff00ff' />} name='IntelliJiDea' />
                        <ToolkitIcon icon={<FaBootstrap color='#563d7c' className="bg-light card"/>} name='Bootstrap' />
                        <ToolkitIcon icon={<SiMui color='#153ddd' />} name='MUI' />
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
                         I’m a dedicated Full-Stack Software Engineer with hands-on experience in both front-end and back-end technologies, developing responsive, 
                         scalable web applications across diverse industries—including fintech and media. My foundation in Economics 
                         and prior banking experience help me approach technical challenges with a strong analytical and client-focused mindset. 
                         I thrive in fast-paced environments, collaborating in Agile teams to deliver elegant front-end interfaces and robust backend services.
                         I have built full-stack web applications such as food recipe search tools, flight and hotel booking websites, and a car rental booking app. 
                         Additionally, I have developed mobile layouts and created media queries for tablet and desktop versions using Bootstrap and Material-UI frameworks.
                          <br></br>
                         Skilled in technologies such as JavaScript, React, Node.js, Python, Java, and SQL-based databases. I have led and contributed to various projects, 
                         including the successful development of a comprehensive full-stack coaching website for the startup company Formats. 
                         This website serves as a multi-format development center and has attracted over 800 visitors from the local area.
                         I’ve integrated AI solutions using OpenAI, n8n, and LangChain to automate workflows and enhance user experiences. 
                         I’m also proficient in DevOps workflows, leveraging Docker, Jenkins, and Datadog to ensure smooth deployment and monitoring.
                          <br></br>
                         While I’m experienced across the full stack, I have a passion for front-end development, where I can blend visual design with code to create intuitive, user-centric experiences. 
                         I’ve worked in both on-site and remote roles, and I’m fully adaptable to 100% remote teams. Whether building a pixel-perfect UI 
                         or architecting backend logic, I bring creativity, precision, and a relentless drive for continuous learning and impactful problem-solving.

                         {/* I'm a dedicated Full-Stack Software Engineer with hands-on experience in both front-end and back-end technologies. <br></br>
                         I worked on several personal projects as well as for companies, gaining valuable application development 
                         experience supporting ranging from front-end to back-end technologies and stacks with experience in designing, developing, 
                         and operationalizing cloud-native applications using Agile methodologies. I have built full-stack web applications, such as food recipes 
                         and flight/hotel searching websites, developed the mobile layout, and created a media query for tablet and desktop versions using Bootstrap and MUI Frameworks. */}
                         {/* <br></br>
                         I have a true passion for Front-End development, where I can combine my creativity with logical design principles to create 
                         visually appealing and user-friendly interfaces. <br></br> I'm adaptable and open to 100% remote work opportunities, possessing the discipline
                         and motivation to thrive in remote environments. I'm excited to contribute to an innovative and collaborative team, 
                         leveraging my diverse skill set and continuous improvement mindset to make a meaningful impact in the field of software engineering. */}
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
