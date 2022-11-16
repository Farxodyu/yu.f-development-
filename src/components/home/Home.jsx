import React, {useState} from "react";
import avatar from "./image-removebg-preview2.png";
import home_logo from "./home_logo.svg";
import home_dots from "./Dots.svg"
import {Routes, Route, Link, NavLink} from "react-router-dom";
import Contacts from "../contacts/Contacts";
import Works from "../works/Works";
import Projects from "./Projects";
import rec22 from './Rectangle22.jpg'
import rec23 from './Rectangle23.jpg'
import rec24 from './Rectangle24.jpg'
const Home = () => {
  const inProjects = [
    {
      id:1,
      image:rec22,
      skills: "HTML SCSS ",
      title:"ChertNodes",
      server: "servers hosting",
      link:"#",
    },
    {
      id:2,
      image:rec23,
      skills: "React HTML SCSS ",
      title:"ProtectX",
      server: "servers hosting",
      link:"#"},
    {
      id:3,
      image:rec24,
      skills: "HTML CSS JS",
      title:"ChertNodes",
      server: "servers hosting",
      link:"#"
    }
  ]
  const [projects] = useState(inProjects);
  return (
    <>
      <div className="container main-container home">
        <div className="row">
          <div className="col-xl-6 col-lg-12 d-flex flex-column justify-content-center home__b-1">
            <h1 className="home__h"> My name is <span>Farkhod</span> and
              I'm a <span>front-end developer</span>
            </h1>
            <p className="home__descr">
              I craft responsive websites where technologies meet creativity
            </p>
            <button className="btn home__btn"><Link to="/contacts" className="home__contact">
              Contact me!!
            </Link></button>
          </div>
          <div className="col-xl-6 col-lg-12  home__b-2">
            <div className="home__preview">
              <img src={avatar} className={"home__avatar"} alt="Avatar"/>
              <img src={home_logo} className={"home__logo"} alt="homeLoge"/>
              <img src={home_dots} className={"home__dots"} alt="Dots"/>
            </div>
            <div className="home__working">
              <div className="home__working-border">
                <div className="home__working-color"></div>
                <p className="home__working-description">
                  Currently working on <span>Portfolio</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="home__dr-who">
          <h2 className="home__dr-who-qoutes">
            <span className={"home__dr-who-qoutes-left"}>&ldquo;</span>With great power comes great electricity bill
            <span className={"home__dr-who-qoutes-right"}> &rdquo;</span>
          </h2>
          <p className="home__dr-who-autor">
            - Dr. Who
          </p>
        </div>
        
        
        <div className="projects">
          <div className="projects__tit-line">
            <h3 className="projects__tit-line-title"><span>#</span>projects</h3>
            <div className="projects__tit-line-line"></div>
          </div>
          <div className="projects__view-line">
            <NavLink to={'/works'} className="projects__view-line-view">View All</NavLink>
            <div className={"projects__view-line-line"}></div>
          </div>
        </div>
        
        <div className="problocks">
          {projects.map(item=>(
            <Projects key={item.id} image={item.image} link={item.link} server={item.server} title={item.title} skills={item.skills}/>
          ))}
        </div>
      </div>
      <Routes>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/works" element={<Works/>}/>
      </Routes>
    </>
  )
}
export default Home