import React,{useState} from "react";
import logo from "../../images/logo.svg"
import {Routes,Route,NavLink} from "react-router-dom";
import Works from "../works/Works";
import About from "../about-me/About";
import Contacts from "../contacts/Contacts";
import Home from "../home/Home";
const Main = (props) => {
        const inState = [
            {id:1, name:'home', link:'/', condition:''},
            {id:2, name:'works', link: '/works', condition: ''},
            {id:3, name:'about-me', link: '/about', condition: ''},
            {id:4, name:'contacts', link: '/contacts', condition: ''},

        ];
    const [links]=useState(inState)
    return (
        <>
            <nav className="navbar navbar-expand-lg nav_padding">
                <div className="container main-container">
                    <a href="#">
                        <img src={logo} alt=""/>
                        <p>yu.f</p>
                    </a>
                    <div className={"header__navigation"}>
                        <ul className="navbar-nav">
                                {links.map((link)=>(
                                  <li key={link.id} className={'header__link'}>
                                      <NavLink to={link.link} activeClassName={"active"}>
                                          <span>#</span>{link.name}
                                      </NavLink>
                                  </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/works" element={<Works/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
            <footer>

            </footer>
        </>
    )
}

export default Main;