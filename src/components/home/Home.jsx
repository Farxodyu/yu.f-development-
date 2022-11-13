import React from "react";
import avatar from "./image-removebg-preview2.png";
import home_logo from "./home_logo.svg";
import home_dots from "./Dots.svg"
import {Routes, Route, Link} from "react-router-dom";
import Contacts from "../contacts/Contacts";


const Home = () => {
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
            </div>
          
          <Routes>
            <Route path="/contacts" element={<Contacts/>}/>
          </Routes>
        </>
    )
}
export default Home