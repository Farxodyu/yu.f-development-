import React, {useState, useRef} from "react";
import logo from "./logo.svg"
import {Routes, Route, NavLink} from "react-router-dom";
import Works from "../works/Works";
import About from "../about-me/About";
import Contacts from "../contacts/Contacts";
import Home from "../home/Home";
import {gsap} from "gsap";

///////
const Main = () => {
  let headerNav = useRef(null);
  const [position, setPositio]= useState(-100)
  const [changeDisplay, setDisplay]= useState("block")
  const [changeAutoAlpha, setAlpha]= useState(1)
  ///////////////////////////////////
 const onToggleClick = ()=>{
      const x = position!==-100?-100:0;
      setPositio(x)
      const d = changeDisplay!=="none"?"none":"block";
      setDisplay(d)
      const a = changeAutoAlpha!==1?1:0;
      setAlpha(a)
      gsap.to(headerNav.current,
        {
          xPercent:position,
          duration:1,
          ease: "Power4.easeOut",
          delay: 0,
          autoAlpha:changeAutoAlpha,
          display:changeDisplay
        }
        )
  }
  const resizeListener = ()=>{
    if (window.innerWidth<=992){
      return onToggleClick()
    }else {
      return ""
    }
  }
  const inState = [
    {id: 1, name: 'home', link: '/'},
    {id: 2, name: 'works', link: '/works'},
    {id: 3, name: 'about-me', link: '/about'},
    {id: 4, name: 'contacts', link: '/contacts'}
  ];
  const [links] = useState(inState);
  //////////////////////////////////
  
  
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="social">
          <div className="social__line"></div>
          <div className="networks">
            <a href="https://github.com/Farxodyu"><i className="bi bi-github networks__icon" ></i></a>
            <a href="mailto:ideauisup@gmail.com"><i className="bi bi-envelope-at networks__icon" ></i></a>
            <a href="https://t.me/IcorpX"><i className="bi bi-telegram networks__icon" ></i></a>
          </div>
        </div>
        <div className="container main-container nav_padding">
          <NavLink to="/" className={"main__logo"}>
            <img
              src={logo}
              alt=""
            />
            <p>IdeaIU</p>
          </NavLink>
          <div className="main__burger d-lg-none">
            <button className="btn" onClick={resizeListener}><i className="bi bi-list text-light main__icon-size"></i></button>
          </div>
          <div ref={headerNav} className={"header__navigation"}>
            <ul className="navbar-nav main__navbar">
              {links.map((link) => (
                <li key={link.id} className={'header__link'}>
                  <NavLink
                    to={link.link}
                    activeclassname={"active"}
                    onClick={resizeListener}>
                    <span>#</span>{link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      
      
      
      <Routes>
        <Route path="*" element={<Home/>}/>
        <Route path="/works" element={<Works/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </>
  )
}

export default Main;