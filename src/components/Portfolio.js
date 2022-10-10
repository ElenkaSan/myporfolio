import React from "react";
import recipetips from "../img/recipetips.png";
import jobly from "../img/jobly.png";
import myport1 from "../img/myport1.png"
import vaca from "../img/vaca.png"
import {BsPatchPlus} from 'react-icons/bs';
// import '../styles/style.css';

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h2 className="main">PROJECTS</h2>
                <p className="subtitle-a">
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="work-box card">
                <a className="btn" href="https://recipe-tips.herokuapp.com/">
                  <div className="work-img card">
                    <img src={recipetips} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-m-9">
                        <h2 className="main">Recipe Tips</h2>
                        <div className="">
                        <a href="https://github.com/ElenkaSan/Capstone_Project_1" role="button">
                        <div className="w-like">
                          <span className="main"><BsPatchPlus/></span>
                        </div>
                         </a>
                      </div>
                        <div className="text-dark">
                          <span className="w-ctegory Tt">
                          Backend: Python3 | Flask | SQLAlchemy | PostgreSQL | <br/> AJAX | Axios | RESTful API
                          <br></br>
                          Frontend: HTML | Jinja | WTForms | JavaScript | Bootstrap | Font Awesome and raw CSS 
                          </span>
                        </div>
                      </div>
                  
                    </div>
                  </div>
                  </a>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="work-box card">
                <a className="btn" href="https://tearful-cactus.surge.sh">
                  <div className="work-img card">
                    <img src={jobly} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-m-9">
                        <h2 className="main">Jobly (job board site)</h2>
                        <div className="">
                        <a href="https://github.com/ElenkaSan/React-Jobly" role="button">
                        <div className="w-like">
                        <span className="main"><BsPatchPlus/></span>
                        </div>
                        </a>
                      </div>
                        <div className="text-dark">
                          <span className="w-ctegory Tt">
                           Node.js | Express | PostgreSQL | ReactJS | RESTful API
                           <br></br>
                          The app implements role based authorization using JWTs, manages data validation with JSON schema. 
                          {/* <br></br> */}
                          {/* Frontend: A Single-page React app using React-Router for routing and protecting routes based on JWT permissions, and local storage to manage user persistence. */}
                          {/* Tech used: Components, Props, Custom Hooks, React Hooks (useContext, useState, useEffect, Browser Routing, Navigation Routes) */}
                          </span>{" "}
                        </div>
                      </div>
                  
                    </div>
                  </div>
                </a>
              </div>
            </div>
             <div className="col-sm-6">
              <div className="work-box card">
                <a className="btn" href="https://wiry-ground.surge.sh">
                  <div className="work-img card">
                    <img src={vaca} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-m-9">
                        <h2 className="main">Vacation Time</h2>
                        <div className="">
                        <a href="https://github.com/ElenkaSan/Capstone_Project_2_Backend" role="button">
                        <div className="w-like">
                        <span className="main"><BsPatchPlus/></span>
                        </div>
                        </a>
                        <div className="text-dark">
                          <span className="w-ctegory Tt">
                          Frontend: HTML5 | CSS3 | JavaScript | React | Reactstrap | React Bootstrap | Redux | JSON Schema | JSON Web Token | API
                          <br></br>
                          Backend: Node.js | Express.js | SuperTest | JWT Authentication | Bcrypt | PostgreSQL | Axios | RESTful API Endpoints 
                          </span>{" "}
                        </div>
                      </div>
                      
                        {/* <a href="https://github.com/ElenkaSan/Capstone_Project_2_Backend" role="button">
                        <div className="w-like">
                        <span className="main"><BsPatchPlus/></span>
                        </div>
                        </a> */}
                      </div>
                    </div>
                  </div>
                </a> 
              </div>
            </div>
             <div className="col-sm-6">
              <div className="work-box card">
                <a className="btn" href="https://elenanurullina.vercel.app/">
                  <div className="work-img card">
                    <img src={myport1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-m-9">
                        <h2 className="main">Portfolio Website</h2>
                        <div className="">
                        <a href="https://github.com/ElenkaSan/myporfolio.git" role="button">
                        <div className="w-like">
                        <span className="main"><BsPatchPlus/></span>
                        </div>
                        </a>
                      </div>
                        <div className="text-dark">
                          <span className="w-ctegory Tt">
                          HTML | CSS | JavaScript | React | Styled-Components | Next.js
                          </span>{" "}
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </a> 
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
